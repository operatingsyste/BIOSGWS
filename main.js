console.log('Hello World!');


function openServer(){
  window.open('https://servers.operatingsyste.repl.co');
}

function GWS2(){
  window.open('https://gws2.operatingsyste.repl.co/index1.html');
}

function GWS(){
  window.open('https://gws.operatingsyste.repl.co/index1.html');
}

function GWSHOLISUPER() {
  window.open('https://gwsholisuper.operatingsyste.repl.co');
}

function save(){
  var getOs = document.getElementById('os').value;
  if (getOs === 'GWS'){
    //alert('BOOTING... GWS ');
    GWS()
  }
  else if(getOs === 'GWS 2'){
   // alert('GWS 2');
    GWS2();
  }
  else if (getOs === 'GWS HOLI SUPER'){
    //alert('GHS');
    GWSHOLISUPER();
  }
}

function gws(){
  var getOs = document.getElementById('os').value = 'GWS';
}

function gws2(){
  var getOs = document.getElementById('os').value = 'GWS 2';
}
function gwsholisuper() {
  var getOs = document.getElementById('os').value = 'GWS HOLI SUPER';
}