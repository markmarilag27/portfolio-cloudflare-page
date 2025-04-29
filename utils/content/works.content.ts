import JellowLogo from '~/assets/images/jellow.png'
import PerformativLogo from '~/assets/images/performativ.png'
import AppetiserAppsLogo from '~/assets/images/appetiser-apps.png'
import MetadataComputerSystemsLogo from '~/assets/images/metadatauae.png'

type WorkItem = {
  companyName: string
  companyLogo: string
  companyUrl: string
  companyOverview: string[]
  keyContributions: string[]
}

export const works: WorkItem[] = [
  {
    companyName: 'Jellow (Sept 2022 – May 2025)',
    companyLogo: JellowLogo,
    companyUrl: 'https://jellow.nl',
    companyOverview: [
      'Dutch platform for “safe & fast” freelancer hiring, covering Development, Marketing, IT, Finance, and more',
      '100% DBA-proof contract management plus weekly “DBA Donderdag” webinars on freelance law',
      'Over 67 083 registered freelancers and 6 024 clients as of April 2025',
      'TrustScore of 4.8/5 from 238 independent reviews on Trustpilot',
    ],
    keyContributions: [
      'Delivered stakeholder-requested features while continuously chipping away at technical debt ​',
      'Kept Metabase and other services secure and up-to-date by applying patches and updates',
      'Introduced automated PHP static analysis and code formatting to keep our codebase clean ',
      'Stepped in for QA by reviewing pull requests and ensuring quality when the QA team was unavailable',
      'Mapped out an AI adoption roadmap to enhance our platform with smart, data-driven features',
    ],
  },
  {
    companyName: 'Performativ (Nov 2021 – Aug 2022)',
    companyLogo: PerformativLogo,
    companyUrl: 'https://www.performativ.com',
    companyOverview: [
      'ISO 27001-certified wealth management platform consolidating bank accounts, private equity, and more into one UI',
      'Features data aggregation, portfolio analytics, branded client portals, automated compliance checks, and open-API integrations',
      'Serves wealth managers, asset managers, investment advisors, banks, and family offices across Europe',
    ],
    keyContributions: [
      'Improved backend performance and rolled out new Laravel features to keep the app fast and reliable.',
      'Profiled and debugged with Blackfire.io, then decoupled services and migrated them to AWS using a CDK (TypeScript) stack—while preserving all core Laravel functionality.',
      'Boosted our developer workflow by replacing Laravel Sail with custom Docker containers, cutting setup times significantly.',
      'Tackled front-end tasks using React.js, TanStack Query, and the Context API, working hand-in-hand with our senior front-end developer.',
    ],
  },
  {
    companyName: 'Appetiser Apps (Mar 2020 – Oct 2021)',
    companyLogo: AppetiserAppsLogo,
    companyUrl: 'https://appetiser.com.au/',
    companyOverview: [
      'Award-winning Australian app studio (#4 globally for design) delivering iOS, Android, React Native, and web (Laravel/Vue.js) solutions',
      'Rapid-agile “Appetiser Baseplate™” method launching apps in as little as three months, backed by proactive communication and global talent',
      'Client successes include YouFoodz (4.8 ★ App Store rating; $125 M app value), MyDeal (890 K active users; Play Store top 5), and Vello (3.2 M social followers; $2.1 M funding)',
    ],
    keyContributions: [
      'Firefly HR - Enhanced and maintained the OSHC recruitment platform, fixing Xero and Employment Hero integrations to streamline payroll and credential validation for educators and centres',
      'AHF/OneRaise - Led full-stack delivery of the OneRaise fundraising web app, achieving nearly $1 million in transactions for the Australian Horizons Foundation within 24 hours of launch. Built in Laravel & Vue.js, the project went from greenfield to production in just three months',
      'CardX - Developed a StockX-style card-trading marketplace featuring advanced ML-driven image classification and automated price recognition. Implemented a Node.js web scraper on AWS Lambda, integrated SageMaker for probability scoring, and crafted a modular Laravel/Vue.js frontend for seamless user experience',
    ],
  },
  {
    companyName: 'Metadata Computer Systems (May 2018 – March 2020)',
    companyLogo: MetadataComputerSystemsLogo,
    companyUrl: 'https://www.metadatacs.ca/',
    companyOverview: [
      'Business consulting firm delivering strategic software & IT services',
      'Specializes in custom web applications for diverse industries',
      'Focuses on cost-effective, value-driven solutions that grow with clients',
    ],
    keyContributions: [
      'Built custom Laravel applications to match each client’s requirements',
      'Worked with project managers to plan sprints and break down tasks',
      'Rolled out feature updates and bug fixes based on client feedback',
      'Monitored and scaled servers to keep applications fast and reliable',
      'Produced quick mock-ups to speed up design approvals',
    ],
  },
]
