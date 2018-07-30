var myapp = new Vue({
  el:"#my-app",
  data:{
      students:["Sanjay","Mahesh","Rahul","Rakesh","Adarsh"],
      teachers:[
        {name:"Teacher 1",subject:"Subject 1",location:{ street:"Street 1",city:"City 1" }},
        {name:"Teacher 2",subject:"Subject 2",location:{ street:"Street 2",city:"City 2" }},
        {name:"Teacher 3",subject:"Subject 3",location:{ street:"Street 3",city:"City 3" }},
        {name:"Teacher 4",subject:"Subject 4",location:{ street:"Street 4",city:"City 4" }}
      ]
  },
  methods:{

  }
});
