const tax = 0.18;
const shipping = 15;

document.querySelector(".products").onclick = (e) => {
  window.onload = () => {
    cartTotal();
  };
  if (e.target.className === "fas fa-minus") {
    if (e.target.parentElement.nextElementSibling.innerText > 1) {
      e.target.parentElement.nextElementSibling.innerText--;

      productTotal(
        e.target.parentElement.nextElementSibling.innerText,
        e.target.parentElement.parentElement.parentElement
      );
    } else {
      if (confirm("Produkt wird gelöscht?")) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
        cartTotal();
      }
    }
  } else if (e.target.className === "fas fa-plus") {
    e.target.parentElement.previousElementSibling.innerText++;
    productTotal(
      e.target.parentElement.previousElementSibling.innerText,
      e.target.parentElement.parentElement.parentElement
    );
  } else if (e.target.className === "removeProduct") {
    e.target.parentElement.parentElement.parentElement.remove();
    cartTotal();
  }
};

let productTotal = (e, b) => {
  let productPrice =
    b.children[1].children[0].firstChild.nextElementSibling.innerText;
  let productTotal = b.children[4];
  //   console.log(productPrice.innerText, productTotal.innerText);
  let amount = e;
  productTotal.innerText = (productPrice * amount).toFixed(2);

  cartTotal();
};
let cartTotal = () => {
  let productTotalDivs = document.querySelectorAll(".productLinePrice");
  let subTotal = 0;
  productTotalDivs.forEach((e) => {
    subTotal += parseFloat(e.innerText);
  });
  let taxTotal = parseFloat(subTotal * tax).toFixed(2);
  let overallTotal = parseFloat(subTotal + taxTotal + shipping).toFixed(2);
  document.getElementById("subTotal").children[1].innerText =
    subTotal.toFixed(2);
  document.getElementById("tax").children[1].innerText = taxTotal;
  document.getElementById("shipping").children[1].innerText = subTotal
    ? shipping
    : 0;
  document.getElementById("overallTotal").children[1].innerText = overallTotal;
};
