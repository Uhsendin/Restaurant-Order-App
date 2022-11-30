import { menuArray } from "./data.js";

const menu = document.getElementById("menu");
const order = document.getElementById("order");

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
            <p>${order.price}<p>
          </div>
        </div>
        <div class="add-btn">
          <button>+</button>
        </div>
      </div>
    <hr>`;
  });

  return orderHtmlLayout;
}

function orderTotal() {
  let total = "";

  total += `<div class="order-title">Your Order</div>
  <div class="order-container">
  <div class="order-top">
    <div class="items-ordered">
      <p>Pizza <span>remove</span></p>
      <p>Beer <span>remove</span></p>
    </div>
    <div class="price-of-order">
      <p>$14</p>
      <p>$12</p>
    </div>
    </div>
    <hr />
    <div class="order-total">
      <p>Total Price:</p>
      <p>$26</p>
      </div>
      <div class="complete-order-btn">
        <button>Complete Order</button>
      </div>
  </div>`;
  return total;
}

function render() {
  document.getElementById("menu-content").innerHTML = orderHtml();
  document.querySelector("footer").innerHTML = orderTotal();
}

render();
