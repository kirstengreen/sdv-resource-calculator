<template>
  <div class="search-form-content">
    <form class="search-form" @submit="findItems">
      <input class="search-bar form-item" type="text" placeholder="Enter a crafting item name" v-model="keyword" @keydown="resetSearchState"/>
      <button class="btn form-item" type="submit">Search</button>
    </form>
  </div>
</template>


<script>
export default {

  props: {
    craftableItems: Array,
  },

  emits: [
    'foundItems',
    'resetSearchState'
  ],
  
  data() {
    return {
      keyword: '',
      searchResults: []
    }
  },

  methods: {
    findItems(event) {
      event.preventDefault()

      this.searchResults = [];

      for ( let i = 0; i < this.craftableItems.length; i++ ){
        let itemName = this.craftableItems[i].item.toLowerCase()
        let foundItem = itemName.includes(`${this.keyword.toLowerCase()}`)

        if ( this.keyword !== '' && foundItem === true ) {
          this.searchResults.push(this.craftableItems[i]);
        }
      }

      // console.log(this.searchResults)
      let searchResults = this.searchResults
      this.$emit('foundItems', searchResults)

    },

    resetSearchState() {
      this.$emit('resetSearchState', false)
    }

  },

}
</script>


<style scoped>

.search-form-content {
  margin: 24px 0 32px;
}


.search-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.search-bar {
  width: 320px;
}

</style>