import { createRouter, createWebHistory } from 'vue-router'
import NoteGrid from '../components/NoteGrid.vue'
import AddNote from '../components/AddNote.vue'
import EditNote from '../components/EditNote.vue'
import SearchNote from '../components/SearchNote.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: NoteGrid, name: "home", meta: { title: "My Note" } },
    { path: '/add', component: AddNote, name: "add", meta: { title: "新筆記 - My Note" } },
    { path: '/note/:id', component: EditNote, name: "note", meta: { title: "編輯筆記 - My Note" } },
    { path: '/search', component: SearchNote, name: "search", meta: { title: "搜尋筆記 - My Note" } },
  ]
})

export default router