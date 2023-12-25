<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <header class="header">
    <div class="header-part">
      <img class="logo" src="./images/LOGO.svg" alt="logo" />
      <button class="btn">
        <img src="./images/upload.svg" alt="upload" /> Upload
      </button>
      <button class="btn">
        <img src="./images/plus-sign.svg" alt="plus" /> New folder
      </button>
      <button class="btn btn-no-shadow">
        <img src="./images/recicle bin.svg" alt="bin" /> Resycle bin
      </button>
    </div>
    <div class="header-part">
      <mySelect />
      <img class="search" src="./images/search-sign.svg" alt="search" />
      <div class="header-balance-used">
        <p class="text-grey">Used:</p>
        <p class="text-black">0.4 GB</p>
        <img src="./images/Line 90.svg" alt="v-line" />
        <p class="text-grey">Balance:</p>
        <p class="text-black">0.6 TBY</p>
        <img src="./images/yellow-plus.svg" alt="add-icon" />
      </div>
      <img
        class="profile-logo"
        src="./images/profile-logo.svg"
        alt="profile-logo"
      />
    </div>
  </header>
  <PageContent />
</template>

<script>
import PageContent from "./components/pageContent.vue";
import mySelect from "./components/mySelect.vue";

export default {
  components: {
    PageContent,
    mySelect,
  },
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}
.btn {
  cursor: pointer;
  display: flex;
  padding: 8px 20px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: var(--7, #fff);
  box-shadow: 1px 5px 23px 0px rgba(35, 35, 35, 0.08);
  border: none;
  height: 40px;
}
</style>

<style scoped>
.header {
  color: #232323;
  height: 104px;
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
}
.logo {
  width: 200px;
  height: 24px;
}
.header-part {
  display: flex;
  align-items: center;
  gap: 20px;
}

.btn-no-shadow {
  box-shadow: none;
}
.search {
  border-radius: 26px;
  background: rgba(246, 246, 246, 0.4);
  width: 24px;
  height: 24px;
}
.header-balance-used {
  border-radius: 10px;
  border: 1px solid var(--4, #ebebeb);
  background: rgba(255, 255, 255, 0.8);
  height: 40px;
  width: 340px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.text-grey {
  color: var(--2, #676767);
  font-weight: 300;
}
.text-black {
  color: var(--1, #232323);
}
.profile-logo {
  width: 40px;
  height: 40px;
}
</style>
