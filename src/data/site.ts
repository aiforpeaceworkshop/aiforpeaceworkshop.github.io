/* ============================================================
   AI for Peace — site content
   Edit this file to update people, dates, and copy.
   ============================================================ */

export const SITE = {
  title: "AI for Peace",
  tagline: "Building Bridges, Not Weapons",
  advertisement:
    "AI for Peace at NeurIPS 2026: examining military uses of AI, dual-use risks, and pathways toward peace-oriented AI research.",
  contactEmail: "ai-for-peace-workshop@googlegroups.com",
  submissionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfJ7jj9bkrpiP0Dqovjgq2qBL7ttAcDH3zLq_rIsrhkvs_FLQ/viewform",
} as const;

/* ---- Editions ---------------------------------------------- */

export const CURRENT_EDITION = {
  n: "02",
  venue: "NeurIPS 2026",
  city: "Paris, France",
  place: "NeurIPS 2026 · Paris",
  dateLabel: "Saturday, Dec 12, 2026",
  format: "One-day, in-person workshop",
} as const;

export const FIRST_EDITION = {
  n: "01",
  venue: "ICLR 2026",
  city: "Rio de Janeiro, Brazil",
  dateLabel: "April 26, 2026",
  theme: "Building Bridges, Not Weapons: AI for Peaceful Progress",
  stats: [
    { value: "~300", label: "Attendees" },
    { value: "28", label: "Submissions" },
    { value: "13", label: "Posters" },
    { value: "3", label: "Oral talks" },
  ],
} as const;

/* ---- Navigation -------------------------------------------- */

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Call", href: "/#call" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Talks", href: "/#accepted-talks" },
  { label: "Organizers", href: "/#organizers" },
  { label: "First edition", href: "/iclr-2026" },
  { label: "Contact", href: "/#contact" },
] as const;

/* ---- Objectives -------------------------------------------- */

export const OBJECTIVES = [
  {
    title: "Make the pipelines visible",
    body: "Increase transparency about how AI research enters military, surveillance, and security applications.",
  },
  {
    title: "Build collective responses",
    body: "Develop collective strategies for the ethical, societal, and legal problems associated with military AI.",
  },
  {
    title: "Support peace-building work",
    body: "Support peacebuilding, humanitarian action, civilian protection, and accountability, including research that identifies or audits harmful AI deployments.",
  },
];

/* ---- Call for presentations (NeurIPS 2026) ----------------- */

/**
 * Explicit stance, so the call does not attract pro-military submissions.
 * Adapted from the workshop's own positioning language.
 */
export const CFP_POSITION =
  "We reject the normalization of AI for military and surveillance systems, recognizing that these technologies amplify violence and erode civil liberties.";

export const CFP_TOPICS = [
  "Studies investigating how basic research transitions into military applications.",
  "Effects of AI militarization on marginalized communities and global inequalities.",
  "Research efforts that contribute directly to peace-building applications in a non-violent way.",
  "Collective strategies to address ethical risks as a community.",
  "Historical or comparative analyses of dual-use technology governance.",
  "Sociotechnical audits of existing military AI systems.",
  "Whistleblowing mechanisms and academic responsibility in high-risk research.",
];

/** Out of scope — carried over from the first-edition call for papers. */
export const CFP_EXCLUSIONS = [
  "Promotion, optimization, or deployment of military or weapons-related AI systems.",
  "Defense-oriented AI research without a critical, ethical, or governance perspective.",
  "AI safety or alignment work with no connection to militarization, conflict, or peace.",
];

/* ---- Accepted talks (NeurIPS 2026) --------------------------- */

export type AcceptedTalk = {
  title: string;
  authors: string;
  resource?: { url: string; label: string };
};

/** Titles, author order, and affiliations supplied by the organizers. */
export const ACCEPTED_TALKS: AcceptedTalk[] = [
  {
    title: "Geopolitics of Niobium: The DR Congo in the Aerospace Era.",
    authors: "Laure Gnassou",
  },
  {
    title: "Direct Causation in International Humanitarian Law and the Challenge of AI-Mediated Civilian Cyber Operations.",
    authors: "Alice Saito (University of Tokyo)",
    resource: { url: "https://arxiv.org/abs/2606.29175", label: "arXiv paper" },
  },
  {
    title: "Safeguarding Testimony Archives: An Ethical Impact Assessment Framework with Preliminary Red Team Validation.",
    authors: "Nathan Heath (Syntony; The AIHL Project), Susan Nesbitt (The Cantellus Group), Jennifer Victoria Scurrell (University of Zurich), Broderick McDonald (The Alan Turing Institute; University of Oxford)",
    resource: { url: "https://indico.cern.ch/event/1721046/", label: "Talk page" },
  },
  {
    title: "When General-Purpose Language Models Supply Dual-Use Expertise: A Forensic Signal for Peace-Oriented AI Governance.",
    authors: "Manodyna KH, Samarth Ramesh",
  },
  {
    title: "Who Maps the Crisis? Community-Governed AI for Peacebuilding and Disaster Response.",
    authors: "Rebecca Firth (Humanitarian OpenStreetMap Team)",
  },
  {
    title: "Complex systems modelling for informing peace-building efforts.",
    authors: "Joseph Aylett-Bullock (University of Bristol)",
  },
  {
    title: "Designing for De-escalation: Goal Framing for Strategic Decision-Making in High-Stakes Scenarios.",
    authors: "Carlos Toxtli (Clemson University), Manuel Delaflor (Metacognition Institute)",
  },
  {
    title: "The Philosophical Grounds of a Duty, not just a Right, to Resist Injustice.",
    authors: "Annette Zimmermann (University of Wisconsin-Madison)",
  },
  {
    title: "Non-State Armed Groups and the Limits of AI Safeguards and Evaluations.",
    authors: "Panashe Zowa (Independent)",
  },
  {
    title: "From Human Rights Evidence to Responsible AI for Peace: Lessons from Conflict-Affected Yemen.",
    authors: "Khaled Ayesh Abdullah Sagheer (National Forum for Human Rights, Yemen)",
  },
  {
    title: "Watching the Watched, Blinding the Watchers: Military-Origin Facial Recognition and the Erosion of Police Accountability in Brazil.",
    authors: "Jaysa Keylla Siqueira Barbosa (Federal University of Rio Grande do Norte)",
  },
  {
    title: "MAESTRO4IHL: A Threat Model Framework for Synthetic Media Harms to POW Protections under IHL.",
    authors: "Nathan Heath (Syntony; The AIHL Project), Dr. Wm. Matthew Kennedy (King's College London), Valmik Nahata (University of California San Diego)",
    resource: { url: "https://www.aihlproject.org/", label: "Project website" },
  },
  {
    title: "Mapping Military AI from Corporate Filings and Public Award Records.",
    authors: "Hadi Asghari (TU Berlin)",
  },
];

/* ---- People ------------------------------------------------ */

export type Person = {
  name: string;
  affil?: string;
  affilLink?: string;
  webpage?: string;
  img?: string;
  role?: string;
  topic?: string;
};

/**
 * Organizing committee — NeurIPS 2026 (Paris).
 * Order and roles follow the approved workshop proposal.
 */
export const ORGANIZERS: Person[] = [
  {
    name: "Noa Garcia",
    role: "General Chair",
    affil: "The University of Osaka",
    affilLink: "https://www.osaka-u.ac.jp/en",
    webpage: "https://www.noagarciad.com",
    img: "/img/organizers/noagarcia.jpg",
  },
  {
    name: "Leonardo Impett",
    role: "Program Chair — Speakers",
    affil: "University of Cambridge",
    affilLink: "https://www.cdh.cam.ac.uk",
    webpage: "https://www.cdh.cam.ac.uk/about/people/dr-leonardo-impett/",
    img: "/img/organizers/leonardoimpett.jpg",
  },
  {
    name: "Yannis Kalantidis",
    role: "Program Chair — Presentations",
    webpage: "https://www.skamalas.com",
    img: "/img/organizers/yanniskalantidis.jpg",
  },
  {
    name: "Sonia Fereidooni",
    role: "Social Chair",
    affil: "University of Cambridge",
    affilLink: "https://www.cdh.cam.ac.uk",
    webpage: "https://www.cdh.cam.ac.uk/about/people/sonia-fereidooni/",
    img: "/img/organizers/soniafereidooni.jpg",
  },
  {
    name: "Pier Luigi Dovesi",
    role: "Communications Chair",
    affil: "The Good AI Lab",
    affilLink: "https://thegoodailab.org",
    webpage: "https://thegoodailab.org/team/pier-luigi-dovesi",
    img: "/img/organizers/pierluigidovesi.jpg",
  },
  {
    name: "Alexandra Volokhova",
    role: "Financial Chair",
    affil: "Mila, Université de Montréal",
    affilLink: "https://mila.quebec",
    webpage: "https://mila.quebec/en/directory/alexandra-volokhova",
    img: "/img/organizers/alexandravolokhova.jpg",
  },
];

/**
 * Proposed invited speakers — NeurIPS 2026 (Paris).
 * Keep unpublished until individual participation is confirmed.
 * Order: alphabetical by last name (per the proposal).
 */
export const NEURIPS_SPEAKERS: Person[] = [
  {
    name: "Abeba Birhane",
    affil: "Trinity College Dublin",
    affilLink: "https://www.tcd.ie",
    webpage: "https://abebabirhane.com/",
    img: "/img/speakers/abebabirhane-tcd.jpg",
    topic: "Machine learning: from research and application to downstream societal impacts",
  },
  {
    name: "Verity Coyle",
    affil: "Human Rights Watch",
    affilLink: "https://www.hrw.org",
    webpage: "https://www.hrw.org/about/people/verity-coyle",
    img: "/img/speakers/veritycoyle.jpg",
    topic: "From arms control to algorithmic warfare: regulating emerging military tech",
  },
  {
    name: "Juan Carlos De Martin",
    affil: "Polytechnic University of Turin",
    affilLink: "https://www.polito.it/en",
    webpage: "https://demartin.polito.it",
    img: "/img/speakers/juancarlosdemartin.jpg",
    topic: "Academic research and the right to refusal of militarisation",
  },
  {
    name: "Branka Marijan",
    affil: "Munk School of Global Affairs & Public Policy, University of Toronto",
    affilLink: "https://munkschool.utoronto.ca",
    webpage: "https://ploughshares.ca/senior-researcher/branka-marijan/",
    img: "/img/speakers/brankamarijan.jpg",
    topic: "The struggle to regulate military AI and autonomous weapons",
  },
  {
    name: "Joseph Redmon",
    affil: "Allen Institute for AI",
    affilLink: "https://allenai.org",
    webpage: "https://pjreddie.com/",
    img: "/img/speakers/josephredmon.jpg",
    topic: "The real AI alignment problem",
  },
  {
    name: "David Gray Widder",
    affil: "University of Texas at Austin",
    affilLink: "https://www.utexas.edu",
    webpage: "https://davidwidder.me/",
    img: "/img/speakers/davidgraywidder.jpg",
    topic: "Basic research, lethal effects: on academic–military entanglement and complicity",
  },
];

/**
 * Invited speakers from the first (ICLR 2026) edition.
 * Order retained from the original workshop website.
 */
export const FIRST_EDITION_SPEAKERS: Person[] = [
  {
    name: "Alex Hanna",
    affil: "Distributed AI Research Institute (DAIR)",
    affilLink: "https://www.dair-institute.org",
    webpage: "https://alex-hanna.com",
    img: "/img/speakers/alexhanna.jpg",
  },
  {
    name: "David Gray Widder",
    affil: "University of Texas at Austin",
    affilLink: "https://www.utexas.edu",
    webpage: "https://davidwidder.me/",
    img: "/img/speakers/davidgraywidder.jpg",
  },
  {
    name: "Gisela Luján Andrade",
    affil: "Perú por el Desarme",
    affilLink: "https://peruporeldesarme.org.pe",
    webpage: "https://www.linkedin.com/in/giselalujanandrade",
    img: "/img/speakers/giselalujanandrade.jpg",
  },
  {
    name: "Joseph Redmon",
    affil: "Allen Institute for AI",
    affilLink: "https://allenai.org",
    webpage: "https://pjreddie.com/",
    img: "/img/speakers/josephredmon.jpg",
  },
  {
    name: "Pier Luigi Dovesi",
    affil: "The Good AI Lab",
    affilLink: "https://thegoodailab.org",
    webpage: "https://thegoodailab.org/team/pier-luigi-dovesi",
    img: "/img/speakers/pierluigidovesi.jpg",
  },
];

/**
 * Organizing committee of the first (ICLR 2026) edition.
 * Order retained from the original workshop website.
 */
export const FIRST_EDITION_ORGANIZERS: Person[] = [
  {
    name: "Noa Garcia",
    affil: "University of Osaka",
    affilLink: "https://www.osaka-u.ac.jp/en",
    webpage: "https://www.noagarciad.com",
    img: "/img/organizers/noagarcia.jpg",
  },
  {
    name: "Leonardo Impett",
    affil: "Cambridge Digital Humanities",
    affilLink: "https://www.cdh.cam.ac.uk",
    webpage: "https://www.cdh.cam.ac.uk/about/people/dr-leonardo-impett/",
    img: "/img/organizers/leonardoimpett.jpg",
  },
  {
    name: "Matt Mahmoudi",
    affil: "Cambridge Digital Humanities",
    affilLink: "https://www.cdh.cam.ac.uk",
    webpage: "https://www.cdh.cam.ac.uk/about/people/matt-mahmoudi/",
    img: "/img/organizers/mattmahmoudi.jpg",
  },
  {
    name: "Evangelos Kazakos",
    affil: "CIIRC, Czech Technical University in Prague",
    affilLink: "https://www.ciirc.cvut.cz",
    webpage: "https://ekazakos.github.io",
    img: "/img/organizers/evangeloskazakos.jpg",
  },
  {
    name: "Sonia Fereidooni",
    affil: "Cambridge Digital Humanities",
    affilLink: "https://www.cdh.cam.ac.uk",
    webpage: "https://www.cdh.cam.ac.uk/about/people/sonia-fereidooni/",
    img: "/img/organizers/soniafereidooni.jpg",
  },
  {
    name: "Yannis Kalantidis",
    webpage: "https://www.skamalas.com",
    img: "/img/organizers/yanniskalantidis.jpg",
  },
];

export const FIRST_EDITION_OPENREVIEW =
  "https://openreview.net/group?id=ICLR.cc/2026/Workshop/AI4Peace";

/* ---- References (shared scholarly grounding) --------------- */

export type Reference = { n: number; text: string; href?: string };

export const REFERENCES: Reference[] = [
  { n: 1, text: "K. Crawford. The Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence. Yale University Press, 2021.", href: "https://yalebooks.yale.edu/book/9780300264630/atlas-of-ai/" },
  { n: 2, text: "J. E. Dobson. The Birth of Computer Vision. University of Minnesota Press, 2023.", href: "https://www.upress.umn.edu/9781517914219/the-birth-of-computer-vision/" },
  { n: 3, text: "P. R. Kalluri, W. Agnew, M. Cheng, K. Owens, L. Soldaini, and A. Birhane. The surveillance AI pipeline. arXiv:2309.15084, 2023.", href: "https://arxiv.org/abs/2309.15084" },
  { n: 4, text: "S. Schwartz, L. G. Guntrum, and C. Reuter. Vision or threat—awareness for dual-use in the development of autonomous driving. IEEE Transactions on Technology and Society, 3(3):163–174, 2022.", href: "https://ieeexplore.ieee.org/document/9795193" },
  { n: 5, text: "S. Fereidooni and V. Heidt. The fallacy of precision: Deconstructing the narrative supporting AI-enhanced military weaponry. In Harms and Risks of AI in the Military, 2024.", href: "https://openreview.net/forum?id=jqUhYhPPvf" },
  { n: 6, text: "The Future of Life Institute. Autonomous weapons open letter: AI & robotics researchers, 2016.", href: "https://futureoflife.org/open-letter/open-letter-autonomous-weapons-ai-robotics/" },
  { n: 7, text: "H. Khlaaf, S. M. West, and M. Whittaker. Mind the gap: Foundation models and the covert proliferation of military intelligence, surveillance, and targeting. arXiv:2410.14831, 2024.", href: "https://arxiv.org/abs/2410.14831" },
  { n: 8, text: "S. Romansky. Lessons from the EU on confidence-building measures around artificial intelligence in the military domain. SIPRI Publications, 2025.", href: "https://www.sipri.org/sites/default/files/2025-05/eunpdc_no_97.pdf" },
  { n: 9, text: "A. Brenneis. Assessing dual use risks in AI research: necessity, challenges and mitigation strategies. Research Ethics, 21(2):302–330, 2025.", href: "https://journals.sagepub.com/doi/10.1177/17470161241267782" },
  { n: 10, text: "A. Loewenstein. The Palestine Laboratory: How Israel Exports the Technology of Occupation Around the World. Verso Books, 2024.", href: "https://www.versobooks.com/products/2684-the-palestine-laboratory" },
  { n: 11, text: "P. Scharre. Four Battlegrounds: Power in the Age of Artificial Intelligence. W. W. Norton & Company, 2023.", href: "https://wwnorton.com/books/9780393866865" },
  { n: 12, text: "L.-A. Kaffee, A. Arora, Z. Talat, and I. Augenstein. Thorny roses: Investigating the dual use dilemma in natural language processing. Findings of EMNLP 2023, 13977–13998, 2023.", href: "https://aclanthology.org/2023.findings-emnlp.932/" },
  { n: 13, text: "R. Sefala, T. Gebru, L. Mfupe, N. Moorosi, and R. Klein. Constructing a visual dataset to study the effects of spatial apartheid in South Africa. NeurIPS Datasets and Benchmarks Track, 2021.", href: "https://openreview.net/forum?id=WV0waZz9dTF" },
  { n: 14, text: "J. Filipi et al. Honeybee-based biohybrid system for landmine detection. Science of the Total Environment, 803:150041, 2022.", href: "https://www.sciencedirect.com/science/article/pii/S0048969721051160" },
  { n: 15, text: "Amnesty International. Automated Apartheid: How facial recognition fragments, segregates and controls Palestinians in the OPT, 2023.", href: "https://www.amnesty.org/en/documents/mde15/6701/2023/en/" },
  { n: 16, text: "S. Goodfriend. Algorithmic state violence: Automated surveillance and Palestinian dispossession in Hebron's old city. International Journal of Middle East Studies, 55(3):461–478, 2023.", href: "https://doi.org/10.1017/S0020743823000879" },
  { n: 17, text: "P. L. Dovesi. From self-driving cars to self-driving wars. The Good AI Lab, January 1, 2026.", href: "https://thegoodailab.org/blog/from-self-driving-cars-to-self-driving-wars" },
];
