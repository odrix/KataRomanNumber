const app = new Vue({
    el: '#app',
    data: {
        decimal: '',
        roman: ''
    },
    methods: {
        convert() {
            let that = this;
            fetch('/convert/' + this.decimal)
                .then((res) => {
                    return res.text();
                })
                .then((result) => {
                    that.roman = result;
                });
        }
    }
});