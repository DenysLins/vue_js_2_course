var app = new Vue({
    el: '#app',
    data: {
        title: 'Denys',
        link: 'http://www.google.com'
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