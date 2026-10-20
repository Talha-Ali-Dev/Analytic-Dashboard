import { orders } from "./data.js";

// orders.forEach((order) => {
//   // console.log(order);
// });

const revenue = document.querySelector(".total-price");
const totalOrders = document.querySelector(".total-orders");

let totalPrice = 0;
orders.forEach((order) => {
  order.items.forEach((item) => {
    if (order.status === "completed") {
      totalPrice += item.price * item.quantity;
    }
  });
});
revenue.innerText = Number(totalPrice).toLocaleString();
totalOrders.innerText = orders.length;


// revpercent-res
// total-orders
// average-value
// avgorder-res
// unique-customers
// unqcus-res
// totalorder-res
