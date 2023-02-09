fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(item) {
  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".link").textContent = item.category;
  copy.querySelector(
    ".link"
  ).href = `productlist.html?category=${item.category}`;
  document.querySelector(".categories ul").appendChild(copy);
}
