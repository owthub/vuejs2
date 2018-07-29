var myapp = new Vue({
  el:"#my-app",
  data:{
    isActive:true
  },
  methods:{
     toggleClass: function(){
        this.isActive = !this.isActive;
     }
  }
});
