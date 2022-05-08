var micArr = [];
var totalCost = 0;
var numberInCart = 0;
window.onload = function () {
  if (localStorage.hasOwnProperty("moviesInCart")) {
    micArr = JSON.parse(localStorage.getItem("moviesInCart"));
  } else if (localStorage.hasOwnProperty("totalCost")) {
    totalCost = localStorage.getItem("totalCost");
  } else if (localStorage.hasOwnProperty("numberInCart")) {
    numberInCart = localStorage.getItem("numberInCart");
  }
  $("#cart-item-num").text(`${numberInCart}`);
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

  if (localStorage.hasOwnProperty("moviesInCart")) {
    let el = `<div class="me-auto"><h3>No movies in cart yet.</h3></div>`;
    $("#cart-container").append(el);
  }
};

function isDuplicate(obj, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) return true;
  }
  return false;
}

$("body").on("click", "#btnBook-1", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[0], micArr)) {
    let tempC = totalCost + movObjArr[0].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[0].tickets_in_cart;
    movObjArr[0].ticket_price = tic + 1;
    micArr.push(movObjArr[0]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    let tempC = totalCost + movObjArr[0].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

$("body").on("click", "#btnBook-2", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[1], micArr)) {
    let tempC = totalCost + movObjArr[1].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[1].tickets_in_cart;
    movObjArr[1].ticket_price = tic + 1;
    micArr.push(movObjArr[1]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    let tempC = totalCost + movObjArr[1].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

$("body").on("click", "#btnBook-3", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[2], micArr)) {
    let tempC = totalCost + movObjArr[2].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[2].tickets_in_cart;
    movObjArr[2].ticket_price = tic + 1;
    micArr.push(movObjArr[2]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    let tempC = totalCost + movObjArr[2].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

$("body").on("click", "#btnBook-4", function () {
  micArr = micArr || [];
  if (isDuplicate(movObjArr[3], micArr)) {
    let tempC = totalCost + movObjArr[3].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
    return;
  } else {
    let tic = movObjArr[3].tickets_in_cart;
    movObjArr[3].ticket_price = tic + 1;
    micArr.push(movObjArr[3]);
    localStorage.setItem("moviesInCart", JSON.stringify(micArr));
    let tempC = totalCost + movObjArr[3].ticket_price;

    localStorage.setItem("totalCost", tempC);

    numberInCart++;

    localStorage.setItem("numberInCart", numberInCart);
    $("#cart-item-num").text(`${numberInCart}`);
  }
});

function clearStorage() {
  localStorage.clear();
}

function test() {
  console.log(JSON.parse(localStorage.getItem("moviesInCart")));
  console.log(localStorage.getItem("totalCost"));
  console.log(localStorage.getItem("numberInCart"));
}
