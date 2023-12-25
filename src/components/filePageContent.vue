<template>
  <div
    class="container-file-icon"
    :class="{ active: isSelected }"
    @mousedown="activate"
    @mouseup="deactivate"
  >
    <img src="../images/file-xls-icon.png" alt="file-icon" />
    <p class="file-title">NR.XLS</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    activate() {
      this.isSelected = true;
    },
    deactivate() {
      this.isSelected = false;
      document.removeEventListener("mouseup", this.deactivateOutside);
    },
    deactivateOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.deactivate();
      }
    },
  },
};
</script>

<style>
.container-file-icon {
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

.file-title {
  padding-top: 15px;
}
</style>
