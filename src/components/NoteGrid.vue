<script setup>
import { useNoteStore } from '../stores/noteStore'
import { RouterLink } from 'vue-router'
const noteStore = useNoteStore()
</script>

<template>
    <div class="row mt-3 mt-lg-0 ps-md-4 px-3 px-sm-0">
      <div class="col-6 col-lg-3 mt-0 p-2 pt-0 pb-4" v-for="note in useNoteStore().notes" :key="note.id">
        <div class="card rounded-5 shadow-sm">
          <div class="card-body">
            <div class="hstack justify-content-between align-items-center">
              <RouterLink :to="{ name: 'note', params: { id: note.id }}" class="text-black text-decoration-none">
                <h5 class="card-title m-0 fw-bold">{{note.title}}</h5>
              </RouterLink>
              <i class="bi bi-pin fs-6 btn btn-outline-secondary btn-sm" v-show="!note.isPinned" @click="noteStore.pinNote(note.id)"></i>
              <i class="bi bi-pin-angle-fill fs-6 btn btn-secondary btn-sm" v-show="note.isPinned" @click="noteStore.pinNote(note.id)"></i>
            </div>
            <RouterLink :to="{ name: 'note', params: { id: note.id }}" class="text-secondary text-decoration-none">
              <hr class="my-2">
              <p class="card-text truncate-lines">{{note.content}}</p>
            </RouterLink>
            </div>
          </div>
      </div>
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