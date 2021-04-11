<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Resource Calculator</h1>
    </div>
    <CraftableItemSearch 
      :craftableItems="craftableItems" 
      @foundItems="addSearchResults"
      @resetSearchState="resetSearchState"
    />
    <hr>
    <CraftableItemList v-if="searchState === false"
      :craftableItems="craftableItems" 
    />
    <!-- <div v-else-if="searchState === true && searchResults === null ">
      <h2>Maching results not found</h2>
    </div> -->
    <SearchResultsList v-else-if="searchState === true"
      :searchResults="searchResults" 
    />
    <div class="content-footer"></div>
  </div>
</template>


<script>

import CraftableItemSearch from '../components/CraftableItemSearch'
import CraftableItemList from '../components/CraftableItemList'
import SearchResultsList from '../components/SearchResultsList'

export default {
  
  components: {
    CraftableItemSearch,
    CraftableItemList,
    SearchResultsList
  },

  data() {
    return {
      craftableItems: [],
      searchState: false,
      searchResults: []
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
    },

    addSearchResults( searchResults ) {
      this.searchResults = searchResults
      this.searchState = !this.search
    },

    resetSearchState( searchState ) {
      this.searchState = searchState
    }
  },
  
}

</script>


<style scoped>


</style>