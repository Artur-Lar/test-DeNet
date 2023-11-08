<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <header class="header">
    <button class="burger-button" @click="toggleMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <ul class="listForNav" :class="{ 'hidden-menu': !isMenuOpen }">
      <li>Главная</li>
      <li>Контакты</li>
      <li>Все сотрудники</li>
      <li>О нас</li>
    </ul>
  </header>
  <cardForm @create="createCard" />
  <cardList @updateCards="handleCardUpdated" :cards="cards" />
</template>

<script>
import cardForm from "@/components/cardForm.vue";
import cardList from "@/components/cardList.vue";
export default {
  data() {
    return {
      isMenuOpen: true,
      cards: [
        {
          id: 1,
          name: "Ivan",
          surname: "Smirnov",
          experience: 10,
          age: 25,
          address: "Istanbul",
        },
        {
          id: 2,
          name: "Alex",
          surname: "Nikiforov",
          experience: 15,
          age: 35,
          address: "Moscow",
        },
        {
          id: 3,
          name: "Anna",
          surname: "Ivanova",
          experience: 12,
          age: 22,
          address: "Krasnodar",
        },
        {
          id: 4,
          name: "Jennifer",
          surname: "Anniston",
          experience: 35,
          age: 50,
          address: "Los-Angeles",
        },
        {
          id: 5,
          name: "Jon",
          surname: "Snow",
          experience: 5,
          age: 30,
          address: "Westeros",
        },
      ],
    };
  },
  methods: {
    createCard(card) {
      this.cards.push(card);
      console.log(card);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleCardUpdated(updatedCards) {
      this.cards = updatedCards;
    },
  },

  components: {
    cardForm,
    cardList,
  },
};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.header {
  background-color: rgb(54, 54, 165);
  color: white;
  height: 60px;
  display: flex;
}

.listForNav {
  list-style: none;
  padding: 0;
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: auto;
}

.conteiner {
  margin: auto;
  width: 90%;
}
.createCard {
  width: 85%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
}

.burger-button {
  display: none;
}
.line {
  display: block;
  width: 30px;
  height: 3px;
  margin: 6px 0;
  background: #fff;
  transition: 0.4s;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 768px) {
  .listForNav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    text-align: center;
  }

  .listForNav.hidden-menu {
    display: flex;
    width: auto;
  }

  .listForNav li {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .burger-button {
    display: block;
  }
}
</style>
