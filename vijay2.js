 console.log('SCRIPT START')
 console.log('Declare testable functions......................')
 function area(x) {
     if(x<0)
     {
       alert('Area cannot be negative')
     }
     else{
        return x * x;
     } 
     }
console.log('Defined area=' + area)
console.log('Declare event listeners .......................')
 window.addEventListener('load', (event) => {
   console.log('  Starting initialization ')
   if (localStorage.getItem('guest')) {
     document.getElementById('guest').value = localStorage.getItem('guest')
     console.log(`Stored guest = ${localStorage.guest}`)
   }
   if (localStorage.getItem('sideLength')) {
     document.getElementById('sideLength').value = parseInt(localStorage.sideLength)
     console.log(`Stored sideLength = ${localStorage.number1}`)
   }
   console.log(' Finished initialization')
 })
 document.getElementById('clicker').addEventListener('click', () => {
   console.log('  Starting clicker click handler')
   const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
   const s = document.getElementById('guest').value
   console.log('s=' + s)
   const i = parseInt(document.getElementById('sideLength').value)
   console.log('i=' + i)
   const ct = origCount + 1
   const ans = s + ', your area is ' + area(i) + '. This has been run ' + ct + ' times.'
   document.getElementById('result').innerHTML = ans
   localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
   localStorage.setItem('guest', s)
   localStorage.setItem('sideLength', i)
   console.log('  Finished clicker click handler')
 })
 document.getElementById('wiper').addEventListener('click', () => {
   console.log('  Starting wiper click handler')
   localStorage.removeItem('countOfClicks')
   localStorage.removeItem('guest')
   localStorage.removeItem('sideLength')
   console.log('  Finished wiper click handler - localStorage entries removed')
 })

 function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =  this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
