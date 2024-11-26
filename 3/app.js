const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        inputTextValue: "",
        confirmedName: '',
      };
    },
    methods: {
      increse() {
        return this.counter++;
      },
      decrese() {
        this.counter--;
      },
      addFive(num) {
        return this.counter = this.counter + num;
      },
      reduceFive(num) {
        return this.counter = this.counter - num;
      },
      handleInputTextValue(e, lastname) {
        this.inputTextValue = e.target.value + ' ' + lastname;
      },
      //if not using modifier  v-on:keyup.enter, we can use this way
      // confirmInput(e){
      //   if (e.key === 'Enter') {
      //     this.confirmedName = this.inputTextValue;
      //   }
        
      // }, 
      confirmInput(){
          this.confirmedName = this.inputTextValue;
      }, 
      handleSubmit(e) {
        e.preventDefault();
        alert("Submitted!");
       },
       handleSubmitWithDotPrevent() {
        alert("Submitted!");
       }
    },
  });
  
  app.mount("#events");
  