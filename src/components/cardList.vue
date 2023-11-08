<template>
  <div class="conteiner">
    <div v-if="cards.length > 0">
      <h2 class="title">Список сотрудников</h2>
    </div>
    <div v-else>
      <div>
        <h2 class="title">Список сотрудников пуст</h2>
      </div>
    </div>
    <div v-if="!isEditing">
      <div v-for="card in cards" :key="card.id" class="card">
        <div><strong>Name:</strong> {{ card.name }}</div>
        <div><strong>Surname:</strong> {{ card.surname }}</div>
        <div><strong>Experience:</strong> {{ card.experience }}</div>
        <div><strong>Age:</strong> {{ card.age }}</div>
        <div><strong>Address:</strong> {{ card.address }}</div>
        <button class="btn" @click="startEditing(card)">Редактировать</button>
        <button class="btn" @click="() => showDeleteConfirmation(card)">
          Удалить
        </button>
      </div>
    </div>
    <div v-else class="inputsForEdit">
      <input class="input" v-model="editedName" />
      <input class="input" v-model="editedSurname" />
      <input class="input" v-model="editedExperience" />
      <input class="input" v-model="editedAge" />
      <input class="input" v-model="editedAddress" />
      <button class="btn" @click="saveChanges">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      editedName: "",
      editedSurname: "",
      editedExperience: "",
      editedAge: "",
      editedAddress: "",
      editingCard: null,
    };
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteCard(card) {
      const index = this.cards.indexOf(card);
      if (index !== -1) {
        const updatedCards = [...this.cards];
        updatedCards.splice(index, 1);
        this.$emit("updateCards", updatedCards);
      }
    },

    startEditing(card) {
      this.isEditing = true;
      this.editedName = card.name;
      this.editedSurname = card.surname;
      this.editedExperience = card.experience;
      this.editedAge = card.age;
      this.editedAddress = card.address;
      this.editingCard = card;
    },
    saveChanges() {
      this.editingCard.name = this.editedName;
      this.editingCard.surname = this.editedSurname;
      this.editingCard.experience = this.editedExperience;
      this.editingCard.age = this.editedAge;
      this.editingCard.address = this.editedAddress;
      this.isEditing = false;
      this.editedName = "";
      this.editedSurname = "";
    },
    showDeleteConfirmation(card) {
      if (window.confirm("Вы действительно хотите удалить эту карточку?")) {
        this.deleteCard(card);
      }
    },
  },
};
</script>

<style scoped>
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

.card {
  padding: 15px;
  border: 2px solid rgb(54, 54, 165);
  border-radius: 10px;
  margin-top: 15px;
}
.input {
  padding: 10px;
  border: 1px solid rgb(54, 54, 165);
  border-radius: 5px;
  margin: 5px;
}
.inputsForEdit {
  margin: auto;
  width: 85%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
