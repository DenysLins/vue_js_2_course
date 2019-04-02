var app1 = new Vue({
  data: {
    title: 'Denys',
    link: 'http://www.google.com',
    finishedLink: '<a href="https://denyslins.com">Denys Lins</a>',
    counter: 0,
    x: 0,
    y: 0,
    name: 'Denys',
    counter2: 0,
    counter3: 0,
    attachRed: false,
    show: true
  },
  computed: {
    output: function () {
      return this.counter2 > 10 ? 'Greater than 10' : 'Small than 10';
    },
    divClass: function () {
      return {
        honeydew: this.attachRed,
        gray: !this.attachRed
      }
    }
  },
  watch: {
    counter2: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter2 = 0;
      }, 2000);
    }
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    sayHello: function () {
      return 'Hello ' + this.title + '!!!';
    },
    increase: function (step, event) {
      this.counter += step;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert('Teste!!!');
    },
    result: function () {
      return this.counter2 > 10 ? 'Greater than 10' : 'Small than 10';
    }
  },
});

setTimeout(function () {
  app1.$mount('#app1');
  app1.title = "Changed by timeout!";
  app1.alertMe();
  app2.$refs.myButton.innerText = 'Changed using $refs in setTimeout'
}, 5000);


var app2 = new Vue({
  el: '#app2',
  data: {
    title: 'APP 2'
  },
  methods: {
    changeTitle: function () {
      app1.title = "Changed by App 2!";
      this.$refs.myButton.innerText = 'Changed using $refs when clicked';
    }
  }
});
