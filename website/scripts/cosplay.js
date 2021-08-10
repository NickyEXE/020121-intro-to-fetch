document.getElementById("dog-button").addEventListener("click", addDog)

// function(){
//   console.log("woof")
// }

function addDog(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(appendDog)
  .catch(res => console.log("OH MY AN ERROR!!!", res))
}

function appendDog(response){
  const dogUrl = response.message
  document.querySelector(".dogs").innerHTML += `<div><img src=${dogUrl} alt="DOG!"/></div>`
}
