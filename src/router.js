import Vue from "vue";
import Router from "vue-router";
function load(path) {
  return import("@/view/" + path + "/index.vue");
}
const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    meta: {
      icon: "",
      hide: true,
    },
    component: () => load("welcome"),
  },
];
Vue.use(Router);

let createRouter = () =>
  new Router({
    mode: "history",
    routes,
  });

const router = createRouter();

export default router;
