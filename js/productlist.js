const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?limit=12&category=" + category)
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  document.querySelector(".breadcrumb-item").textContent = category;
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".price").textContent = `DKK ${product.price},-`;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".link").href = `product.html?id=${product.id}`;
  if (product.discount) {
    copy.querySelector(".price").classList.add("line-through");
    copy.querySelector(".percentage").textContent = `  (-${product.discount}%)`;
    copy.querySelector(".discount").textContent = `Nu DKK ${Math.round(
      (1 - product.discount / 100) * product.price
    )},-`;
  }
  if (product.soldout) {
    copy.querySelector(".status").classList.add("soldout");
  } else {
    copy.querySelector(".status").remove();
  }

  document.querySelector(".productlist").appendChild(copy);
}

// <a
//   href="product.html"
//   aria-label="Read more about Seminole tax hike"
// >
//   <h2>Sahara Team India Fanwear Round Neck Jersey</h2></a
// >

// <p class="brand">Nike</p>
// <p>DKK 895,-</p>
// </article>

// id	1163
// gender	"Men"
// category	"Apparel"
// subcategory	"Topwear"
// articletype	"Tshirts"
// season	"Summer"
// productionyear	2011
// usagetype	"Sports"
// productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
// price	895
// discount	null
// brandname	"Nike"
// soldout	0
