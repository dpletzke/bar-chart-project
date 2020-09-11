let button = $("#button");
button.css("background-color","orange");
let chorus = $("#chorus");

button.on("click", who);



  function who() {
    chorus.text((i, text) => text + 'who?');
  }


