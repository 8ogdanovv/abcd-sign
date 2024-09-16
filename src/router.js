import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/loader', // Redirect root path to the Home route
  },
  // {
  //   path: '/home',
  //   component: () => import('@/views/HomeView.vue'),
  // },
  // {
  //   path: '/about',
  //   component: () => import('@/views/AboutMe.vue'),
  // },
  // {
  //   path: '/contact',
  //   component: () => import('@/views/ContactMe.vue'),
  // },
  {
    path: '/loader',
    component: () => import('@/views/LoaderView.vue'),
  },
  // {
  //   path: '/projects',
  //   component: () => import('@/views/MyProjects.vue'),
  // },
  // {
  //   path: '/project/:projectName',
  //   name: 'project',
  //   component: () => import('@/views/ProjectView.vue'),
  //   beforeEnter: to => {
  //     const projectName = to.params.projectName
  //     const isInProjects = projects.some(({ name }) => name === projectName)

  //     if (!isInProjects)
  //       return {
  //         name: 'no-match',
  //         // preserve current path and remove the first char to avoid the target URL starting with `//`
  //         params: { pathMatch: to.path.substring(1).split('/') },
  //         // preserve existing query and hash if any
  //         query: to.query,
  //         hash: to.hash,
  //       }
  //   },
  // },
  {
    // Catch all routes that don't match the previous ones
    path: '/:pathMatch(.*)*',
    name: 'no-match',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router