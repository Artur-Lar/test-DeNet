<template>
  <div class="custom-select" @click="toggleDropdown" ref="customSelect">
    <div class="selected-option">
      <img
        :src="selectedOption.image"
        alt="Option Image"
        class="option-image"
      />
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
        <img :src="option.image" alt="Option Image" class="option-image" />
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
        text: "Polygon",
        image: require("@/images/polygon-logos.svg"),
      },
      options: [
        {
          id: 1,
          text: "Polygon",
          image: require("@/images/polygon-logos.svg"),
        },
        {
          id: 2,
          text: "Option 2",
          image: require("@/images/polygon-logos.svg"),
        },
        {
          id: 3,
          text: "Option 3",
          image: require("@/images/polygon-logos.svg"),
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

<style>
.custom-select {
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid var(--4, #ebebeb);
  background: rgba(255, 255, 255, 0.8);
  height: 40px;
  width: 200px;
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  color: #676767;
}
.custom-select:hover {
  background: rgba(246, 246, 246, 0.4);
}
.selected-option {
  display: flex;
}

.dropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 140%;
  left: 0;
  width: 100%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 6px 12px 36px 0px rgba(35, 35, 35, 0.1);
  background-color: #fff;
}

.dropdown li {
  padding: 19px 16px;
  cursor: pointer;
}

.dropdown li:last-child {
  border-bottom: none;
}

.option-image {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.arrow-down {
  margin-left: auto;
}
</style>
