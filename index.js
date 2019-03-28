var app = new Vue({
    el: '#app',
    data: {
        title: 'Denys',
        link: 'http://www.google.com',
        finishedLink: '<a href="https://denyslins.com">Denys Lins</a>',
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        sayHello: function () {
            return 'Hello ' + this.title + '!!!';
        },
        increase: function () {
            this.counter++;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    },
});