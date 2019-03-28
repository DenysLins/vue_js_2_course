var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue!'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    },
});