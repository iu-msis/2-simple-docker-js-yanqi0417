waitingApp = new Vue ({
  el: '#randomComments',
  data: {
    comments: [{
      id: '',
      commentText: ''
    }],
    newcomments: {
    id: '',
    commentText: ''
  }
  },
    methods:{
      fetchUser(){
        fetch('api/comments/')
        .then(response => response.json())
        .then(json => {
          this.comments=json;
          console.log(this.comments);
        });
    },
createComment(){
  fetch('api/comments/insertcomments.php', {
      method: 'POST',
    body: JSON.stringify(this.newcomment),
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  })
  .then( response => response.json() )
  .then( json => {
    console.log("Returned from post:", json);
    this.comments.push(json[0]);
    this.newcomment = this.newUserData();
  });
  console.log("creating (POSTing)...!");
  console.log(this.newcomment);
},
newCommentData() {
  return {
    id: '',
    commenttext: ''
   }
  }
},
created(){
  this.fetchUser();

}
});
