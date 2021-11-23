//display login popup, help from https://www.w3schools.com/js/js_popup.asp
function displayLogin(){
  let text;
  let username = prompt("NCF Email: ", "someone@ncf.edu");
  let password = prompt("Password: ", "*******");
  if(username != null){
  	//used https://careerkarma.com/blog/javascript-go-to-url/ 
  	window.location.assign('account.html');  
  }


  }
//  if (username == null || username == "") {
 //   text = "Please Enter your NCF Email .";
 // } 
  

