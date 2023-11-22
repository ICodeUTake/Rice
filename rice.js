// manual (get your own auth code from database. etc.)

var AuthCode = btoa("cheesecake")
var SendAfterAuth = "https://example.com/authenticated/true/";
var FailSafe = "https://example.com/authenticated/false/FailedAuth/";

// automated

let params = new URLSearchParams(window.location.search);
let authcode = params.get("auth");

if(authcode === AuthCode){
  window.location.href = SendAfterAuth;
}else{
  window.location.href = FailSafe;
}

console.log("Rice 1.0.0");

// rice@1.0.0 by ICUT || Simple authentication system I decided to make for some reason. Low bytes but good auth I think.
