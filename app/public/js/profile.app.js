var app = new Vue({
  el: '#userProfile',
  data:{
    userName:'John Doe',
    userEmail:'jdoe@iu.edu',
    userImgLarge:'',
    userImgThumb:'',
    userNat:'',
    userDate:'',
    userAge:'',

  },
  created(){
    this.fetchUser();
  },

  methods:{
    fetchUser: function() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userName = userData.name.first + " " + userData.name.last;
        this.userNat = userData.nat;
        this.userEmail = userData.email;
        this.userDate = userData.dob.date;
        this.userAge = userData.dob.age;
        this.userImgLarge = userData.picture.large;
        this.userImgThumb = userData.picture.thumbnail;
      })
      .catch((error)=>{
        console.error('Error:' ,error);
        fetch('./JSON/randomuser.me-sample.json')
        .then(response => response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userName = userData.name.first + " " + userData.name.last;
          this.userNat = userData.nat;
          this.userEmail = userData.email;
          this.userDate = userData.dob.date;
          this.userAge = userData.dob.age;
          this.userImgLarge = userData.picture.large;
          this.userImgThumb = userData.picture.thumbnail;
        })
      });
    },
      formatDate(d){
        return moment(d).format("dddd,MMMM Do YYYY h:mm:ss a  (Z)");
      }
    }
  })
