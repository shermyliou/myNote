import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({ notes: [
    {
      id: 1,
      title: "定義Git分支",
      content: "Git 分支是版本控制的核心概念。定義分支可以讓小美、阿明等團隊成員同時進行不同功能的開發，互不干擾。常用指令包括 git branch、git checkout 和 git merge，合併分支時需注意衝突處理與代碼審查流程。",
      isPinned: false,
    },
    {
      id: 2,
      title: "Vue3 基礎語法",
      content: "Vue3 提供了全新的 Composition API。學習 ref、reactive、computed 是掌握 Vue3 的基礎，其中 ref 用於定義基本響應式資料，reactive 用於定義物件型響應式狀態，computed 則用於派生計算屬性，配合 watch 可監聽資料變化。",
      isPinned: true,
    },
    {
      id: 3,
      title: "Pinia 狀態管理",
      content: "Pinia 是 Vue3 官方推薦的狀態管理工具，用來取代 Vuex。定義 store 時使用 defineStore，並透過 getter 進行計算、action 處理非同步邏輯。配置好 Pinia 後，可在任意組件中使用 store 共享狀態，提升資料管理效率。",
      isPinned: false,
    },
    {
      id: 4,
      title: "項目構建工具",
      content: "Vite 是新一代前端構建工具，提供快速啟動和熱更新（HMR）功能。相比傳統 Webpack，Vite 利用瀏覽器原生 ES Module 定義模組依賴，大幅縮短冷啟動時間。配置 vite.config.js 可設置代理、別名與插件，適合 Vue3 項目使用。",
      isPinned: false,
    },
    {
      id: 5,
      title: "組件通信方式",
      content: "Vue3 中組件通信有多種方式：props 用於父傳子資料、emit 用於子傳父事件，provide/inject 適合跨層級共享狀態。定義好通信介面後，搭配 Pinia 可進一步簡化全局資料共享，讓小美、阿明等開發者協作時更清晰易維護。",
      isPinned: true,
    },
    {
      id: 6,
      title: "路由配置",
      content: "Vue Router 4 是 Vue3 的官方路由解決方案。配置路由時使用 createRouter 與 createWebHistory 定義路由表，支援動態路由參數與巢狀路由設置。可搭配導航守衛進行權限控制，並使用 useRoute、useRouter 在 Composition API 中取得路由資訊。",
      isPinned: false,
    },
    {
      id: 7,
      title: "API 請求",
      content: "Axios 是常用的 HTTP 請求庫，配置 baseURL 和 timeout 後可統一管理 API 請求。攔截器設置分為請求攔截與響應攔截，可在請求時自動附加 Token，響應時統一處理錯誤。定義封裝函式後，小美、阿明可以直接調用，無需重複配置。",
      isPinned: false,
    },
    {
      id: 8,
      title: "樣式處理",
      content: "Vue3 支援多種樣式處理方式：CSS 模塊可定義局部作用域類名，Scoped Styles 設置組件私有樣式避免污染，預處理器如 SCSS 提供變數、巢狀等進階功能。配置 Vite 後可直接使用這些工具，讓小美、阿明在協作時保持樣式一致性。",
      isPinned: false,
    },
    {
      id: 9,
      title: "生命周期鉤子",
      content: "Vue3 的生命周期鉤子在 Composition API 中以函式形式使用：onMounted 用於組件掛載後執行初始化邏輯、onUnmounted 用於清除定時器或事件監聽、onUpdated 在資料更新後觸發。定義好鉤子配置，可讓 API 請求和 DOM 操作時機更加精確。",
      isPinned: false,
    },
    {
      id: 10,
      title: "表單驗證",
      content: "表單驗證是提升用戶體驗的重要環節。可自定義驗證邏輯，定義規則物件統一配置必填、格式、長度等條件，並在錯誤時顯示對應提示。搭配 reactive 管理表單狀態，使用 computed 即時判斷提交按鈕是否可用，讓小美、阿明填寫表單時獲得即時回饋。",
      isPinned: true,
    },
    {
      id: 11,
      title: "性能優化",
      content: "前端性能優化涵蓋多個層面：代碼分割可按路由定義懶加載模塊，減少首屏資源體積；虛擬列表用於渲染大量資料時僅顯示可視區域，避免 DOM 過多。配置 Vite 的 build 設置可進一步壓縮輸出，讓小美、阿明的項目在生產環境中運行更流暢。",
      isPinned: false,
    },
  ], 
  idCount: 12,
  keyword: "",
 }),
  getters: {
    filterPinned: (state) => {return state.notes.filter(note => note.isPinned).reverse()},
    filterUnpinned: (state) => {return state.notes.filter(note => !note.isPinned).reverse()},
    searchResult: (state) => (keyword) => {
      if (keyword === "") {
        return state.notes
      } else {
        return state.notes.filter(note => note.title.toLowerCase().includes(keyword) || note.content.toLowerCase().includes(keyword)).reverse()
      }
    }
  },
  actions: {
    addNote(text1, text2) {
      if(text1 && text2){this.notes.push({
        id: this.idCount,
        title: text1,
        content: text2,
        isPinned: false,
      })
      this.idCount++
      return true
    }
      else return
    },
    editNote(text1, text2, index){
      const originNote = this.notes.find(note => note.id === index)
      if(text1 !== originNote.title || text2 !== originNote.content){
        originNote.title = text1
        originNote.content = text2
        return true
      }
      else return
    },
    deleteNote(index){
      if(index && this.notes.findIndex((note) =>  note.id === index ) !== 0) this.notes.splice(this.notes.findIndex((note) =>  note.id === index ), 1)
    },
    pinNote(index){
      if(index){
        this.notes.find(note => note.id === index).isPinned = !this.notes.find(note => note.id === index).isPinned
      }
    },
  },
})