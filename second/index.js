let selectors = document.querySelectorAll("select");
let clickButton = document.querySelector(".button");


function onClick() {
  debugger;
  let result = 0;
  
  for (let i = 0; i < 3 ; i++) {
    let num = +selectors[i].value;
     result += num ;
  }

    const formInput = +document.querySelectorAll("input[name=flexRadioDefault]:checked")[0].value;
  
  let resultNode = document.querySelector(".result");
  
  resultNode.textContent=result + formInput;

}

clickButton.addEventListener("click", onClick);

 