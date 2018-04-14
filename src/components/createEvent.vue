<template>
  <div class="event" @click="backToInfo">
    EVENT
  </div>
</template>
<script>
export default {
  methods: {
    backToInfo() {
      const info = document.querySelector('.info');
      const event = document.querySelector('.event');
      event.style.left = '';
      // event.style.transition = '2s';
      info.style.left = 0;
      // info.style.transition = '2s'
    }
  }
}
</script>

<style lang="scss" scoped>
  .event {
    display: inline-block;
    transition: left 1s;
  }
</style>
