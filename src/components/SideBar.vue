<script setup>
import { useNoteStore } from '../stores/noteStore';
import { RouterLink } from 'vue-router';

const noteStore = useNoteStore()
</script>

<template>
  <div class="d-flex flex-column flex-shrink-0 bg-light-subtle bg-opacity-10 shadow rounded-5 overflow-y-hidden">
    <ul class="nav nav-pills flex-column mt-3 rounded-bottom-5">
      <h4 class="fw-bold mt-3 mx-3">已釘選</h4>
      <ol class="list-group list-group-flush scrollarea">
        <li href="#" v-for="note in noteStore.filterPinned">
          <div class="list-group-item list-group-item-action py-3 lh-sm d-flex border-0 border-bottom bg-light-subtle">
            <button class="btn btn-warning text-white rounded-4 d-flex justify-content-center align-items-center w-25 px-2" @click="noteStore.pinNote(note.id)">
              <i class="bi bi-pin-angle-fill"></i>
            </button>
            <RouterLink class="w-100 mx-3 link-underline link-underline-opacity-0" :to="{
              name: 'note', params: {
                id: note.id
              }
            }">
              <div class="d-flex align-items-center justify-content-between"> <strong class="mb-1 text-black">{{
                note.title
                  }}</strong> <small></small> </div>
              <div class="small text-secondary truncate-lines">{{ note.content }}</div>
            </RouterLink>
            <button class="btn btn-outline-danger rounded-4 d-flex justify-content-center align-items-center w-25 px-2"
              type="button" data-bs-toggle="modal" :data-bs-target="`#confirmDeleteModel${note.id}`">
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
          <!-- Modal -->
          <div class="modal fade rounded-5" :id="`confirmDeleteModel${note.id}`" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-5">
                <div class="modal-body">
                  確定要刪除嗎？
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary rounded-5" data-bs-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-outline-danger rounded-5" @click="noteStore.deleteNote(note.id)"
                    data-bs-dismiss="modal">刪除</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
      <h4 class="fw-bold mt-4 mx-3">全部</h4>
      <ol class="list-group list-group-flush scrollarea">
        <li href="#" v-for="note in noteStore.filterUnpinned">
          <div class="list-group-item list-group-item-action py-3 lh-sm d-flex border-0 border-bottom bg-light-subtle">
            <button class="btn btn-outline-warning text-warning rounded-4 d-flex justify-content-center align-items-center w-25 px-2" @click="noteStore.pinNote(note.id)">
              <i class="bi bi-pin"></i>
            </button>
            <RouterLink class="w-100 mx-3 link-underline link-underline-opacity-0" :to="{
              name: 'note', params: {
                id: note.id
              }
            }">
                <div class="d-flex align-items-center justify-content-between"> <strong class="mb-1 text-black">{{ note.title
                    }}</strong> <small></small> </div>
                <div class="small text-secondary truncate-lines">{{ note.content }}</div>
            </RouterLink>
              <button class="btn btn-outline-danger rounded-4 d-flex justify-content-center align-items-center w-25 px-2"
                type="button" data-bs-toggle="modal" :data-bs-target="`#confirmDeleteModel${note.id}`">
                <i class="bi bi-trash-fill"></i>
              </button>
          </div>
          <!-- Modal -->
          <div class="modal fade" :id="`confirmDeleteModel${note.id}`" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content rounded-5">
                <div class="modal-body">
                  確定要刪除嗎？
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary rounded-5" data-bs-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-outline-danger rounded-5" @click="noteStore.deleteNote(note.id)"
                    data-bs-dismiss="modal">刪除</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </ul>
  </div>
</template>

<style scoped>
.truncate-lines {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>