<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Craftable Item</h1>
    </div>
    <h2>The item name is {{ craftableItem.item }}</h2>
    <div class="content-footer"></div>
  </div>
</template>



<script>

export default {
  
  props: {
    idOfCraftableItem: String,
  },

  data() {
    return {
      craftableItem: []
    }
  },

  beforeMount(){
    this.fetchCraftableItem()
  },

  methods: {
    async fetchCraftableItem() {
      fetch('http://localhost:5000/api/v1/craftable-items/' + this.idOfCraftableItem )
        .then( res => res.json() )
        .then( data => this.craftableItem = data.data )
        .catch( error => console.log(error.message) )
    }
  },

}


</script>