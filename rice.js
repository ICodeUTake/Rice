// manual (get your own auth code from database. etc.)

var AuthCode = btoa("cheesecake")
var SendAfterAuth = "https://example.com/authenticated/true/";
var FailSafe = "https://example.com/authenticated/false/FailedAuth/";

// automated

let params = new URLSearchParams(window.location.search);
let authcode = params.get("auth");

console.log(params);
console.log(authcode);
console.log(window.location.search);

if(authcode === AuthCode){
  console.log("valid");
  window.location.href = SendAfterAuth;
}else{
  let alert = document.createElement("h1");
  alert.innertText = "invalid.";
  alert.appendChild(document.body);
  console.log("invalid");
  window.location.href = FailSafe;
}

console.log("Rice 1.0.0");

// rice@1.0.0 by ICUT || Simple authentication system I decided to make for some reason. Low bytes but good auth I think.
