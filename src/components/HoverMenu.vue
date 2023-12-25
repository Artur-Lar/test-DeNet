<template>
  <div class="hover-menu" :class="{ active: isHovered }" @click.stop>
    <button class="btn">
      <img src="../images/info-icon.svg" alt="info" /> Info
    </button>
    <button class="btn">
      <img src="../images/recycle-bin.svg" alt="delete" /> Delete
    </button>
    <button class="btn">
      <img src="../images/download-icon.svg" alt="download" /> Download
    </button>
    <button class="btn">
      <img src="../images/copy-icon.svg" alt="copy" /> Copy
    </button>
    <button class="btn">
      <img src="../images/rename-icon.svg" alt="rename" /> Rename
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isHovered: Boolean,
  },
};
</script>

<style>
.hover-menu {
  display: none;
}
.hover-menu.active {
  display: flex;
  width: 780px;
  justify-content: space-evenly;
}
</style>
