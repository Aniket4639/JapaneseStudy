export const routes = {
  home: '/',
  login: '/login',
  signup: '/signup',
  courses: '/courses',
  pricing: '/pricing',
  blog: '/blog',
} as const;

export type Route = typeof routes[keyof typeof routes];
