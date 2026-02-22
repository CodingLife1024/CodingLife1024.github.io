import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "Riddhi's Blog",
  description:
    '',
  href: 'https://codinglife1024.github.io/',
  author: 'CodingLife1024',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/books',
    label: 'books',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/CodingLife1024',
    label: 'GitHub',
  },
  {
    href: 'riddhidipta2003@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
