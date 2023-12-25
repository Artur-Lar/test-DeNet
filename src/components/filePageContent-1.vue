<template>
  <div
    class="container-file-icon"
    :class="{ active: isSelected }"
    @mousedown="handleMouseDown"
    @contextmenu.prevent="handleContextMenu"
  >
    <img src="../images/file-xls-icon.png" alt="file-icon" />
    <p class="file-title">NR.XLS</p>

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

<style>
.container-file-icon {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-file-icon.active {
  border-radius: 5px;
  background: var(--4, #ebebeb);
}

.container-file-icon:hover {
  border-radius: 5px;
  background: var(--5, #f6f6f6);
}

.context-menu {
  position: absolute;
  top: 50%;
  left: 50%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 7px 9px 27px 0px rgba(0, 0, 0, 0.12);
  z-index: 100;
  min-width: 150px;
}

.context-menu div {
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid var(--4, #ebebeb);
  display: flex;
  align-items: center;
  gap: 5px;
}

.context-menu div:hover {
  background-color: #f6f6f6;
}
</style>
