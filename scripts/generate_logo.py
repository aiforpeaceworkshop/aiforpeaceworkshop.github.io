#!/usr/bin/env python3
"""Prepare faithful, screen-optimized masks for the AI for Peace wordmark.

The original artwork remains untouched. This script converts its monochrome
luminance to alpha, strengthens the principal ink without tracing or changing
any shapes, crops only dead canvas, and exports the 1440px browser mask. The
fine halftone pattern and Pac-Man/drone details remain raster-faithful instead
of being approximated as vector rectangles.

Run from the repository root:

    python3 scripts/generate_logo.py
"""

from pathlib import Path

from PIL import Image, ImageChops, ImageOps


SOURCE = Path("public/img/aiforpeace_logo.png")
REFINED_1440 = Path("public/img/aiforpeace_logo_refined-1440.png")
PACMAN_SHADOW_1440 = Path("public/img/aiforpeace_pacman_shadow-1440.png")


source = Image.open(SOURCE).convert("RGBA")
luminance = ImageOps.grayscale(source)

# Refined alpha: retain white as transparent and black/dither dots as solid,
# while compressing only the soft raster edge tones. This improves readability
# at interface sizes without redrawing the logo.
curve = []
for value in range(256):
    if value >= 252:
        opacity = 0
    elif value <= 56:
        opacity = 255
    else:
        normalized = (252 - value) / (252 - 56)
        opacity = round(255 * (normalized ** 1.08))
    curve.append(opacity)

refined_alpha = luminance.point(curve)
bounds = refined_alpha.getbbox()
if bounds is None:
    raise RuntimeError("The source logo contains no visible artwork")

padding = 32
left = max(0, bounds[0] - padding)
top = max(0, bounds[1] - padding)
right = min(source.width, bounds[2] + padding)
bottom = min(source.height, bounds[3] + padding)

refined = Image.new("RGBA", source.size, (0, 0, 0, 0))
refined.putalpha(refined_alpha)
refined = refined.crop((left, top, right, bottom))

# The original letter shadows are a diagonal halftone displaced 40 source
# pixels left and 85 pixels down. Pac-Man has no shadow in the source artwork,
# so derive one from its exact silhouette and a 14 px tile sampled from the
# artwork's own halftone. This extends the existing visual language without
# retracing or altering Pac-Man itself.
pacman_box = (4322, 263, 4717, 693)
shadow_offset = (-40, 85)
halftone_tile = refined.getchannel("A").crop((604, 173, 618, 187))
halftone = Image.new("L", refined.size, 0)
for tile_y in range(0, refined.height, halftone_tile.height):
    for tile_x in range(0, refined.width, halftone_tile.width):
        halftone.paste(halftone_tile, (tile_x, tile_y))

shadow_shape = Image.new("L", refined.size, 0)
pacman_alpha = refined.getchannel("A").crop(pacman_box)
shadow_shape.paste(
    pacman_alpha,
    (pacman_box[0] + shadow_offset[0], pacman_box[1] + shadow_offset[1]),
)
shadow_alpha = ImageChops.multiply(shadow_shape, halftone)
pacman_shadow = Image.new("RGBA", refined.size, (0, 0, 0, 0))
pacman_shadow.putalpha(shadow_alpha)


def save_width(image: Image.Image, width: int, path: Path) -> None:
    height = round(image.height * width / image.width)
    resized = image.resize((width, height), Image.Resampling.LANCZOS)
    resized.save(path, optimize=True)


save_width(refined, 1440, REFINED_1440)
save_width(pacman_shadow, 1440, PACMAN_SHADOW_1440)

print(
    f"prepared {REFINED_1440.name} and {PACMAN_SHADOW_1440.name} "
    f"from the {refined.width} x {refined.height} refined artwork"
)
