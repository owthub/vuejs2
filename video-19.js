Vue.directive('custom-owt', {
  bind: function(el,binding,vnode){
     //console.log(el);  // dom element
     el.style.backgroundColor = "blue"; // style="background-color:"
     el.style.fontSize = "20px";
     el.style.color = "green";
     el.title = "Title is now updated";
     //console.log(binding);  // properties of directive
     //console.log("Value = "+binding.value);
     console.log("Name: "+binding.value.name);
  },
  update: function(object1,object2){
     //console.log("Running");
     var data = JSON.parse(JSON.stringify(object2));
     //console.log(data);
  },
  unbind: function(){

  }
});
//v-on:click.prevent
var myapp1 = new Vue({
  el:"#my-app",
  data:{
     message: "This is custom call"
  },
  methods:{
      updateValue: function(){
        console.log("update...");
        this.message = "Value has been updated now."
      }
  }
});
