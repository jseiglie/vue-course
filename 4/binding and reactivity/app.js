const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: "",
        lastName: '',
        fullName:  ''
      };
    },
    computed: {
      //like an useEffect[] with dependencies. The dependencies will be the ones used on the function and
      // will trigger the function to run
      // only use to output, not binding
      // used for changes on the data and for adding logic when the data changes 
      fullname() {
        if (this.name === "" || this.lastName === "") {
          return "";
        }
        return this.name + " " + this.lastName;
      },
    },
    watch: { 
      //watch is used to watch for changes in the data and run a function when it changes. 
      //like an useEffect that uses the name of the watched variable as the  dependency
      //use to run code when a property changes
      //used for side effects and async operations
      //single dependency
      lastName(value){ //value is the new value of the property
        this.fullName = value + ' ' + this.name 
      }, 
      // a more suitable example
      counter(value){
        if(value > 50){
          this.counter = 0
        }
      },
      //used for timers, http requests from modifying data, etc
    },
    methods: {
      outputFullname() {
        if (this.name === "") {
          return "";
        }
        return this.name + " " + this.lastName;
      },
      setName(event) {
        this.name = event.target.value;
      },
      add(num) {
        this.counter = this.counter + num;
      },
      reduce(num) {
        this.counter = this.counter - num;
        // this.counter--;
      },
      resetForm() {
        this.name = "";
        this.lastName = "";
      },
    },
  });
  
  app.mount("#events");
  