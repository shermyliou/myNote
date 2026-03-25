<script setup>
import { ref, watch, onMounted } from 'vue';
import { useNoteStore } from '../stores/noteStore'
import { useRouter, useRoute } from 'vue-router'
const noteStore = useNoteStore()
const router = useRouter()
const route = useRoute()

const newNoteTitle = ref('')
const newNoteContent = ref('')
const showAlert = ref(false)

function editNote(text1, text2, id) {
  const id_num = parseInt(route.params.id)
  if (noteStore.editNote(text1, text2, id_num)) {
    showAlert.value = true
    setTimeout(() => {
      showAlert.value = false
    }, 3000)
  }
}

function loadNote() {
  const id_num = parseInt(route.params.id)
  const note = noteStore.notes.find(note => note.id === id_num)
  if(note){
    newNoteTitle.value = note.title
    newNoteContent.value = note.content
  }
}

watch (() => route.params.id, (newID) => {
  loadNote(newID)
})

onMounted(() => loadNote(route.params.id))

// function onMounted(loadNote)
</script>

<template>
  <div class="mt-3 mt-lg-0 g-2 ms-md-4">
    <form @submit.prevent="">
      <button type="submit" class="btn btn-success shadow d-block rounded-pill mb-3" @click="editNote(newNoteTitle, newNoteContent, route.params.id)"><i class="bi bi-floppy-fill"></i> 儲存</button>
      <div class="alert alert-success shadow" role="alert" v-show="showAlert">
        儲存成功
      </div>
      <div class="my-3">
    <input type="text" class="form-control form-control-lg border-0 p-0 fs-1 fw-bold shadow-none bg-transparent" placeholder="標題" v-model="newNoteTitle">
    <p class="text-danger" v-if="!newNoteTitle">請輸入標題</p>
  </div>
  <div class="mb-3">
      <textarea class="form-control form-control-lg border-0 p-0 shadow-none bg-transparent" style="height: 200px;" placeholder="現在在想什麼？" v-model="newNoteContent"></textarea>
    <p class="text-danger" v-if="!newNoteContent">請輸入內容</p>
  </div>
</form>
  </div>
</template>

<style scoped>
</style>