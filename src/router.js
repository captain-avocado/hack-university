import Vue from "vue";
import Router from "vue-router";
import Info from "./components/info.vue";
import createEvent from "./components/createEvent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "info",
      component: Info
    },
    {
      path: "/event",
      name: "event",
      component: createEvent
    }
  ]
});
