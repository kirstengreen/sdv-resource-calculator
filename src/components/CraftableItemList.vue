<template>
  <div class="crafting-items-content">
    <h2>Crafting items</h2>
    <div class="crafting-items-grid">
      <div class="crafting-item-container" v-for="item in craftableItems" :key="item.id" @click="$router.push({ name: 'CraftableItem', params: { idOfCraftableItem: item.id }})">
          <div class="crafting-item">
            <img v-bind:src="item.img">
            <p>{{ item.item }}</p>
          </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  
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

.crafting-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 120px;
  padding: 16px 8px;
  background: rgb( 255, 255, 255 );
  border: 2px solid rgb( 221, 221, 221 );
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba( 51, 51, 51, .3 );
  text-align: center;
}

.crafting-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crafting-item p {
  font-weight: 600;
}

.crafting-item-container:hover {
  cursor: pointer;
  border: 2px solid rgb( 53, 69, 99 );
  opacity: .8;
}

</style>