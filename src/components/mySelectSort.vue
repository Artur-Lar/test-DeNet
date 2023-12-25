<template>
  <div class="custom-select" @click="toggleDropdown" ref="customSelect">
    <div class="selected-option">
      {{ selectedOption.text }}
      <img
        src="@/images/dropdown-arrow.svg"
        alt="Arrow Down"
        class="arrow-down"
      />
    </div>
    <ul v-if="isDropdownOpen" class="dropdown">
      <li
        v-for="option in options"
        :key="option.id"
        @click="selectOption(option)"
      >
        {{ option.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      selectedOption: {
        id: 1,
        text: "Sort by name",
      },
      options: [
        {
          id: 1,
          text: "Sort by name",
        },
        {
          id: 2,
          text: "Sort by size",
        },
        {
          id: 3,
          text: "Sort by time",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false;
    },
    handleOutsideClick(event) {
      const customSelectElement = this.$refs.customSelect;

      if (!customSelectElement.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
};
</script>

<style></style>
