const app = Vue.createApp({
    data() {
        return {
            name: 'Javier',
            age: 36,
            favoriteNumber: Math.floor(Math.random()*2),
            imgUrl: 'https://avatars.githubusercontent.com/u/96433186?s=400&u=1636b4a57983df70e4b6de37d330fa84f22719e3&v=4',
            inputValue: '',
        }
    },
    methods: {
        ageInFiveYears(){
            return this.age + 5;
        },
        changeInputValue(event){
            this.inputValue = event.target.value;
        }
    }
 });


 app.mount('#assignment');