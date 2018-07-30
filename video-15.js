var myapp2 = new Vue({
  el:"#my-app-2",
  data:{
      author: "Sanjay"
  },
  methods:{
      secondApp: function(){
        return "This is second instance";
      }
  },
  computed:{
    fullname: function(){
      return this.author;
    }
  }
});

var myapp1 = new Vue({
  el:"#my-app-1",
  data:{
    title:"Online Web Tutor",
    author:myapp2.author
  },
  methods:{
    secondApp: function(){
      return "This is first instance";
    },
    thirdAppFn : function(){
      return myapp2.secondApp()
    },
    accessComputedApp2: function(){
      return myapp2.fullname;
    }
  }
});
