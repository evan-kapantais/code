(document.onload = () => {
  
    const inputs = document.getElementsByTagName("input");
    const submit = document.querySelector(".btn");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", () => handleInput(i));
  }

  function handleInput(index) {

    if(inputs[index].value.length == 1) {

      if (index  == inputs.length - 1) {
        submit.focus();
        return;
      }

      inputs[index].disabled = true;
      inputs[index + 1].focus();
    }

    if (event.keyCode == "8") {
      console.log("backspace");
    }
  }

})();