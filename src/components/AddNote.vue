<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/noteStore'
import { useRouter } from 'vue-router'
const router = useRouter()

const newNoteTitle = ref('')
const newNoteContent = ref('')
const showAlert = ref(false)
const unsaveAlert = ref(false)

function addNote(text1, text2) {
  if (useNoteStore().addNote(text1, text2)) {
    showAlert.value = true
    setTimeout(() => {
      router.push('/')
      showAlert.value = false
    }, 3000)
    newNoteTitle.value = ""
    newNoteContent.value = ""
  } else{
    unsaveAlert.value=true
    setTimeout(() => {
      unsaveAlert.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="mt-3 mt-lg-0 g-2 ms-4">
    <form @submit.prevent="">
      <button type="submit" class="btn btn-success shadow d-block rounded-pill mb-3" @click="addNote(newNoteTitle, newNoteContent)"><i class="bi bi-floppy-fill"></i> 儲存</button>
      <div class="alert alert-success shadow" role="alert" v-show="showAlert">
        儲存成功
      </div>
      <div class="alert alert-warning shadow" role="alert" v-show="unsaveAlert">
        儲存失敗：標題和內文皆須有內容
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