<template>
  <div class="crafting-items-content">
    <h2>Crafting items</h2>
    <div class="crafting-items-grid">
      <div class="crafting-item-container" v-for="item in searchResults" :key="item.id" @click="$router.push({ name: 'CraftableItem', params: { idOfCraftableItem: item.id }})">
          <div class="crafting-item">
            <img v-bind:src="item.img" v-bind:alt="item.item">
            <p>{{ item.item }}</p>
          </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  
  props: {
    searchResults: Array,
  }

}

</script>



<style scoped>



</style>