export interface Course {
  code: string;
  name: string;
  description: string;
  /** Optional link, e.g. to a repo. Label defaults to "Coursework". */
  link?: { href: string; label?: string };
}

export interface School {
  name: string;
  location: string;
  dates: string;
  degree?: string;
  detail?: string;
  /** Shown in reading order: left to right, then down. */
  courses: Course[];
}

export const schools: School[] = [
  {
    name: 'University of Virginia',
    location: 'Charlottesville, VA',
    dates: 'Class of 2027',
    degree: 'B.A. Computer Science, Minor in Data Science',
    detail: '3.77 GPA · Dean’s List',
    courses: [
      {
        code: 'CS 3100',
        name: 'Data Structures & Algorithms 2',
        description:
          'Algorithm design and analysis: graph algorithms, greedy methods, divide and conquer, dynamic programming, and network flow.',
        link: { href: 'https://github.com/sheptrundle/dsa2' },
      },
      {
        code: 'CS 3130',
        name: 'Computer Systems & Organization 2',
        description:
          'How software meets hardware: implemented page tables, caches, and TLBs in C, plus processes, concurrency, and networking.',
        link: { href: 'https://github.com/sheptrundle/cso2' },
      },
      {
        code: 'CS 3120',
        name: 'Discrete Mathematics & Theory 2',
        description:
          'The fundamental limits on what can be efficiently computed, through computation theory: grammars, automata, and Turing machines.',
      },
      {
        code: 'CS 3140',
        name: 'Software Development Essentials',
        description:
          'Team software engineering in Java: design patterns, testing, databases, and GUI development, ending in a four-person final project.',
        link: { href: 'https://github.com/sheptrundle/course-reviews', label: 'Final Project' },
      },
      {
        code: 'CS 2100',
        name: 'Data Structures & Algorithms 1',
        description:
          'Object-oriented programming in Java and foundational data structures with their analysis: lists, stacks, queues, trees, hash tables, and priority queues.',
      },
      {
        code: 'CS 2120',
        name: 'Discrete Mathematics & Theory 1',
        description: 'Logic, proofs, sets, relations, induction, and the mathematical foundations of computing.',
      },
      {
        code: 'CS 2130',
        name: 'Computer Systems & Organization 1',
        description:
          'Low-level C and Assembly code, binary foundations, how data is stored in memory, and hardware design from gates and registers up.',
      },
      {
        code: 'EVSC 3020',
        name: 'GIS Methods',
        description:
          'Geographic Information Systems and their applications across the physical and social sciences, using several GIS software packages, culminating in a final project on Charlottesville Zoning.',
      },
      {
        code: 'DS 1002',
        name: 'Programming for Data Science',
        description: 'Python for data science: data wrangling, analysis, and visualization in Jupyter notebooks.',
      },
      {
        code: 'DS 1001',
        name: 'Foundations of Data Science',
        description:
          'An introduction to the field of data science: computing environments, visualization, bias and fairness analysis.',
      },
    ],
  },
  {
    name: 'University of New South Wales',
    location: 'Sydney, Australia',
    dates: 'Spring 2026 · Study abroad',
    detail: '83.67 WAM (3.92 GPA)',
    courses: [
      {
        code: 'COMP3411',
        name: 'Artificial Intelligence',
        description: 'Search algorithms, Q-learning, machine learning, and neural networks.',
      },
      {
        code: 'COMP3311',
        name: 'Database Systems',
        description: 'Relational modeling, SQL, normalization, query processing, and transactions.',
      },
      {
        code: 'COMP3453',
        name: 'Applied Cryptography',
        description:
          'Modern cryptographic primitives and protocols, secrecy, hashing, quantum computing.',
      },
    ],
  },
];

export const organizations = ['UVA Outdoors Club', 'St. Anthony Hall'];
