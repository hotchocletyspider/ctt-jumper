// document.getElementById("time").innerHTML = formatAMPM();

let a;
let time;
let todaysDate;
let expirationTime;

setInterval(() => {
  a = new Date();
  time = a.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
  document.getElementById('time').innerHTML = time;
}, 1000);

a = new Date();
todaysDate = a.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' } )
document.getElementById('todays-date').innerHTML = todaysDate;

expirationTime = new Date(Date.now() + 2 * (60 * 60 * 1000) );
expirationTime = expirationTime.toLocaleString('en-US', { hour: 'numeric',  minute: 'numeric', } )
document.getElementById('expiration-time').innerHTML = expirationTime;