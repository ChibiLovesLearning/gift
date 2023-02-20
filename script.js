async function myfunc(){
  let response = await fetch("data.json");
  data = await response.json();
  let div = document.querySelector(".card");
let btn = document.querySelector("#intro");
let count = 0;
  let randArr = [];

btn.onclick = () => {
  if(document.querySelector("#dp")){
    document.querySelector("#dp").remove();
  }
  
  let rand = Math.floor(Math.random() * 30);
  while(randArr.includes(rand) && count < 30){
    rand = Math.floor(Math.random() * 30);
  }
  btn.innerHTML = "More";
  let img1 = document.createElement("img");
  img1.className = "character";
  img1.src=data[rand].image;
  let p1 = document.createElement("p");
  p1.className = "bubble user";
  p1.innerHTML = "Hi!";
  div.appendChild(p1);
  let p2 = document.createElement("p");
  p2.className = "bubble bot";
  p2.style.visibility = "hidden";
  div.appendChild(p2);
  div.appendChild(img1);
  p2.innerHTML = data[rand].name + " is typing";
  let interval = setInterval(function() {
    p2.innerHTML += ".";
    p2.style.visibility = "visible";
  }, 500);
  setTimeout(function() {
    p2.innerHTML = data[rand].quote;
    clearInterval(interval);
  }, 2000);
  if(count == 30){
    btn.innerHTML = "That's all. Hope you have a great birthday!"
    btn.disabled = true;
  }
  ++count;
  randArr.push(rand);
}
}

myfunc();
