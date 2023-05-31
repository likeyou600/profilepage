import { createRouter, createWebHistory } from 'vue-router'
import Service from "@/views/Service.vue";
import Portfolio from "@/views/Portfolio.vue";
import Contact from "@/views/Contact.vue";
import Intro from "@/views/Intro.vue";
const routes = [
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: { name: "Service" },
  },
  {
    path: "/",
    name: "/",
    redirect: { name: "Service" },
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/portfolio/:name",
    name: "Intro",
    component: Intro,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
