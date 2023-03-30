import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/addcourse",
    name: "addcourse",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddCourseView.vue"),
  },
  {
    path: "/generator",
    name: "generator",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GenerateTimetable"),
  },
  {
    path: "/listofcourses",
    name: "listofcourses",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListofCoursesView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
