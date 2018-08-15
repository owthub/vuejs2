var myapp1 = new Vue({
  el:"#my-app",
  data:{

  },
  methods:{
     btnSubmit: function(){
       //console.log("I am clicked");
       console.log(this.$refs);
       console.log("Name: "+this.$refs.txtname.value);
       console.log("Email: "+this.$refs.txtemail.value);
       console.log("Paragraph: "+this.$refs.para.innerHTML);
     }
  }
});
