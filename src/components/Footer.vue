<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2021 Kirsten Green</p>
      <p><a href="https://github.com/kirstengreen/sdv-resource-calculator">GitHub</a></p>
    </div>
  </footer>
</template>



<style scoped>

footer {
  display: flex;
  align-items: center;
  margin: 0;
  height: 56px;
  background-color: rgb( 53, 69, 99 );
  color: rgb( 255, 255, 255 )
}

.footer-content {
  display: flex;
  flex-direction: row;
  flex-wrap: row;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p:not(:last-child) {
  padding-right: 32px; 
}

a {
  color: rgb( 255, 255, 255 );
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  opacity: .8;
  border: none;
}

</style>