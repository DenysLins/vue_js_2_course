var app = new Vue({
    el: '#app',
    data: {
        title: 'Denys',
        link: 'http://www.google.com',
        finishedLink: '<a href="https://denyslins.com">Denys Lins</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'Denys',
        counter2: 0,
        counter3: 0
    },
    computed: {
        output: function () {
            console.log('Computed!')
            return this.counter2 > 10 ? 'Greater than 10' : 'Small than 10';
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
            console.log('Method!')
            return this.counter2 > 10 ? 'Greater than 10' : 'Small than 10';
        }
    },
});