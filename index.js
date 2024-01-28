

// document.getElementById("login-btn").addEventListener("click", function() {
//   let email = document.getElementById("username").value;
//   let password = document.getElementById("password").value;

//   axios.post('http://reqres.in/api/login', {
//     email: email,
//     password: password
//   })
//   .then(function(response) {
//     let token = response.data.token;
//     localStorage.setItem("token", token);
//     console.log("Token received:", token);

//     createNewUser()
//       .catch(error => {
//         console.error(error);
//         alert(error.response.data.error);
//       });
//   })
//   .catch(error => {
//     console.error(error);
//     alert("Login failed. Please check your credentials and try again.");
//   });
// });
