import { menuArray } from "./data.js";

let orderArray = []
let totalPrice = 0
const totalPriceEl = document.getElementById("total-price")
const formContainer = document.getElementById("form-container")




document.getElementById("total").style.display = "none"

document.addEventListener("click", function(e) {
  if (e.target.dataset.food) {
    handleFoodClick(e.target.dataset.food)
  } else if (e.target.dataset.remove) {
handleRemoveClick(e.target.dataset.remove)
  } else if (e.target.id === "complete-btn") {
    completeOrder()
    
  }
})


function handleFoodClick(foodItem) {
let targetFoodObj = menuArray.filter(function (food) {
  return foodItem == food.id
})[0]

if (!orderArray.includes(targetFoodObj)) {
orderArray.push(targetFoodObj)
targetFoodObj.quantity = 1
} else {
  targetFoodObj.quantity++
}

totalPrice += targetFoodObj.price
totalPriceEl.textContent = `$${totalPrice}`

if (menuArray.length > 0) {
  document.getElementById("total").style.display = "flex"
  document.getElementById("total").classList.remove("hidden")
  document.getElementById("order").classList.remove("hidden")
}

document.getElementsByClassName("food-quantity").textContent = `X${targetFoodObj.quantity}`
document.getElementById("complete-btn").classList.remove("hidden")
document.getElementById("section").classList.remove("hidden")
render()



}

function handleRemoveClick(item) {
let targetFoodObj = orderArray.filter(function(itemRemove) {
  return item == itemRemove.id
})[0]

if(targetFoodObj.quantity >1) {
  targetFoodObj.quantity--
} else {
  let itemIndex = orderArray.indexOf(targetFoodObj)
  orderArray.splice(itemIndex, 1)
}
totalPrice -= targetFoodObj.price
totalPriceEl.textContent = `$${totalPrice}`

if (orderArray.length < 1) {
  document.getElementById("complete-btn").classList.remove("hidden")
  document.getElementById("section").classList.remove("hidden")
}
render()
}

function completeOrder() {
  formContainer.style.display = "block"
}

function orderHtml() {
  let orderHtmlLayout = "";

  menuArray.forEach(function (order) {
    orderHtmlLayout += `  <div class="menu-container" id="menu-container">
    <div class="left-div">
    <div class="images">
    <span class="emoji">${order.emoji}</span>
    </div>
    <div class="menu-text">
    <p>${order.name}</p>
    <p class="sub-text">${order.ingredients}</p>
    <p>$${order.price}<p>
    </div>
    </div>
    <div class="add-btn">
    <button data-food="${order.id}" class="btns">+</button>
    </div>
    </div>
    <hr>`;
  });

  return orderHtmlLayout;
}

function getOrderHtml() {

  let orderHtml = ``
  orderArray.forEach(function (item) {
      orderHtml +=
          `
       
                    <div class="order-item">
                      <div class="order-item-content1">
                          <p class="food-name">${item.name}</p>
                          <button class="remove-from-order" data-remove="${item.id}">remove</button>
                          <p class="food-quantity">X${item.quantity}</p>
                      </div>
                    
                      <div class="order-item-content2">
                          <p class="food-price">$${item.price * item.quantity}</p>
                      </div>
                      </div>
    
     `
  })

  return orderHtml
}


function render() {
  document.getElementById('menu-content').innerHTML = orderHtml()
  document.getElementById('order-display').innerHTML = getOrderHtml()
}

render()

