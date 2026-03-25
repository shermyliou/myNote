<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/noteStore';
import { useRouter } from 'vue-router';
const noteStore = useNoteStore()
const router = useRouter()
</script>

<template>
  <div class="px-0 mt-2 mb-4 border-bottom">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <router-link to="/" class="py-3 col-md-3 text-warning link-underline link-underline-opacity-0">
        <i class="bi bi-journal-album fs-3 me-2"></i>
        <span class="fw-bold fs-4 d-inline-block mb-1">My Note</span>
      </router-link>
      <router-link to="/add" href="#" class="col-3 w-auto ms-4 btn btn-warning fw-bold rounded-pill shadow">
        <i class="bi bi-journal-plus me-1"></i>
        <span>新增筆記</span>
      </router-link>
      <form class="col-12 col-md-3 d-flex align-items-center ms-auto mb-3 mb-md-0 px-2 px-lg-0" role="search">
        <div class="input-group border rounded-pill overflow-hidden shadow">
          <span class="input-group-text bg-white text-secondary border-0" id="basic-addon1">
            <i class="bi bi-search"></i>
          </span>
          <input type="search" class="form-control border-0 ps-0 shadow-none" placeholder="搜尋" aria-label="Search" v-model="noteStore.keyword" @focus="router.push('/search'), noteStore.searchResult(keyword)">
        </div>
      </form>
    </div>
  </div>

</template>

<style scoped>
input:focus::-webkit-input-placeholder{
  color: transparent;
}
</style>