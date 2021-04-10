<template>
  <div class="category-selection-content">
    <button class="category-btn category-btn-selected">All Items</button>
    <button class="category-btn">Artisan Equipment</button>
    <button class="category-btn">Refining Equipment</button>
  </div>
</template>


<style scoped>

.category-selection-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 24px 0;
}

.category-btn {
  height: 40px;
  padding: 0 16px;
  background: rgb( 204, 204, 204 );
  border: 0;
  border-radius: 20px;
  font-weight: 700;
}

.category-btn:hover {
  opacity: .8;
}

.category-btn:not(:last-child) {
  margin-right: 8px;
}

.category-btn-selected {
  background-color: rgb( 51, 51, 51);
  color: rgb( 255, 255, 255 )
}

</style>