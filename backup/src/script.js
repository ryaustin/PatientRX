var patients = [];
var address = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a";

function submit() {
  console.log("New patient is now being submitted");
    let id = document.getElementById('id').value;
  let fn = document.getElementById('fn').value;
  let ln = document.getElementById('ln').value;
    let dob = document.getElementById('dob').value;
  let bt = document.getElementById('bt').value;
  let eid = document.getElementById('eid').value;
  let iid = document.getElementById('iid').value;
  address = address + id;
  var patient = {
    address:address,
  id:id,
  firstName:fn,
   lastName:ln,
   dob:dob,
    bloodType:bt,
    employerId:eid,
    insurerId:iid
 }
  patients.push(patient);
  alert("Hi " + fn + " You have successfully recorded your information at address " + address + " Please keep your address written down in a secure location");
  console.log("Wallet address: " + address);
}

function retreive() {
  let walletAddress = String(document.getElementById('walletaddress').value);
  for (var i=0; i <= patients.length; i++) {
    console.log(i);
    if(patients[i].address == walletAddress) {
      console.log("The Patient is: " + patients[i]);
       alert("The Patient is: " + 
             patients[i].firstName + " " + patients[i].lastName)
      
      
      
      
      ;
      
       }
  }
}