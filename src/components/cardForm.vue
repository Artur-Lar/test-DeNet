<template>
  <div class="conteiner">
    <h2 class="title">Создать карточку сотрудника</h2>
    <form class="createCard" @submit.prevent>
      <input
        type="text"
        placeholder="Name"
        class="input"
        v-model="cards.name"
        required
      />
      <input
        type="text"
        placeholder="Surname"
        class="input"
        v-model="cards.surname"
        required
      />
      <input
        type="number"
        placeholder="Experience (years)"
        class="input"
        v-model="cards.experience"
      />
      <input
        type="number"
        placeholder="Age"
        class="input"
        v-model="cards.age"
      />
      <input
        type="text"
        placeholder="Address"
        class="input"
        v-model="cards.address"
      />
      <button @click="createCard" class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: {
        name: "",
        surname: "",
        experience: "",
        age: "",
        address: "",
      },
    };
  },
  methods: {
    createCard() {
      if (!this.cards.name || !this.cards.surname) {
        alert("Please fill in the required fields: Name and Surname.");
        return;
      }

      if (this.cards.experience > this.cards.age) {
        alert("Experience cannot be greater than Age.");
        return;
      }

      const newCard = {
        id: Date.now(),
        name: this.cards.name,
        surname: this.cards.surname,
        experience: this.cards.experience,
        age: this.cards.age,
        address: this.cards.address,
      };

      this.$emit("create", newCard);
      this.cards = {
        name: "",
        surname: "",
        experience: "",
        age: "",
        address: "",
      };
    },
  },
  mounted() {
    // Code to run when the component is mounted
  },
};
</script>

<style scoped>
.input {
  padding: 10px;
  border: 1px solid rgb(54, 54, 165);
  border-radius: 5px;
  margin: 5px;
}
.btn {
  background-color: rgb(54, 54, 165);
  color: white;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}
.title {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.conteiner {
  margin: auto;
  width: 90%;
}
</style>
