<template>
  <div>
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>



<script>

import Header from './components/Header' 

export default {
  name: 'App',
  components: {
    Header,
  },
}

</script>


<style>

@import '~normalize.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

/* * {
    border: 1px solid rgb( 250, 126, 112 );
} */


/* Global styles */

body {
  display: flex;
  flex-direction: column;
  background-color: rgb( 242, 242, 242 );
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

.main-content {
  width: 80%;
  margin: 0 auto;
}

</style>
