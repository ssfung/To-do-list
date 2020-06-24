const submitBox = document.querySelector("input[type=submit]");
const h1 = document.querySelector("h1");
const list = document.querySelector('ul');
const li = document.querySelector("li");


const count = () => {
  const numOfItems = list.children.length
   h1.textContent =  `Tasks : ${numOfItems} `;
  if (numOfItems ===0){
    return h1.textContent= "No more tasks 😃‼"
  }
}

const taskInput = () => {
  event.preventDefault();
  let input = document.querySelector("input[type=text]").value
  let newItem = document.createElement("li");
  newItem.textContent = input
  if (newItem.textContent.length < 5){
    return alert ("Tasks need to be 5 or more characters");
  }
  list.append(newItem);
  count()
  document.getElementById("page-form").reset();
  newItem.addEventListener("dblclick", removeInput);
}

const removeInput = () => {
  list.removeChild(event.target);
  count()
}


submitBox.addEventListener("click", taskInput);

