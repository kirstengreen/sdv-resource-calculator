<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Resource Calculator</h1>
    </div>
    <CraftingItemSearch />
    <!-- <CraftingItemFilters /> -->
    <hr>
    <!-- <CraftingItemList /> -->
    <div class="content-footer"></div>
  </div>
</template>


<script>

import CraftingItemSearch from '../components/CraftingItemSearch' 

export default {
  name: 'Resource Calculator',
  components: {
    CraftingItemSearch
  },
}

</script>


<style scoped>


</style>