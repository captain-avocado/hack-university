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
      <app-map id="app-map" class="map"></app-map>
      <div class="right-part">
        <info class="info"></info>
        <event class="event"></event>
        <review class="review"></review>
      </div>
    </div>
  </div>
</template>
<script>
import appHeader from './components/header.vue';
import appMap from './components/map.vue';
import info from './components/info.vue';
import event from './components/createEvent.vue';
import review from './components/createReview.vue';

export default {
  components: {
    appHeader,
    appMap,
    info,
    event,
    review
  },
}
</script>

<style lang="scss">


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



.map, .right-part {
  width: 50%;
  // flex: 1;
}

.right-part {
  // background-color: grey;
  position: relative;
  overflow: hidden;

  border-left: 1px solid rgba(0, 0, 0, .33);
}

.info, .review, .event {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.review, .event {
  left: 100%;
}
</style>
