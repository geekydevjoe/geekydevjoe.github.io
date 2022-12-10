<template>
  <div> 
    <!-- 
    <button @click="handleSearch(state.search)">search</button>-->
    <router-view />
  </div>
</template>
<script lang="ts">
// import SearchResults from './stores/SearchResults';

// export default {
//   setup() {
//     const search = SearchResults();
//     console.log(search);
//     return search
//   }
// };
</script>

<style>
  .artwork {
    /* box-shadow: 0px 0 3px 3px #969696; */
    border-radius: 8px;
    margin-bottom: 16px;
    margin-top: 16px;
  }
  .extras {
    padding-top: 16px;
  }
  .podcastContainer {
    display: flex; 
    justify-content: center;
  }

@media (prefers-color-scheme: dark) {
  :root {
    --background-color:#212529;
    --text-color: white;  
    --bs-body-color: white;
    --bs-body-bg:#212529;
    --light-gray: #cccccc;
    --secondary-text: #cccccc;
  }
}
@media (prefers-color-scheme: light) {
:root {
    --background-color: white;
    --text-color:#212529;
    --bs-body-color: #212529;
    --bs-body-bg: #fff;
    --light-gray: #cccccc;
    --secondary-text: #696969;
  }
}
* :not(input) {
  background-color: var(--background-color);
  color: var(--text-color);
}
.secondary-text {
  color: var(--secondary-text);
}
.card {
  background-color: var(--background-color);
  border-width: 1px;
  border-color: var(--light-gray);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>