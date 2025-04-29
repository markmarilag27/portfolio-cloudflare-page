type SkillRecordItems = {
  title: string
  items: string[]
}

type SkillRecords = {
  title: string
  list: SkillRecordItems[]
}

export const skills: SkillRecords[] = [
  {
    title: 'Technical Skills',
    list: [
      {
        title: 'Languages & Frameworks',
        items: [
          'PHP (Laravel)',
          'JavaScript (ES6+)',
          'Node.js',
          'Vue.js',
          'React.js',
          'Nuxt.js',
        ],
      },
      {
        title: 'Databases & Search',
        items: [
          'MySQL',
          'Redis',
          'Meilisearch',
        ],
      },
      {
        title: 'Web Technologies',
        items: [
          'HTML5',
          'CSS3',
          'Bootstrap',
          'Vuetify',
          'Bulma.io',
        ],
      },
    ],
  },
  {
    title: 'DevOps & Cloud',
    list: [
      {
        title: 'Containerization & CI/CD',
        items: [
          'Docker',
          'GitLab Actions',
          'GitHub Actions',
        ],
      },
      {
        title: 'Cloud Platforms',
        items: [
          'AWS (EC2, Lambda via bref.sh, S3, RDS)',
          'DigitalOcean',
          'Cloudflare Workers',
        ],
      },
    ],
  },
  {
    title: 'Testing & Quality',
    list: [
      {
        title: 'Automated Testing',
        items: [
          'PHPUnit',
          'Vitest',
          'TDD workflows',
        ],
      },
      {
        title: 'Static Analysis',
        items: [
          'Psalm',
          'PHPStan',
          'ESLint',
        ],
      },
    ],
  },
  {
    title: 'Soft Skills',
    list: [
      {
        title: 'Communication & Collaboration',
        items: [
          'Clear stakeholder updates',
          'pair programming',
          'cross-functional workshops',
        ],
      },
      {
        title: 'Adaptability & Problem Solving',
        items: [
          'Thriving in greenfield projects through to production',
          'rapid tech evaluation',
        ],
      },
      {
        title: 'Time Management & Proactivity',
        items: [
          'Prioritizing work–life balance',
          'proactive debt reduction sprints',
        ],
      },
    ],
  },
  {
    title: 'Emerging & Strategic Skills',
    list: [
      {
        title: 'AI Integrations',
        items: [
          'ChatGPT',
          'Meilisearch hybrid search',
          'AWS SageMaker workflows',
        ],
      },
      {
        title: 'Serverless Architectures',
        items: [
          'AWS Lambda (bref.sh)',
          'Cloudflare Workers/Pages',
        ],
      },
    ],
  },
]
