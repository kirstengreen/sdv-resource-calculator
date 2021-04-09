<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Resource Calculator</h1>
    </div>
    <CraftingItemSearch />
    <hr>
    <CraftingItemList />
    <div class="content-footer"></div>
  </div>
</template>


<script>

import CraftingItemSearch from '../components/CraftingItemSearch'
import CraftingItemList from '../components/CraftingItemList'

export default {

  name: 'Resource Calculator',
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
      const res = await fetch('http://localhost:5000/api/v1/craftable-items/')
      const data = await res.json()
      return data.data
    }
  },
  
}

</script>


<style scoped>


</style>