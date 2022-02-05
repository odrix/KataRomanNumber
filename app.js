const app = new Vue({
    el: '#app',
    data: {
        decimal: '',
        roman: ''
    },
    mounted() {
        this.evSource = new EventSource('/roman');
        let that = this;
        this.evSource.onmessage = function(e) {
            that.roman = e.data;
        };
    },
    methods: {
        convert() {
            fetch('/convert/' + this.decimal);
        }
    }
});