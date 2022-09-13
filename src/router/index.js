import { createRouter, createWebHistory } from "vue-router";
import MainView from "@views/MainView.vue";
import ContactView from "@views/ContactView.vue";

const routes = [
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/",
    name: "main",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    // Если не надо скролить
    if (!to.params.route) {
      return;
    }

    // Если находимся на главной странице - сразу скролим
    if (from.name == "main") {
      return {
        el: `#${to.params.route}`,
        behavior: "smooth",
        top: 82,
      };
    }

    // Если переходим на главную и хотим проскролить
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Если не нашли элемент
        if (!document.getElementById(to.params.route)) {
          return;
        }

        resolve({
          el: `#${to.params.route}`,
          behavior: "smooth",
          top: 82,
        });
      }, 500);
    });
  },
});

export default router;
