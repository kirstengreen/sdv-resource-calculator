<template>
  <div class="main-content">
    <div class="content-header">
      <div class="actions-bar">
        <h1>Calculate Resources</h1>
        <button class='btn' @click="$router.push({ name: 'ResourceCalculator' })" >Back to resource list</button>
      </div>
    </div>
    <div v-if="craftableItem" class="calculate-item-container">
      <div class="item-info">
        <img v-bind:src="craftableItem.img" v-bind:alt="craftableItem.item">
        <h3>{{ craftableItem.item }}</h3>
        <p>{{ craftableItem.category }}</p>
      </div>
      <div class="item-calculation">
        <h2>Resources needed to craft</h2>
        <form onsubmit="event.preventDefault()">
          <div class="input-couple form-item">
            <label>How many {{ craftableItem.item }}s?</label>
            <input class="multiplier-bar" type="number" min="1" placeholder="Enter number" v-model="multiplier" @keyup="multiplyResources"/>
          </div>
        </form>
        <div class="calculation-results">
          <div v-if="resources">
            <p><strong>{{ craftableItem.item }}s:</strong> {{ multiplier }}</p>
            <hr>
            <div v-for="(resource, index) in resources" :key="index">
              <p><strong>{{ craftableItem.resources[index].item }}:</strong> {{ resources[index] }} </p>
            </div>
          </div>
          <div v-else class="original-calculation">
            <p><strong>{{ craftableItem.item }}s:</strong> {{ multiplier }}</p>
            <hr>
            <div v-for="resource in craftableItem.resources" :key="resource">
              <p><strong>{{ resource.item }}:</strong> {{ resource.amount }}</p>
            </div>
          </div>
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

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:5000/api/v1/craftable-items/'
} else {
  baseURL = 'https://sdv-resource-calculator-api.herokuapp.com/api/v1/craftable-items/'
}

export default {
  
  props: {
    idOfCraftableItem: String,
  },

  data() {
    return {
      craftableItem: null,
      multiplier: 1,
      resources: null
    }
  },

  beforeMount() {
    this.fetchCraftableItem()
  },

  methods: {

    async fetchCraftableItem() {
      fetch(baseURL + this.idOfCraftableItem )
        .then( res => res.json() )
        .then( data => this.craftableItem = data.data )
        .catch( error => console.log(error.message) )
    },

    multiplyResources() {
      const arry = []
      for ( let i = 0; i < this.craftableItem.resources.length; i++ ) {
        let newNumber = 1;
        newNumber *= this.craftableItem.resources[i].amount * this.multiplier
        arry.push(newNumber)
      }
      this.resources = arry
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
  width:100%;
  margin: 0 0 32px;
}

form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 24px 0 24px;
}

.multiplier-bar {
  width: 240px;
}

.calculation-results {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>