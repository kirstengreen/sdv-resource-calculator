<template>
  <header>
    <div class="header">
      <router-link to="/">Stardew Valley Resource Tool</router-link>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/resource-calculator">Calculator</router-link></li>
          <!-- <li><router-link to="/about">About</router-link></li> -->
        </ul>
      </nav>
    </div>
  </header>
</template>


 
<style scoped>

header {
  position: sticky; 
  top: 0;
  height: 56px;
  background-color: rgb( 53, 69, 99 );
  color: rgb( 255, 255, 255 );
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
}

nav ul {
  display: flex;
  align-items: center;
  list-style-type:none;
}

a {
  color: rgb( 255, 255, 255 );
  font-weight: 700;
  text-decoration: none;
}

nav a {
  margin-left: 16px;
  font-size: 16px; 
}

nav a:hover {
  opacity: .8;
}

</style>