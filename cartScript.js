let tMovArr = [];
let tTotal = 0;
let numTickets = 0;
var count = 0;
window.onload = function () {
  tMovArr = tMovArr || [];
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

  let fo = "<tr>" + "<td></td>" + "<td></td>" + `<td><strong>Total:</strong></td>` + `<td style="color:Tomato;" id="cartTotal">R${tTotal}</td>` + "</tr>";

  $("#cart-foot").append(fo);
  console.log(tMovArr);
};

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

$(document).on("click", "#decQua", function () {
  let rowIndex = $(this).closest("td").parent()[0].sectionRowIndex;
  numTickets = numTickets - 1;
  localStorage.setItem("numberInCart", numTickets);
  $("#cart-item-num").text(localStorage.getItem("numberInCart"));
  let tempQ = tMovArr[rowIndex].tickets_in_cart;
  tempQ--;
  if (tempQ === 0) {
    let delTot = tMovArr[rowIndex].ticket_price;
    tTotal = tTotal - delTot;
    localStorage.setItem("totalCost", tTotal);
    $("#cartTotal").text(`R${localStorage.getItem("totalCost")}`);
    $(`#subTot-${rowIndex}`).text("R" + parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart) * parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].ticket_price));
    tMovArr.splice(rowIndex, 1);
    localStorage.setItem("moviesInCart", JSON.stringify(tMovArr));
    $(this).closest("tr").remove();
  } else {
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

$(document).on("click", "#incQua", function () {
  let rowIndex = $(this).closest("td").parent()[0].sectionRowIndex;
  numTickets++;
  localStorage.setItem("numberInCart", numTickets);
  $("#cart-item-num").text(localStorage.getItem("numberInCart"));
  let tempQ = tMovArr[rowIndex].tickets_in_cart;
  tempQ++;
  let sumTot = tMovArr[rowIndex].ticket_price;
  tTotal = parseInt(tTotal) + parseInt(sumTot);
  localStorage.setItem("totalCost", tTotal);
  $("#cartTotal").text(`R${localStorage.getItem("totalCost")}`);
  tMovArr[rowIndex].tickets_in_cart = tempQ;
  localStorage.setItem("moviesInCart", JSON.stringify(tMovArr));
  $(`#cartQ-${rowIndex}`).text(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart);
  $(`#subTot-${rowIndex}`).text("R" + parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].tickets_in_cart) * parseInt(JSON.parse(localStorage.getItem("moviesInCart"))[rowIndex].ticket_price));
});
