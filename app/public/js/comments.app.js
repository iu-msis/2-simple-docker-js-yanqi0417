var App = new Vue ({
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

createComment( ){
  fetch('api/comments/create.php', {
      method: 'POST',
    body: JSON.stringify(this.newcomments),
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  })
  .then( response => response.json() )
  .then( json => {
    console.log("Returned from post:", json);
    this.comments = json;
    this.newcomments = this.newCommentData();
  });

  console.log("creating (POSTing)...!");
  console.log(this.newcomments);
},
newCommentData() {
  return {
    id: '',
    commentText: ''
   }
  }
},
created(){
  this.fetchUser();

}
});
