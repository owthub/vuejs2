var myapp = new Vue({
  el:"#my-app",
  data:{
    x:0,
    y:0
  },
  methods:{
    movefunction : function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    overfunction: function(){
      console.log("This is message due to mouseover");
    },
    outfunction : function(){
      console.log("This is message due to mouseout");
    }
  }
});
