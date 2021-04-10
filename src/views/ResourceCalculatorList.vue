<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Resource Calculator</h1>
    </div>
    <CraftingItemSearch />
    <hr>
    <CraftingItemList 
      :craftableItems="craftableItems" 
    />
    <div class="content-footer"></div>
  </div>
</template>


<script>

import CraftingItemSearch from '../components/CraftingItemSearch'
import CraftingItemList from '../components/CraftingItemList'

export default {
  
  components: {
    CraftingItemSearch,
    CraftingItemList
  },

  data() {
    return {
      craftableItems: []
    }
  },

  beforeMount(){
    this.fetchCraftableItems()
  },

  methods: {
    async fetchCraftableItems() {
      fetch('http://localhost:5000/api/v1/craftable-items/')
        .then( res => res.json() )
        .then( data => this.craftableItems = data.data )
        .catch( error => console.log(error.message) )
    }
  },
  
}

</script>


<style scoped>


</style>