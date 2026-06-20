function randomUser(){
    fetch("https://randomuser.me/api/")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var user=data.results[0];
            var fullname=user.name.title+" "+user.name.first+" "+user.name.last;
       document.getElementById("userName").innerText =
       fullname;
    document.getElementById("userGender").innerText =
        user.gender;
    document.getElementById("userImage").src =
        user.picture.large;
})
.catch(function(err){
console.log("error:",err);
})
}
