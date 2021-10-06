let selectors = document.querySelectorAll("select");
let clickButton = document.querySelector(".button");


function onClick() {
  let result = 0;
  
  for (let i = 0; i < 3 ; i++) {
    let num = +selectors[i].value;
     result += num ;
  }

  let input = +document.querySelectorAll("input").value;
  let resultNode = document.querySelector(".result");
  resultNode.textContent=result + input;

}

clickButton.addEventListener("click", onClick);

 