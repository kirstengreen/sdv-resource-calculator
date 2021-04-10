<template>
  <div class="search-form-content">
    <form class="search-form">
      <input class="search-bar form-item" type="text" placeholder="Enter a crafting item name" />
      <button class="btn form-item" type="submit">Search</button>
    </form>
  </div>
</template>


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