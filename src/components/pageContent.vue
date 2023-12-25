<template>
  <div class="container">
    <div class="upper-part" @click="hideHoverMenu">
      <div class="breadscrumbs">All files</div>
      <div class="selector-and-hoverMenu">
        <div class="hover-menu" :class="{ active: isHovered }" @click.stop>
          <button class="btn">
            <img src="../images/info-icon.svg" alt="info" /> Info
          </button>
          <button class="btn">
            <img src="../images/recicle bin.svg" alt="delete" /> Delete
          </button>
          <button class="btn">
            <img src="../images/downlaod-icon.svg" alt="download" /> Download
          </button>
          <button class="btn">
            <img src="../images/copy-icon.svg" alt="copy" /> Copy
          </button>
          <button class="btn">
            <img src="../images/rename-icon.svg" alt="rename" /> Rename
          </button>
        </div>
        <MySelectSort />
      </div>
    </div>
    <div class="contain-part">
      <FilePageContent @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
      <FilePageContent1 @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
      <FilePageContent @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
      <FilePageContent @click="showHoverMenu" />
      <FolderPageContent @click="showHoverMenu" />
    </div>
    <div class="remaining-part" @click="hideHoverMenu"></div>
  </div>
</template>

<script>
import FilePageContent from "./filePageContent.vue";
import FilePageContent1 from "./filePageContent-1.vue";

import FolderPageContent from "./folderPageContent.vue";
import MySelectSort from "./mySelectSort.vue";

export default {
  components: {
    FilePageContent,
    FilePageContent1,
    FolderPageContent,
    MySelectSort,
  },

  data() {
    return {
      selectedValue: "option1",
      isHovered: false,
    };
  },
  methods: {
    showHoverMenu() {
      this.isHovered = true;
    },

    hideHoverMenu() {
      this.isHovered = false;
    },
  },
};
</script>

<style scoped>
.breadscrumbs {
  color: #676767;
}
.container {
  width: 95%;
  margin: auto;
}
.upper-part {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contain-part {
  display: grid;
  gap: 5px;
  grid-auto-rows: 175px;
  grid-auto-columns: 150px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
.selector-and-hoverMenu {
  display: flex;
}
.hover-menu {
  display: none;
}
.hover-menu.active {
  display: flex;
  width: 780px;
  justify-content: space-evenly;
}
.remaining-part {
  height: 80vh;
}
</style>
