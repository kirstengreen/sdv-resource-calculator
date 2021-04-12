<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Resource Calculator</h1>
      <CraftableItemSearch 
        :craftableItems="craftableItems" 
        @foundItems="addSearchResults"
        @resultsNotFound="setResultsNotFound"
        @resetSearchState="resetSearchState"
      />
    </div>
    <hr>
    <CraftableItemList v-if="searchState === false"
      :craftableItems="craftableItems" 
    />
    <!-- <div v-else-if="resultsNotFound === true && searchState === true">
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

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/craftable-items/'
} else {
  baseURL = 'https://sdv-resource-calculator-api.herokuapp.com/api/v1/craftable-items/'
}


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
      searchResults: [],
      resultsNotFound: false
    }
  },

  beforeMount(){
    this.fetchCraftableItems()
  },

  methods: {
    async fetchCraftableItems() {
      fetch(baseURL)
        .then( res => res.json() )
        .then( data => this.craftableItems = data.data )
        .catch( error => console.log(error.message) )
    },

    addSearchResults( searchResults ) {
      this.searchResults = searchResults
      if ( this.resultsNotFound === true ) {
        this.resultsNotFound = false
      }
      this.searchState = !this.search
    },

    resetSearchState( searchState ) {
      this.searchState = searchState
    },

    setResultsNotFound( resultsNotFound ) {
      this.resultsNotFound = resultsNotFound
      console.log(this.resultsNotFound)
    }

  },
  
}

</script>


<style scoped>

.resource-search {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

</style>