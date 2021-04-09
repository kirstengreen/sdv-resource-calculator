<template>
  <div class="crafting-items-content">
    <h2>Crafting items</h2>
    <div class="crafting-items-grid">
      <div class="crafting-item" v-for="item in craftableItems" :key="item.id">
        <img v-bind:src="item.img">
        <p>{{ item.item }}</p>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  name: 'Craftable Items',
  
  props: {
    craftableItems: Array,
  }

}

</script>


<style scoped>

.crafting-items-content {
  display: flex;
  flex-direction: column;
}

.crafting-items-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-gap: 32px;
  margin-bottom: 56px;
}

.crafting-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  width: 120px;
  padding: 16px 8px;
  background: rgb( 255, 255, 255 );
  border: 2px solid #bbb;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba( 51, 51, 51, .2 );
  text-align: center;
  font-weight: 600;
}

</style>