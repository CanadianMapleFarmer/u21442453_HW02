// Variable initialization.
var micArr = [];
var totalCost = 0;
var numberInCart = 0;
// onload used to load data and dynamically load webpage.
window.onload = function () {
  // Data loaded from existing localStorage if exists.
  if (localStorage.hasOwnProperty("moviesInCart")) {
    micArr = JSON.parse(localStorage.getItem("moviesInCart"));
  }
  if (localStorage.hasOwnProperty("totalCost")) {
    totalCost = localStorage.getItem("totalCost");
  }
  if (localStorage.hasOwnProperty("numberInCart")) {
    numberInCart = localStorage.getItem("numberInCart");
    $("#cart-item-num").text(`${numberInCart}`);
  }
  $("#cart-item-num").text(`${numberInCart}`);
  // Data read from movObjArr in the movieData.js file and loaded into home.html
  let el = "";
  for (let i = 0; i < movObjArr.length; i++) {
    el +=
      `<div class="col-xs-1">` +
      `<div class="card h-100" style="margin-top: 10px">` +
      `<div class="card-header">` +
      `Cinema ${movObjArr[i].cinema_number}` +
      `</div>` +
      `<div class="card-body d-flex flex-column">` +
      `<img class="card-img" src="${movObjArr[i].poster_url}">` +
      `<h3 style="margin-top: 10px">${movObjArr[i].title}</h3>` +
      `<p style="margin-top: 10px">${movObjArr[i].description}</p>` +
      `<div class="mt-auto d-flex align-self-end">` +
      `<h3>R${movObjArr[i].ticket_price}</h3>` +
      `</div>` +
      `</div>` +
      `<div class="card-footer">` +
      `<div class="btn-group-vertical">` +
      `<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#detailModal-${movObjArr[i].id}">Show Details</button>` +
      `<button type="button" class="btn btn-success" style="margin-top: 10px" id="btnBook-${movObjArr[i].id}">BOOK TICKET</button>` +
      `</div>` +
      `</div>` +
      `</div>`;
    el += `</div>`;
  }

  $("#movie_stand").append(el);

  // Modal data is loaded in the home.html for later use.
  let mo = "";
  for (let i = 0; i < movObjArr.length; i++) {
    mo +=
      `<div class="modal" id="detailModal-${movObjArr[i].id}">` +
      `<div class="modal-dialog">` +
      `<div class="modal-content">` +
      `<div class="modal-header">` +
      `<h3 class="modal-title">${movObjArr[i].title}</h3>` +
      `<button type="button" class="btn-close" data-bs-dismiss="modal"></button>` +
      `</div>` +
      `<div class="modal-body">` +
      `<strong>Title:</strong> ${movObjArr[i].title}<br><br>` +
      `<strong>Director/s:</strong> ${movObjArr[i].director}<br><br>` +
      `<strong>Release Year:</strong> ${movObjArr[i].release_year}<br><br>` +
      `<strong>Runtime:</strong> ${movObjArr[i].runtime} minutes<br><br>` +
      `</div>` +
      `</div>` +
      `</div>`;
    mo += `</div>`;
  }

  $("#modals").append(mo);
};

// Duplicate checker for movie objects before store in localStorage as an objArr
function isDuplicate(obj, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) return true;
  }
  return false;
}

// button listeners, used due to dynamic loading of webpage.
$("body").on("click", "#btnBook-1", function () {
  micArr = micArr || [];
  // Data is loaded into localStorage and cart icon number in navbar is updated
  if (isDuplicate(movObjArr[0], micArr)) {
    totalCost += movObjArr[0].ticket_price;
    localStorage.setItem("totalCost", totalCost);

    micArr[0].tickets_in_cart += micArr[0].tickets_in_cart;
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));

    numberInCart++;
    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    // Data is loaded into localStorage and cart icon number in navbar is updated
    let tic = movObjArr[0].tickets_in_cart;
    movObjArr[0].tickets_in_cart = tic + 1;
    micArr.push(movObjArr[0]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    totalCost += movObjArr[0].ticket_price;

    localStorage.setItem("totalCost", totalCost);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

$("body").on("click", "#btnBook-2", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[1], micArr)) {
    totalCost += movObjArr[1].ticket_price;
    localStorage.setItem("totalCost", totalCost);

    micArr[1].tickets_in_cart += micArr[1].tickets_in_cart;
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));

    numberInCart++;
    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[1].tickets_in_cart;
    movObjArr[1].tickets_in_cart = tic + 1;
    micArr.push(movObjArr[1]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    totalCost += movObjArr[1].ticket_price;

    localStorage.setItem("totalCost", totalCost);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

$("body").on("click", "#btnBook-3", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[2], micArr)) {
    totalCost += movObjArr[2].ticket_price;
    localStorage.setItem("totalCost", totalCost);

    micArr[2].tickets_in_cart += micArr[2].tickets_in_cart;
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));

    numberInCart++;
    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[2].tickets_in_cart;
    movObjArr[2].tickets_in_cart = tic + 1;
    micArr.push(movObjArr[2]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    totalCost += movObjArr[2].ticket_price;

    localStorage.setItem("totalCost", totalCost);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

$("body").on("click", "#btnBook-4", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[3], micArr)) {
    totalCost += movObjArr[3].ticket_price;
    localStorage.setItem("totalCost", totalCost);

    micArr[3].tickets_in_cart += micArr[3].tickets_in_cart;
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));

    numberInCart++;
    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[3].tickets_in_cart;
    movObjArr[3].tickets_in_cart = tic + 1;
    micArr.push(movObjArr[3]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    totalCost += movObjArr[3].ticket_price;

    localStorage.setItem("totalCost", totalCost);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

// troubleshooting functions used for localStorage (if need be)
function clearStorage() {
  localStorage.clear();
}

function test() {
  console.log(JSON.parse(localStorage.getItem("moviesInCart")));
  console.log(localStorage.getItem("totalCost"));
  console.log(localStorage.getItem("numberInCart"));
}
