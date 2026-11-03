export interface Experience {
  role: string;
  org: string;
  location: string;
  start: string;
  end: string;
  /** One paragraph describing the role. Shown only when there are no bullets. */
  description: string;
  /** Bullet points (currently copied from the resume). If present, these are shown instead of the paragraph. */
  bullets?: string[];
  links?: { label: string; href: string }[];
}

// Shown in this order.
export const experience: Experience[] = [
  {
    role: 'Software Engineering Intern',
    org: 'ModMed',
    location: 'Boca Raton, FL',
    start: 'May 2026',
    end: 'Aug 2026',
    description:
      'Built internal AI tooling and web apps for the regulatory and compliance side of a healthcare software company. I built and shipped a TypeScript/Node.js Claude Code MCP plugin that automates regulatory gap analysis by fetching, parsing, and analyzing Java, YAML, PDF, Jira, and CMS data sources. I also developed the HTML/Angular frontend and AWS hosting for a web app that cross-references Jira Epics, cutting a daylong process for Product Owners down to a few minutes, and diagnosed and fixed production bugs in Java compliance code that affected patient reporting. Throughout, I iterated on designs from team and user feedback in a fast-paced agile workflow.',
    bullets: [
      'Built and shipped a TypeScript/Node.js Claude Code MCP plugin that automates regulatory gap analysis by fetching, parsing, and analyzing Java, YAML, PDF, Jira, and CMS data sources.',
      'Developed the HTML/Angular frontend and hosting with AWS for a web app that fully cross-references Jira Epics, cutting a daylong process for Product Owners down to a few minutes.',
      'Diagnosed and fixed real production bugs in Java compliance code that affected patient reporting.',
      'Iterated designs based on team and user feedback in a fast-paced agile workflow.',
    ],
  },
  {
    role: 'Data & Analytics Intern',
    org: 'Global Prairie',
    location: 'Denver, CO',
    start: 'Jun 2025',
    end: 'Jul 2025',
    description:
      'Worked on the data team of a mission-driven marketing and consulting agency. I analyzed client CSV data with Python to surface correlations, trends, and notable statistics, and managed large datasets, Pulsar queries, and chatbots for the proprietary DataFarm AI. I combined data findings and design into a 10-year impact report for Project Homeless Connect Kansas City.',
    bullets: [
      'Analyzed client-provided CSV data with Python to identify correlations, trends, and notable statistics for use in report.',
      'Managed and organized large datasets, Pulsar queries, and chatbots for proprietary DataFarm AI.',
      'Utilized data findings and creative design to construct an impact report for Project Homeless Connect Kansas City, emphasizing their mission aiding people experiencing homelessness over the past ten years.',
    ],
  },
  {
    role: 'Teaching Assistant, Data Structures & Algorithms',
    org: 'UVA Computer Science',
    location: 'Charlottesville, VA',
    start: 'Aug 2026',
    end: 'Present',
    description:
      'Part of the TA team for one of UVA’s core CS courses, which enrolls over 300 students. I facilitate weekly labs that break down OOP, data structures, time complexity, and sorting algorithms, and design and grade Java programming assignments and exams in collaboration with the TA team. In office hours, I mentor students to improve their problem-solving workflows and code efficiency.',
    bullets: [
      'Facilitate weekly labs for over 300 undergraduate students, breaking down complex foundational concepts including OOP, data structures, time complexity, and sorting algorithms.',
      'Design and grade programming assignments and exams in Java in collaboration with a TA team.',
      'Mentor students during office hours to help improve their problem-solving workflows and code efficiency.',
    ],
  },
];

export const otherExperience = {
  roles: 'Waiter, Camp Counselor, Lifeguard, Food Delivery',
  dates: 'May 2021 – May 2026',
};
