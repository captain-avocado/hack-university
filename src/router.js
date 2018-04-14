import Vue from "vue";
import Router from "vue-router";
import Info from "./components/info.vue";
import createEvent from "./components/createEvent.vue";
import createReview from "./components/createReview.vue";

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
    },
    {
      path: "/review",
      name: "review",
      component: createReview
    }
  ]
});

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       components: {
//         default: info,
//         a: event,
//       }
//     }
//   ]
// })