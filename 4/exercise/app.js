const app = Vue.createApp({
  data() {
    return {
      ammount: 0,
      result: "",
    };
  },
  watch: {
    ammount(value) {
      if (value > 37) {
        const that = this;
        setTimeout(function () {
          that.ammount = 0;
        }, 5000);
      }
    },
  },
  computed: {
    checkAmmount() {
      if (this.ammount === 0) {
        return (this.result = "Find the number!");
      } else if (this.ammount === 37) {
        return (this.result = "you did it!");
      } else if (this.ammount < 37) {
        return (this.result = "Not there yet");
      } else {
        return (this.result = "Too much!");
      }
    },
  },
  methods: {
    addFive() {
      this.ammount += 5;
    },
    addOne() {
      this.ammount += 1;
    },
  },
});

app.mount("#assignment"); // Mounting the app to the div with id 'assignment' in the index.html file
