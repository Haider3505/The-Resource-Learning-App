<template>
  <error-dialogue
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmedError"
  >
    <template #default>
      <p>Unfortunately there is something wrong with the inputs</p>
      <p>Please check the input fields and make sure every thing is ok</p>
    </template>
    <template #actions>
      <base-button @click="confirmedError">okay</base-button>
    </template>
  </error-dialogue>
  <base-card>
    <h2>Add Resources</h2>
    <form @submit.prevent="saveResource">
      <div class="form-control">
        <label for="tittle">Tittle</label>
        <input type="text" id="tittle" name="tittle" ref="tittle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
// import ErrorDialogue from '../Dialogues/ErrorDialogue.vue';
export default {
  data() {
    return {
      inputIsInvalid: false
    };
  },
  inject: ['addResource'],
  methods: {
    saveResource() {
      const tittle = this.$refs.tittle.value;
      const description = this.$refs.description.value;
      const link = this.$refs.link.value;
      if (
        tittle.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(tittle, description, link);
      this.$refs.tittle.value = this.$refs.description.value = this.$refs.link.value =
        '';
    },
    confirmedError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
