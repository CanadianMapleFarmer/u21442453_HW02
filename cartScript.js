// Variable initialization.
let tMovArr = [];
let tTotal = 0;
let numTickets = 0;
var count = 0;
// onload used to load data and dynamically load webpage.
window.onload = function () {
  // Data loaded from existing localStorage if exists.
  tMovArr = tMovArr || []; //had some issues with null references so this was a safety net
  if (localStorage.hasOwnProperty("moviesInCart")) {
    tMovArr = JSON.parse(localStorage.getItem("moviesInCart"));
  } else {
    $("#cart-container").append(`<h2 class="me-auto">No items in cart yet.</h2>`);
  }
  if (localStorage.hasOwnProperty("totalCost")) {
    tTotal = localStorage.getItem("totalCost");
  }
  if (localStorage.hasOwnProperty("numberInCart")) {
    numTickets = localStorage.getItem("numberInCart");
    $("#cart-item-num").text(`${numTickets}`);
  } else {
    $("#cart-item-num").text("0");
  }
  // Data read from localStorage and loaded into cart.html table
  let el = "";
  for (let i = 0; i < tMovArr.length; i++) {
    el +=
      "<tr>" +
      "<td>" +
      `<i class="del fa-solid fa-trash-arrow-up" style="color:Tomato; cursor:pointer;" id="delIco"></i>${tMovArr[i].title}` +
      "</td>" +
      "<td>" +
      `R${tMovArr[i].ticket_price}` +
      "</td>" +
      `<td>` +
      `<i class="fa-solid fa-angle-left" style="color:Blue; cursor:pointer;" id="decQua"></i><span id="cartQ-${i}">${tMovArr[i].tickets_in_cart}</span><i class="fa-solid fa-angle-right" style="color:Blue; cursor:pointer;" id="incQua"></i>` +
      "</td>" +
      `<td id="subTot-${i}">` +
      `R${tMovArr[i].ticket_price * tMovArr[i].tickets_in_cart}` +
      "</td>" +
      "</tr>";
  }

  $("#cart-items").append(el);

  //footer loaded here
  let fo = "<tr>" + "<td></td>" + "<td></td>" + `<td><strong>Total:</strong></td>` + `<td style="color:Tomato;" id="cartTotal">R${tTotal}</td>` + "</tr>";

  $("#cart-foot").append(fo);
};

//icon button used to delete rows
$(document).on("click", "#delIco", function () {
  let rowIndex = $(this).closest("td").parent()[0].sectionRowIndex;
  numTickets = numTickets - tMovArr[rowIndex].tickets_in_cart;
  localStorage.setItem("numberInCart", numTickets);
  $("#cart-item-num").text(localStorage.getItem("numberInCart"));
  let delTot = tMovArr[rowIndex].ticket_price * tMovArr[rowIndex].tickets_in_cart;
  tTotal = tTotal - delTot;
  localStorage.setItem("totalCost", tTotal);
  $("#cartTotal").text(`R${localStorage.getItem("totalCost")}`);
  tMovArr.splice(rowIndex, 1);
  localStorage.setItem("moviesInCart", JSON.stringify(tMovArr));
  $(this).closest("tr").remove();
});

//icon button used to decrease tickets incrementally
$(document).on("click", "#decQua", function () {
  //rowIndex retrieved for tMovArr use
  let rowIndex = $(this).closest("td").parent()[0].sectionRowIndex;
  //decrease numberInCart and cart icon number in navbar.
  numTickets = numTickets - 1;
  localStorage.setItem("numberInCart", numTickets);
  $("#cart-item-num").text(localStorage.getItem("numberInCart"));
  //decrease tickets in the tMovArr object
  let tempQ = tMovArr[rowIndex].tickets_in_cart;
  tempQ--;
  //Check if 0 tickets selected to delete row and Obj for tMovArr
  if (tempQ === 0) {
    //Update localStorage accordingly
    //And update view on webpage
    let delTot = tMovArr[rowIndex].ticket_price;
    tTotal = tTotal - delTot;
    localStorage.setItem("totalCost", tTotal);
    $("#cartTotal").text(`R${localStorage.getItem("totalCost")}`);
    $(`#subTot-${rowIndex}`).text("R" + parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart) * parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].ticket_price));
    tMovArr.splice(rowIndex, 1);
    localStorage.setItem("moviesInCart", JSON.stringify(tMovArr));
    $(this).closest("tr").remove();
  } else {
    //Update localStorage accordingly
    //And update view on webpage
    let delTot = tMovArr[rowIndex].ticket_price;
    tTotal = tTotal - delTot;
    localStorage.setItem("totalCost", tTotal);
    $("#cartTotal").text(`R${localStorage.getItem("totalCost")}`);
    tMovArr[rowIndex].tickets_in_cart = tempQ;
    localStorage.setItem("moviesInCart", JSON.stringify(tMovArr));
    $(`#cartQ-${rowIndex}`).text(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart);
    $(`#subTot-${rowIndex}`).text("R" + parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart) * parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].ticket_price));
  }
});

//icon button used to increase tickets incrementally
$(document).on("click", "#incQua", function () {
  //rowIndex retrieved for tMovArr use
  let rowIndex = $(this).closest("td").parent()[0].sectionRowIndex;
  //increase numberInCart and cart icon number in navbar.
  numTickets++;
  localStorage.setItem("numberInCart", numTickets);
  $("#cart-item-num").text(localStorage.getItem("numberInCart"));
  //increase tickets in the tMovArr object
  let tempQ = tMovArr[rowIndex].tickets_in_cart;
  tempQ++;
  //increase total
  let sumTot = tMovArr[rowIndex].ticket_price;
  tTotal = parseInt(tTotal) + parseInt(sumTot);
  //Update localStorage accordingly
  //And update view on webpage
  localStorage.setItem("totalCost", tTotal);
  $("#cartTotal").text(`R${localStorage.getItem("totalCost")}`);
  tMovArr[rowIndex].tickets_in_cart = tempQ;
  localStorage.setItem("moviesInCart", JSON.stringify(tMovArr));
  $(`#cartQ-${rowIndex}`).text(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart);
  $(`#subTot-${rowIndex}`).text("R" + parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart) * parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].ticket_price));
});
