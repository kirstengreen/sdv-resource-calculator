<template>
  <div class="main-content">
    <div class="content-header">
      <h1>Welcome to the Stardew Valley Resource Calculator</h1>
    </div>
    <div class="homepage-content">
      <p>As a builder/planner Stardew Valley player, I always found myself living on the <a href="https://stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank">Stardew Valley Wiki</a> making calculations for all the items I wanted to build. For a while now, I have wanted to build a tool to make this process easier, so I could get straight to farming the resources I needed to start building.</p>
      <p>For my capstone project at <a href="https://generalassemb.ly/" target="_blank">General Assembly</a>, I decided to begin the process of making this tool. If you have some time, would you give it a go?</p>
      <button class='btn' @click="$router.push({ name: 'ResourceCalculator' })">Calculate resources</button>
    </div>
    <div class="content-footer"></div>
  </div>
</template>



<style scoped>

.homepage-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 500px;
  padding: 16px 24px 32px;
  background: rgb( 255, 255, 255 );
  border: 2px solid rgb( 221, 221, 221 );
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba( 51, 51, 51, .3 );
}

.homepage-content button {
  margin-top: 16px;
}

</style>