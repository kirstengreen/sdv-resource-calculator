<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Calculate Resources</h1>
    </div>
    <div class="actions-bar">
      <button class='btn' @click="$router.push({ name: 'ResourceCalculator' })" >Back to resource list</button>
    </div>
    <div v-if="craftableItem" class="calculate-item-container">
      <div class="item-info">
        <img v-bind:src="craftableItem.img">
        <h3>{{ craftableItem.item }}</h3>
        <p>{{ craftableItem.category }}</p>
      </div>
      <div>
        <h2>Resources needed to craft</h2>
        <form>
          <div class="input-couple form-item">
            <label for="multiplier">How many you want to make</label>
            <input class="multiplier-bar" type="text" for="multiplier" placeholder="Enter number" />
          </div>
          <button class="btn form-item" type="submit">Calculate</button>
        </form>
        <p><strong>Amount of {{ craftableItem.item }}(s):</strong> {{ multiplier }}</p>
        <hr>
        <div v-for="resource in craftableItem.resources" :key="resource">
          <p><strong>{{ resource.item }}:</strong> {{ resource.amount }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- <p>Loading resource ...</p> -->
    </div>
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
      craftableItem: null,
      multiplier: 1
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



<style scoped>

.calculate-item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 56px;
  padding: 24px;
  background: rgb( 255, 255, 255 );
  border: 2px solid rgb( 221, 221, 221 );
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba( 51, 51, 51, .2 );
}

.item-info {
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  border-radius: 4px;
}

.actions-bar {
  margin: 24px 0 32px;
}

form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 24px 0 40px;
}

.multiplier-bar {
  width: 240px;
}

</style>