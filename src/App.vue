<script setup>
import SideBar from './components/SideBar.vue';
import ToolBar from './components/ToolBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container">
      <header class="row">
        <ToolBar />
      </header>
      <div class="row">
        <aside class="col-12 col-md-3 gx-0">
          <SideBar />
        </aside>
        <main class="col-12 col-md-9 gx-0">
          <RouterView />
        </main>
      </div>
      <footer class="row d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <span class="mb-3 mb-md-0 text-body-secondary">© 2026 08_劉育全</span>
        </div>
      </footer>
    </div>
</template>
