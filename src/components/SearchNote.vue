<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNoteStore } from '../stores/noteStore';
const noteStore = useNoteStore()
</script>

<template>
  <div class="row mt-3 mt-lg-0 ps-4">
    <div class="col-4 col-lg-3 mt-0 px-2 pt-0 pb-4" v-for="note in noteStore.searchResult(noteStore.keyword)" :key="note.id">
      <div class="card rounded-5 shadow-sm">
        <div class="card-body">
          <div class="hstack justify-content-between align-items-center">
            <RouterLink :to="{ name: 'note', params: { id: note.id } }" class="text-decoration-none">
            <h5 class="card-title m-0 text-black fw-bold">{{note.title}}</h5>
          </RouterLink>
            <i class="bi bi-pin fs-6 btn btn-outline-secondary btn-sm" v-show="!note.isPinned" @click="noteStore.pinNote(note.id)"></i>
            <i class="bi bi-pin-angle-fill fs-6 btn btn-secondary btn-sm" v-show="note.isPinned" @click="noteStore.pinNote(note.id)"></i>
          </div>
          <RouterLink :to="{ name: 'note', params: { id: note.id } }" class="text-decoration-none text-secondary">
            <hr class="my-2">
            <p class="card-text truncate-lines">{{note.content}}</p>
          </RouterLink>
          </div>
        </div>
    </div>
    <h3 class="text-center fw-bold text-secondary" v-show="noteStore.searchResult(noteStore.keyword).length === 0">無相關筆記</h3>
  </div>
</template>

<style scoped>
  .truncate-lines {
  display: -webkit-box;
  line-clamp: 5;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>