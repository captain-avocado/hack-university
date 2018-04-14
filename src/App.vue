<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->

  <div class="app" id="app">
    <app-header></app-header>
    <div class="content">
      <!-- <div class="map" id="map"></div> -->
      <map name="map" id="map" class="map"></map>
      <div class="info"></div>
    </div>
  </div>
</template>
<script>
import appHeader from './components/header.vue';
import map from './components/map.vue';

export default {
  components: {
    appHeader,
    map
  }
}
</script>

<style lang="scss">

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.content {
  display: flex;
  flex: 1;
}

// .map {
//   background-color: white;
// }

.info {
  background-color: grey;
  padding: 5%;
}

.map, .info {
  width: 50%;
  // flex: 1;
}

li,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  font-size: normal;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

a {
    text-decoration: none;
    color: inherit;
}

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input {
  border: 0;
}

</style>
