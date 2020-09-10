let button = document.getElementById("button");
let chorus = document.getElementById("chorus");

console.log(button + ' ' + chorus);

if(button){
  button.addEventListener('click', who)
  }
else{
console.log('Why doesn\'t button exist?');
}

  function who() {
    chorus.innerText += 'who?';
  }


