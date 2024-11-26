const app = Vue.createApp({
    data() {
        return {
        inputValue: '',
        toConfirm: '',
        confirmed:''
        } 
    },
    methods: {
        showAlert() { 
            return alert('simple alert');
        },
        handleInputValue(event) {
            this.inputValue = event.target.value;
        },
        handleToConfirm(event) {
            console.log(this.toConfirm);
            
            this.toConfirm = event.target.value;
        },
        confirmInput() {
            this.confirmed = this.toConfirm;
        }
    }
 });


app.mount('#assignment'); 