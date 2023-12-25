import { createRouter, createWebHistory } from "vue-router";
import FilePageContent from "./components/filePageContent.vue";
import FolderPageContent from "./components/folderPageContent.vue";

const routes = [
  { path: "/", component: FilePageContent },
  { path: "/folder", component: FolderPageContent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
