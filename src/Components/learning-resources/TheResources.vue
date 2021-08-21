<template>
  <base-card>
    <base-button @click="setSelected('add-resources')" :mode="addResButton"
      >Add Resources</base-button
    >
    <base-button
      @click="setSelected('stored-resources')"
      :mode="storedResButton"
      >Stored Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedComp"></component>
  </keep-alive>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: { BaseButton, StoredResources, AddResources },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
  computed: {
    addResButton() {
      return this.selectedComp === 'add-resources' ? null : 'flat';
    },
    storedResButton() {
      return this.selectedComp === 'stored-resources' ? null : 'flat';
    }
  },
  data() {
    return {
      selectedComp: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          tittle: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vue.js.org'
        },
        {
          id: 'google',
          tittle: 'Google',
          description: 'learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelected(comp) {
      this.selectedComp = comp;
    },
    addResource(tittle, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        tittle: tittle,
        description: description,
        link: link
      };
      this.storedResources.unshift(newResource);
      this.selectedComp = 'stored-resources';
    },
    deleteResource(rid) {
      const resIndex = this.storedResources.findIndex(res => res.id === rid);

      this.storedResources.splice(resIndex, 1);
    }
  }
};
</script>
