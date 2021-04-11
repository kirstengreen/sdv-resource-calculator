<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Welcome to the Stardew Valley Resoruce Calculator</h1>
    </div>
    <div class="homepage-content">
      <p>As a builder/planner Stardew Valley player, I always found myself living on the <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank">Stardew Valley wiki page</a> making calculations for all the items I wanted to build.</p>
      <button class='btn' @click="$router.push({ name: 'ResourceCalculator' })">Calculate resources</button>
    </div>
    <div class="content-footer"></div>
  </div>
</template>



<script>

export default {

  components: {
    
  }
}

</script>



<style scoped>

.homepage-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
}

</style>