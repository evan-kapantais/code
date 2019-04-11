(document.onload = () => {
  console.clear();
  
    const inputs = document.getElementsByTagName("input");
    const submit = document.querySelector(".btn");
    const card = document.querySelector(".container");

    let theCode = [];
  
    card.addEventListener("click", handleClick);

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", () => handleInput(i));
  }

  function handleInput(index) {

    if(inputs[index].value.length == 1) {

      if (index < inputs.length - 1) {

        theCode.push(inputs[index].value);
        inputs[index].disabled = true;
        inputs[index + 1].disabled = false;
        inputs[index + 1].focus();

      } else {

        theCode.push(inputs[index].value);
        inputs[index].disabled = true;
        submit.addEventListener("click", function(){
          alert(theCode.join(" - "));
          });
        submit.focus();
      }      
      
    } else {
      inputs[index].value = inputs[index].value.slice(0, 1);
    }

    if (event.keyCode == "8") {

      if (index == 0) {
        return;
      }

      inputs[index].disabled = true;
      inputs[index - 1].value = "";
      inputs[index - 1].disabled = false;
      inputs[index - 1].focus();
    }
  }
  
  function handleClick() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "") {
        inputs[i].focus();
      }
    }
  } 
})();
