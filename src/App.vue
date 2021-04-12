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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

/* * {
  border: 1px solid rgb( 250, 126, 112 );
} */


/* Global styles */

body {
  background-color: rgb( 250, 250, 250 );
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  color: rgb( 51, 51, 51 );
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
  min-height: calc(100vh - 144px);
}

.content-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.content-footer {
  margin: 32px auto 48px;
}

hr {
  color: rgb( 238, 238, 238 );
}


/* TEXT STYLES */

p {
  line-height: 1.5em;
}

/* LINK STYLES */

a {
  color: rgb( 53, 69, 99 );
  font-weight: 600;
  text-decoration: none;
}

a:hover {
  opacity: .8;
  border-bottom: 2px solid rgb( 53, 69, 99 );
}


/* BUTTON STYLES */

.btn {
  height: 40px;
  margin: 0;
  padding: 0 16px;
  background: rgb( 53, 69, 99 );
  border: 2px solid rgb( 53, 69, 99 );
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: rgb( 255, 255, 255 );
}

.btn:hover {
  opacity: .8;
}


/* FORM STYLES */

input {
  height: 36px;
  margin: 0;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #999;
  border-radius: 4px;
}

input:focus {
  border: 2px solid rgb( 53, 69, 99 );
}

.input-couple {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

label {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
}

.form-item:not(:last-child) {
  margin-right: 16px;
}

</style>
