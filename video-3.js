var myapp = new Vue({
  el:"#my-app",
  data:{
    name:"Online Web tutor",
    playlist:"VueJs"
  },
  methods:{
    run : function(message,name){
      return "I am running "+message+" name: "+name;
    },
    welcome: function(dayTime){
      return "Good "+dayTime;
    },
    valueAccess: function(){
       return this.name+"  "+this.playlist;
    }
  }
});
