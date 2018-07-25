var myapp = new Vue({
  el:"#my-app",
  data:{
    counter: 0
  },
  methods:{
    incrementby1: function(){
      this.counter++;
    },
    submitClick: function(){
      console.log("clicking");
    },
    parentClass: function(){
      console.log("Parent Class...");
    },
    btnClick: function(){
        console.log("Button Click...");
    }
  }
});
