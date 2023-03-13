import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import RepoDetails from '@/views/RepoDetails.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter(
    {history: createWebHistory(),
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/repoDetails",
        name: "RepoDetails",
        component: RepoDetails
    },
    {
        path: "/repoDetails/:id",
        name: "RepoDetails",
        component: RepoDetails,
    },
    {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound
    }
    ]}
)

createApp(App).use(router).mount('#app')
