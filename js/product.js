const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product h3").textContent =
    product.productdisplayname;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector(".color").textContent = product.basecolour;
  document.querySelector(".price").textContent = `DKK ${product.price} ,-`;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".breadcrumb-item").textContent = product.category;
  document.querySelector(
    ".breadcrumb-item"
  ).href = `productlist.html?category=${product.category}`;
  document.querySelector(".breadcrumb-item2").textContent = product.variantname;
}
