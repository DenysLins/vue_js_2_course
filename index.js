var app = new Vue({
    el: '#app',
    data: {
        title: 'Denys',
        link: 'http://www.google.com',
        finishedLink: '<a href="https://denyslins.com">Denys Lins</a>'
    },
    methods: {
        changeTitle: function (event) {
            this.title = event.target.value;
        },
        sayHello: function () {
            return 'Hello ' + this.title + '!!!';
        }
    },
});