<template>
  <div class="info">
    <div class="summary">
      <div class="summary__picture"></div>
      <div class="summary__list sum-list">Summary</div>
    </div>
    <div class="event-list">
      <ul class="events">
        <li class="events__item">Event 1</li>
        <li class="events__item">Event 2</li>
        <li class="events__item">Event 3</li>
        <li class="events__item">Event 4</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
        <li class="events__item">Event 5</li>
      </ul>
      <img src="../assets/down-arrow.svg" alt="" class="event-btn-down" width="30" height="30" @click="openList">
      <img src="../assets/next.svg" alt="" class="event-btn-next" width="30" height="30" @click="createNewEvent">
    </div>
    <div class="review-list">
      <div class="review-btn">createNEW!!</div>
    </div>
  </div> 
</template>
<script>

export default {
  methods: {
    createNewEvent() {
      const event = document.querySelector('.event');
      const info = document.querySelector('.info');
      event.style.left = 0;
      info.style.left = '-100%';
    },
    openList(e) {
      const eventList = document.querySelector('.event-list');
      const reviewList = document.querySelector('.review-list');
      const summary = document.querySelector('.summary'); 
      const classList = e.target.classList;
      if (!classList.contains('active')) {
        e.target.style.transform = 'rotate(180deg) translate(-50%)';
        eventList.style.overflow = 'visible';
        eventList.style.height = '70%';
        summary.style.height = 0;
        reviewList.style.height = 0;
      } else {
        e.target.style.transform = '';
        eventList.style.overflow = '';
        eventList.style.height = '';
        summary.style.height = '';
        reviewList.style.height = '';
      }
      classList.toggle('active');
      
    }
  }
}
</script>
<style lang="scss" scoped>
  .info {
    // background-color: grey;
    padding: 5%;
    transition: left 1s;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .summary {
    height: 50%;
    background-color: #fff;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    &__picture {
      flex: 1;
      border-bottom: 1px solid rgba(0, 0, 0, .33);
    }
    &__list {
      flex: 1;
    }

    
  }

  .event-list, .review-list {
    height: 25%;
    background-color: #fff;
    
  }


  .event-list {
    margin-bottom: 5%;
    padding: 5%;
    overflow: hidden;
    position: relative;
  }

  .events {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    margin: 5%;
    &__item {
      border-bottom: 1px solid rgba(0, 0, 0, .33);
    }

    &__btn-down {
      position: absolute;
    }
  }

  .event-btn-down {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    cursor: pointer;
    transform-origin: top left;
    // transition: transform 1s;
  }
  
  .event-btn-next {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%)
  }
  
  .summary, .event-list, .review-list {
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    border-radius: 4px;

    transition: height .5s;
  }

</style>


