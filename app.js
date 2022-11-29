import { menuArray } from "./data.js";

const menu = document.getElementById("menu")
const order = document.getElementById("order")


function orderHtml() {
    let orderHtmlLayout = ""

    menuArray.forEach(function(order) {

        orderHtmlLayout += `  <div class="menu-container" id="menu-container">
        <div class="left-div">
          <div class="images">
            <span>${order.emoji}</span>
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
    <hr>`
    })

return orderHtmlLayout
}

function render() {
    document.getElementById("menu-content").innerHTML = orderHtml()

}

render()
