<template>
  <div
    class="container-file-icon"
    :class="{ active: isSelected }"
    @mousedown="handleMouseDown"
    @contextmenu.prevent="handleContextMenu"
  >
    <img src="../images/folder-icon.svg" alt="folder-icon" />
    <p class="file-title">New folder</p>
    <!-- Контекстное меню -->
    <div
      v-if="contextMenuVisible"
      class="context-menu"
      @mouseleave="handleMouseLeave"
    >
      <div @click="handleMenuItemClick(uploadAction)">
        <img src="@/images/upload.svg" alt="upload" /> Upload
      </div>
      <div @click="handleMenuItemClick(newFolderAction)">
        <img src="@/images/new-folder-icon.svg" alt="newFolder" /> New folder
      </div>
      <div @click="handleMenuItemClick(deleteAction)">
        <img src="@/images/recicle bin.svg" alt="basket" /> Delete
      </div>
      <div @click="handleMenuItemClick(infoAction)">
        <img src="@/images/info-icon.svg" alt="info" /> Info
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
      contextMenuVisible: false,
    };
  },
  methods: {
    handleMouseDown(event) {
      if (event.button === 2) {
        // ПКМ
        this.contextMenuVisible = true;
        document.addEventListener("click", this.handleDocumentClick);
      }
    },
    handleMouseLeave() {
      this.contextMenuVisible = false;
      document.removeEventListener("click", this.handleDocumentClick);
    },
    handleDocumentClick(event) {
      const clickedElement = event.target;
      const contextMenu = this.$el.querySelector(".context-menu");
      if (contextMenu && !contextMenu.contains(clickedElement)) {
        this.contextMenuVisible = false;
        document.removeEventListener("click", this.handleDocumentClick);
      }
    },
    handleContextMenu(event) {
      event.preventDefault();
    },
    handleMenuItemClick(action) {
      action();
      this.contextMenuVisible = false;
    },
    uploadAction() {
      console.log("Upload action");
    },
    newFolderAction() {
      console.log("New folder action");
    },
    deleteAction() {
      console.log("Delete action");
    },
    infoAction() {
      console.log("Info action");
    },
  },
};
</script>

<style></style>
