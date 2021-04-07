<template>
  <header>
    <div class='main-content header'>
      <router-link to="/"><h3>Stardew Valley Resource Tool</h3></router-link>
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
  margin: 0;
  padding: 4px 0;
  background-color: rgb( 53, 69, 99 );
  color: rgb( 255, 255, 255 )
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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