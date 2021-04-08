<template>
  <div class="page">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>



<script>

import Header from './components/Header' 
import Footer from './components/Footer' 

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  background-color: rgb( 242, 242, 242 );
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-content {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 112px);
}

.content-header {
  margin: 48px auto 32px; 
}

.content-footer {
  margin: 32 auto 48px;
}

hr {
  color: rgb( 238, 238, 238 );
}


/* FORM STYLES */

input {
  height: 36px;
  margin: 0;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid rgb( 51, 51, 51 );
  border-radius: 4px;
}


/* BUTTON STYLES */

.btn {
  height: 40px;
  margin: 0;
  padding: 0 16px;
  border: 2px solid rgb( 51, 51, 51 );
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
}

</style>
