<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button
          class="btn btn-info"
          @click="show = !show"
        >Show Alert</button>
        <br>
        <br>
        <select
          v-model="customAnimation"
          class="form-control"
        >
          <option
            value="fade"
            selected
          >Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <br>
        <transition
          appear
          enter-active-class="animated shake"
          leave-active-class="animated bounceOut"
        >
          <div
            class="alert alert-info"
            v-if="show"
          >This is an animated info</div>
        </transition>
        <transition
          name="slide"
          appear
        >
          <div
            class="alert alert-info"
            v-if="show"
          >This is an animated info</div>
        </transition>
        <transition
          name="fade"
          appear
        >
          <div
            class="alert alert-info"
            v-if="show"
          >This is an animated info</div>
        </transition>
        <transition
          :name="customAnimation"
          appear
          mode="out-in"
        >
          <div
            class="alert alert-info"
            v-if="show"
            key="info"
          >This is an animated info</div>
          <div
            class="alert alert-warning"
            v-else
            key="alert"
          >This is an animated alert</div>
        </transition>
        <br>
        <br>
        <button
          class="btn btn-info"
          @click="load = !load"
        >Load / Unload Element</button>
        <br>
        <br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div
            style="width: 100px; height: 100px; background-color: red"
            v-if="load"
          ></div>
        </transition>
        <hr>
        <button
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
        >Toggle Compoent</button>
        <br><br>
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button
          class="btn btn-primary"
          @click="addEl"
        >Add Item</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="index"
              @click="removeEl(index)"
              style="cursor: pointer"
            >{{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";
export default {
  data () {
    return {
      show: true,
      load: true,
      customAnimation: "fade",
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    beforeEnter (el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter (el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter (el) {
      console.log("afterEnter");
    },
    enterCancelled (el) {
      console.log("enterCancelled");
    },
    beforeLeave (el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave (el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave (el) {
      console.log("afterLeave");
    },
    leaveCancelled (el) {
      console.log("leaveCancelled");
    },
    removeEl (index) {
      this.numbers.splice(index, 1);
    },
    addEl () {
      this.numbers.push(this.numbers.length + 1);
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
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

.fade-move,
.slide-move {
  transition: transform 1s;
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
