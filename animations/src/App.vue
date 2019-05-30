<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-info" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <transition appear enter-active-class="animated shake" leave-active-class="animated bounceOut">
          <div class="alert alert-info" v-if="show">This is an animated alert</div>
        </transition>
        <transition name="slide">
          <div class="alert alert-info" v-if="show">This is an animated alert</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">This is an animated alert</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.slide-enter,
.slide-leave-to {
}

.slide-enter-to,
.slide-leave {
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
