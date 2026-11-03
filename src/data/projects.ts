export interface Project {
  slug: string;
  name: string;
  context: string;
  dates: string;
  /** The paragraph is built from these three, in order: why → how → result. */
  why: string;
  how: string;
  result: string;
  /** Shown on its own "Technology:" line near the bottom of the block. */
  tech: string[];
  /** Live site, paper, report, code... Full URLs, or paths under /public like "papers/x.pdf". */
  links: { label: string; href: string }[];
  /** Path under /public, e.g. "projects/river-rat.png". Shown at the bottom of the block. */
  image?: string;
  /** How wide the image may get, e.g. "80%" or "260px". Defaults to the full width of the text. */
  imageWidth?: string;
}

// Ordered by how strong the showcase is: live site → papers → report → screenshot.
export const projects: Project[] = [
  {
    slug: 'river-rat',
    name: 'River Rat',
    context: 'Personal project',
    dates: 'Aug 2026 – Present',
    why:
      'As a whitewater paddler, I kept running into the same question: will my river actually be runnable on the day I want to go? Gauges only tell you what a river is doing now.',
    how:
      'River Rat averages hourly NOAA radar rain over each gauge’s watershed and splits 24 years of USGS flow history into a library of 367,000 past storms. For a new storm, it replays the 60 most similar past storms from today’s flow and checks each outcome against the reach’s runnable range, which gives a daily chance of running up to 6 days out.',
    result:
      'It is live at river-rat.app, forecasting about 975 reaches through 391 gauges. On 61,991 held-out storms it cut forecast error by 40% compared with the best baseline, and its probabilities are well calibrated: 70% forecasts came true 73% of the time.',
    tech: ['Python', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'Claude Code for CLI'],
    links: [
      { label: 'Live site', href: 'https://river-rat.app' },
      { label: 'Source code', href: 'https://github.com/sheptrundle/RiverRat' },
    ],
    image: 'projects/river-rat.png',
    imageWidth: '95%',
  },
  {
    slug: 'threshold-signatures',
    name: 'Threshold Hash-Based Signatures',
    context: 'UNSW Cryptography Research Project',
    dates: 'Feb 2026 – May 2026',
    why:
      'Lamport signatures are believed to be secure against quantum computers, but each key can sign only once and belongs to a single signer. We wanted to see how far that simple scheme could be pushed toward a practical, distributed system.',
    how:
      'In Python, we built hash-based key generation and sharing across multiple parties, a Merkle tree over the public keys, and signing and verification with Merkle proofs. I worked on the core Party, signature, and distribution architecture, which supports both PRF-derived and raw keys, and the system runs as a peer-to-peer demo with an untrusted server.',
    result:
      'The result is a working stateful threshold signature scheme in which Merkle-proof verification blocks forged key injection. Our research report documents the design and its optimizations.',
    tech: ['Python', 'Merkle trees', 'Post-quantum cryptography', 'P2P networking'],
    links: [
      { label: 'Read the Report', href: 'papers/threshold-signatures-report.pdf' },
      { label: 'Source code', href: 'https://github.com/sheptrundle/Threshold-Hash-Based-Signatures-and-Multi-Party-Key-Sharing-' },
    ],
  },
  {
    slug: 'nlp-bias',
    name: 'Hidden Demographic Biases in NLP Models',
    context: 'UVA CS Undergraduate Research',
    dates: 'Apr 2025 – May 2025',
    why:
      'Language models now sit inside hiring tools, moderation systems, and chatbots, so a model that treats people differently because of their gender or race can do real harm without anyone noticing.',
    how:
      'On a team of four, we ran a Hugging Face NLP model on 250 unique sentences, perturbing each one by swapping demographic terms, and measured how the model’s sensitivity and toxicity scores shifted across 24 inputs.',
    result:
      'We analyzed and interpreted how scores moved between perturbations and wrote up the findings in a research paper.',
    tech: ['Python', 'Hugging Face Transformers'],
    links: [{ label: 'Read the Report', href: 'papers/nlp-bias-research-report.pdf' }],
    image: 'projects/nlp-bias.png',
    imageWidth: '80%',
  },
  {
    slug: 'impact-report',
    name: 'Project Homeless Connect: 10-Year Impact Report',
    context: 'Global Prairie',
    dates: 'Jun 2025 – Jul 2025',
    why:
      'Project Homeless Connect Kansas City needed to show donors and partners what a decade of work aiding people experiencing homelessness had actually achieved.',
    how:
      'Working on a team with three other interns and communicating directly with the client, I analyzed the client’s Excel data from each year’s event in Python to find correlations, trends, and the statistics that best told their story, and we turned those findings into a designed report.',
    result: 'The finished impact report was published for the organization and is available to read online.',
    tech: ['Python', 'pandas', 'Data visualization', 'Creative design'],
    links: [{ label: 'Read the Report', href: 'https://online.fliphtml5.com/zuekd/wasr/#p=1' }],
  },
  {
    slug: 'chess',
    name: 'Chess',
    context: 'Personal project',
    dates: '',
    why: 'I wanted to build a complete, working game entirely by hand, without AI.',
    how:
      'I built it in Java with JavaFX, writing all of the game logic myself and drawing the board and piece art from scratch.',
    result:
      'It is a fully working two-player chess game. It enforces legal moves, detects check and checkmate, highlights moves and squares, and flips the board to each player’s perspective.',
    tech: ['Java', 'JavaFX', 'Git'],
    links: [{ label: 'Source code', href: 'https://github.com/sheptrundle/chess' }],
    image: 'projects/chess.png',
    imageWidth: '260px',
  },
];
