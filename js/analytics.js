import { orders } from "./data.js";

// orders.forEach((order) => {
//   // console.log(order);
// });

const revenue = document.querySelector(".total-price");
const totalOrders = document.querySelector(".total-orders");
const averageOrder = document.querySelector(".average-value");
const uniqueCustomer = document.querySelector(".unique-customers");

let totalPrice = 0;
orders.forEach((order) => {
  order.items.forEach((item) => {
    if (order.status === "completed") {
      totalPrice += item.price * item.quantity;
    }
  });
});

let averageValue = orders.filter((order) => order.status === "completed");
let uniCustomer = orders
  .filter((order) => order.status === "completed")
  .map((order) => order.customer);

revenue.innerText = Number(totalPrice).toLocaleString();
totalOrders.innerText = orders.length;
averageOrder.innerText = Math.round(totalPrice / averageValue.length);
uniqueCustomer.innerText = uniCustomer.length;

// revpercent-res
// avgorder-res
// unqcus-res
// totalorder-res
