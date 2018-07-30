var myapp1 = new Vue({
  el:"#my-app",
  data:{
     fname:"",
     lname:"",
     channelName:"OWT"
  },
  methods:{

  },
  computed:{
    fullname: {
      get: function(){  // getter function of fullname
        return this.fname+" "+this.lname;
      },
      set: function(){  // setter function of fullname
         //console.log("Set function is running");
         this.channelName = "Updated OWT"
      }
    }
  }
});
