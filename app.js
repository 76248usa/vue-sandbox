new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue ninja!",
    name: "Elsabe",
    url: "youtube.com",
    classes: ["one", "two"],
    wage: 10,
    coords: {
      x: 0,
      y: 0
    },
    showName: true,
    showAge: true,
    items: ["mushroom", "green shells", "red shells", "bananas", "star"],
    ninjas: [
      { name: "Crystal", age: 30, belt: "black" },
      { name: "Brenden", age: 31, belt: "yellow" },
      { name: "Natalia", age: 3, belt: "green" },
      { name: "Alta", age: 45, belt: "black" }
    ]
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}`;
    },
    changeWage(amount) {
      this.wage += amount;
    },
    logEvent(e) {
      console.log(e);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName(e) {
      //console.log(e.target.value);
      this.name = e.target.value;
    },
    logMessage(e) {
      console.log("hello world");
    },
    toggleName() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
});
