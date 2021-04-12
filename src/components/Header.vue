<template>
  <header>
    <div class="header-content">
      <h3><router-link :to="{ name:'Home' }">SDV Resource Tool</router-link></h3>
      <nav>
        <router-link :to="{ name:'Home' }">Home</router-link>
        <router-link :to="{ name:'ResourceCalculator' }">Calculator</router-link>
        <!-- <router-link to="/about">About</router-link> -->
      </nav>
    </div>
  </header>
</template>


 
<style scoped>

header {
  z-index: 10;
  display: flex;
  align-items: center;
  position: sticky; 
  top: 0;
  height: 56px;
  margin-bottom: 32px;
  background-color: rgb( 53, 69, 99 );
  color: rgb( 255, 255, 255 );
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
}

a {
  color: rgb( 255, 255, 255 );
  font-weight: 700;
  text-decoration: none;
}

nav a {
  margin-left: 24px;
  font-size: 16px; 
}

nav a:hover {
  opacity: .8;
  border: none;
}

</style>