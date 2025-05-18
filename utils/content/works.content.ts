import LogoBlueshores from '~/assets/images/logo_blueshores.png'
import LogoCell5 from '~/assets/images/logo_cell5.png'
import LogoAppetiserApps from '~/assets/images/logo_appetiser_apps.png'
import PlatformJellowImage from '~/assets/images/platform_jellow.png'
import PlatformPerformativImage from '~/assets/images/platform_performativ.png'
import PlatformTitaniumCaravansImage from '~/assets/images/platform_titanium_caravans.png'
import PlatformAhfImage from '~/assets/images/platform_ahf.png'
import PlatformOneraiseImage from '~/assets/images/platform_oneraise.png'
import PlatformFarmMapImage from '~/assets/images/platform_farmmap.png'

export type CompanyProject = {
  imageUrl: string
  name: string
  url: string
  description: string
  role: string
  technology_stack: string[]
}

type WorkItem = {
  companyLogoUrl: string
  companyName: string
  companyUrl: string
  companyOverview: string
  projects: CompanyProject[]
}

export const works: WorkItem[] = [
  {
    companyLogoUrl: LogoBlueshores,
    companyName: 'Blueshores',
    companyUrl: 'https://blueshores.eu',
    companyOverview: `European IT services company that connects businesses with skilled IT professionals from the Philippines. Their mission is to provide reliable, affordable, and talented IT experts to help grow your business.`,
    projects: [
      {
        imageUrl: PlatformJellowImage,
        name: 'Jellow',
        url: 'https://jellow.nl',
        role: 'Senior Full Stack Developer',
        description: `Jellow is a user-friendly, on-demand freelance platform operating in the Netherlands, Belgium, and Ireland. It connects businesses directly with freelancers across various sectors, eliminating intermediaries and ensuring transparent, efficient hiring processes.`,
        technology_stack: [
          'PHP',
          'Laravel',
          'MySQL',
          'Vue.js 2/3',
          'Typescript',
          'LESS',
          'RESTFul API',
          'Element UI',
          'DigitalOcean',
          'Meilisearch',
          'Redis',
          'OpenAI',
          'SaaS',
        ],
      },
    ],
  },
  {
    companyLogoUrl: LogoCell5,
    companyName: 'Cell 5',
    companyUrl: 'https://www.cell5.co.uk',
    companyOverview: `UK-based ultramodern tech agency specializing in end-to-end digital solutions for startups and SMEs. They focus on building and scaling SaaS products, offering services from initial concept to full-scale deployment.`,
    projects: [
      {
        imageUrl: PlatformPerformativImage,
        name: 'Performativ',
        url: 'https://performativ.com',
        role: 'Full Stack Developer',
        description: `Performativ is a comprehensive, cloud-based wealth management platform designed for professionals such as wealth managers, asset managers, financial advisors, family offices, and banks. It consolidates clients' holdings—from bank accounts to private equity—into a single, intuitive interface.`,
        technology_stack: [
          'PHP',
          'Laravel',
          'AWS Lambda',
          'MySQL',
          'React.js',
          'React Query',
          'Typescript',
          'Ant design',
          'RESTFul API',
          'Laravel Serverless',
          'AWS',
        ],
      },
    ],
  },
  {
    companyLogoUrl: LogoAppetiserApps,
    companyName: 'Appetiser Apps',
    companyUrl: 'https://appetiser.com.au',
    companyOverview: `Australian-based digital agency renowned for transforming innovative ideas into successful digital products. With a global presence, they have a track record of delivering high-impact web and mobile applications.`,
    projects: [
      {
        imageUrl: PlatformTitaniumCaravansImage,
        name: 'Titanium Caravans',
        url: 'https://app.titaniumcaravans.com.au',
        role: 'Full Stack Developer',
        description: `The Titanium Caravans Customer Portal is an online platform designed to enhance the ownership experience for Titanium Caravans customers. It offers a range of features and resources to assist users in managing their caravans effectively.`,
        technology_stack: [
          'PHP',
          'Laravel',
          'Filamentphp',
          'MySQL',
          'Redis',
          'AWS',
          'Vuetify.js',
          'Nuxt.js 3',
        ],
      },
      {
        imageUrl: PlatformAhfImage,
        name: 'Australian Horizons Foundation',
        url: 'https://www.ahfraffles.org.au',
        role: 'Full Stack Developer',
        description: `The Australian Horizons Foundation Raffles is an initiative by the Australian Horizons Foundation, a registered nonprofit organization dedicated to revitalizing and supporting rural communities across Australia. Through engaging and high-value raffles, they raise funds to provide much-needed social and economic support to rural Australians.`,
        technology_stack: [
          'PHP',
          'Laravel',
          'Laravel Vapor',
          'MySQL',
          'Redis',
          'Scss',
          'Bulma.io',
          'Nuxt.js 2',
          'Vue.js 2',
          'Vuetify.js',
          'DigitalOcean',
          'Laravel Forge',
          'Laravel Envoyer',
          'Stripe',
        ],
      },
      {
        imageUrl: PlatformOneraiseImage,
        name: 'OneRaise',
        url: 'https://oneraise.com.au',
        role: 'Full Stack Developer',
        description: `OneRaise is an Australian-based online fundraising platform designed to empower nonprofits and charities to reach broader audiences and maximize their impact. The platform was conceptualized by philanthropist Matt Gollan, who sought to rapidly develop a web application capable of facilitating effective fundraising campaigns.`,
        technology_stack: [
          'PHP',
          'Laravel',
          'Laravel Vapor',
          'MySQL',
          'Redis',
          'Scss',
          'Bulma.io',
          'Nuxt.js 2',
          'Vue.js 2',
          'DigitalOcean',
          'Laravel Forge',
          'Laravel Envoyer',
          'Stripe Connect',
        ],
      },
      {
        imageUrl: PlatformFarmMapImage,
        name: 'FarmMap',
        url: 'https://farmap.com.au',
        role: 'Front End Developer',
        description: `FARMap is an Australian-based farm management software designed to simplify livestock and pasture management for farmers. Launched in 2021 by former beef and sheep farmer Sam Baulch, FARMap offers a user-friendly platform tailored to the real-world needs of family-run farming operations.`,
        technology_stack: [
          'PHP',
          'Laravel',
          'MySQL',
          'Redis',
          'Scss',
          'Bootstrap',
          'Vue.js 2',
          'DigitalOcean',
          'Laravel Forge',
          'Laravel Envoyer',
          'Stripe Connect',
        ],
      },
    ],
  },
]
