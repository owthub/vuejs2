Vue.directive("owt",function(el,binding){
  //console.log(el);
  //console.log(binding);
  var dir_arg = binding.arg;
  if(dir_arg=="red"){
     el.style.backgroundColor = "red";
     el.style.color = "white";
     el.style.fontSize = "20px";
  }
  if(dir_arg=="blue"){

    var mod = binding.modifiers.change;
    if(mod == true){
      el.style.backgroundColor = "orange";
      el.style.color = "white";
      el.style.fontSize = "20px";
    }else{
      el.style.backgroundColor = "blue";
      el.style.color = "white";
      el.style.fontSize = "20px";
    }

  }
});

var myapp1 = new Vue({
  el:"#my-app",
  data:{
    channelName : "Online Web Tutor"
  },
  methods:{

  }
});
