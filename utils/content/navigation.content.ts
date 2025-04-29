type NavigationItem = {
  href: string
  name: string
  target?: string
}

export const navigationLinks: NavigationItem[] = [
  {
    href: '#top',
    name: 'About Me',
  },
  {
    href: '#skills',
    name: 'Skills',
  },
  {
    href: '#works',
    name: 'Works',
  },
  {
    href: 'https://www.linkedin.com/in/sayefmarilag/',
    target: '__blank',
    name: 'Contact',
  },
]
