import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/skill/:skillId",
            component: () => import("../views/SkillProjectsView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("../views/NotFoundView.vue"),
        },
        {
            path: "/impressum",
            component: () => import("../views/ImpressumView.vue"),
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
