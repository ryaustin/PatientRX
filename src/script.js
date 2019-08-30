var contract;

$(document).ready(function() {
  initContract();
})

function initContract() {
  web3 = new Web3(web3.currentProvider);
  var address = "0x16aaffd4466c08881290417f9c438dd6206156d3";
  var abi =[
    {
      "constant": false,
      "inputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "firstName",
          "type": "string"
        },
        {
          "name": "lastName",
          "type": "string"
        },
        {
          "name": "dob",
          "type": "string"
        },
        {
          "name": "bloodType",
          "type": "string"
        },
        {
          "name": "employerId",
          "type": "uint256"
        },
        {
          "name": "insurerId",
          "type": "uint256"
        }
      ],
      "name": "createPatient",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "patients",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "firstName",
          "type": "string"
        },
        {
          "name": "lastName",
          "type": "string"
        },
        {
          "name": "dob",
          "type": "string"
        },
        {
          "name": "bloodType",
          "type": "string"
        },
        {
          "name": "employerId",
          "type": "uint256"
        },
        {
          "name": "insurerId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

  contract = new web3.eth.Contract(abi, address);
}

$('#createPatient').click(function() {
  web3.eth.getAccounts().then(function(accounts) {
      let acct = accounts[0];
      console.log("creating patient");
      let id = document.getElementById('id').value;
      let fn = document.getElementById('fn').value;
      let ln = document.getElementById('ln').value;
      let dob = document.getElementById('dob').value;
      let bt = document.getElementById('bt').value;
      let eid = document.getElementById('eid').value;
      let iid = document.getElementById('iid').value;
      loader('yes');
      return contract.methods.createPatient(id,fn,ln,dob,bt,eid,iid).send({from: acct});
  }).then(function(tx) {
      console.log(tx); 
      loader('no');
      alert("Patient was successfully created." + '\n' + 
      "You can authticate this patient with the metamask account they were created with");
  }).catch(function(err) {
      console.log(err);
      loader('no');
  })
})

$('#retreive').click(function() {
  console.log("retreiving data")
  let walletAddress = String(document.getElementById('walletaddress').value);
   contract.methods.patients(walletAddress).call().then((result) => {
    console.log(result);
    alert(
      "Patient id: " +result.id + '\n'+
      "Fullname: " + result.firstName + " " + result.lastName + '\n' +
      "DOB: " + result.dob + '\n' +
      "Bloodtype: " + result.bloodType
    );
  })
})

function loader(x) {
  var loadWheel = document.getElementById("loader");
  if (x == "yes") {
    loadWheel.style.display = "block";
  } else {
    loadWheel.style.display = "none";
  }
}
