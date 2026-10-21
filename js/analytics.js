import { orders } from "./data.js";

const revenue = document.querySelector(".total-price");
const totalOrders = document.querySelector(".total-orders");
const averageOrder = document.querySelector(".average-value");
const uniqueCustomer = document.querySelector(".unique-customers");
const productDetails = document.querySelector(".products-details");

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

// const laptopTotalRevenue = orders.reduce((total, order, index) => {

//   if (order.status === "completed") {
//     order.items.forEach((item) => {
//       if (item.name === "Laptop") {
//         total += item.price * item.quantity;
//       }
//     })
//   };

//   return total;

// }, 0)

// console.log(laptopTotalRevenue)

const productStats = orders.reduce((stats, order) => {
  if (order.status !== "completed") {
    return stats;
  }

  order.items.forEach((item) => {
    if (!stats[item.name]) {
      stats[item.name] = {
        quantity: 0,
        revenue: 0
      };
    }

    stats[item.name].quantity += item.quantity;
    stats[item.name].revenue += item.price * item.quantity;
  });

  return stats;
}, {});

const products = Object.entries(productStats);

const productRows = products.map(([name, data], index) => {
  return `
        <div class="grid grid-cols-4 text-xs py-1 border-b border-[#263050]">
            <div>
            <p class="text-[#B8C5DA]">${index + 1}</p>
            </div>
            <div>
            <p class="text-[#B8C5DA]">${name}</p>
            </div>
            <div class="">
            <p class="text-[#B8C5DA]">${data.quantity}</p>
            </div>
            <div class="flex justify-end">
            <p class="text-[#B8C5DA]">$${data.revenue.toLocaleString()}</p>
            </div>
        </div>
    `;
}).join("");

document.querySelector(".products-details").innerHTML += productRows;




// revpercent-res
// avgorder-res
// unqcus-res
// totalorder-res
