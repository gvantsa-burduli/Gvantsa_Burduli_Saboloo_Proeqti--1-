
document.querySelectorAll(".martial_art_main_container article").forEach(article => {
  article.addEventListener("click", () => {
    let Img = article.querySelector("img").getAttribute("src");
    let Name = article.querySelector("h4").textContent.trim();
    let Price = article.querySelector(".product_price").textContent.trim();
    let Categories = article.querySelector(".categories").textContent.trim();
    let Descriprion = article.querySelector(".descriprion").textContent.trim();
    let Color = article.querySelector(".color").textContent.trim();
    let Amount = article.querySelector(".amount").textContent.trim();
    

    let url = `product.html?categories=${encodeURIComponent(Categories)}&name=${encodeURIComponent(Name)}&price=${encodeURIComponent(Price)}&descriprion=${encodeURIComponent(Descriprion)}&color=${encodeURIComponent(Color)}&amount=${encodeURIComponent(Amount)}&img=${encodeURIComponent(Img)}`;
    window.location.href = url;

  });
});



let params = new URLSearchParams(window.location.search);
let categories = params.get("categories");
let descriprion = params.get("descriprion");
let color = params.get("color");
let amount = params.get("amount");
let Name = params.get("name");
let price = params.get("price");
let img = params.get("img");


document.getElementById("categories").textContent = categories;
document.getElementById("descriprion").textContent = descriprion;
document.getElementById("color").textContent = color;
document.getElementById("amount").textContent = amount;
document.getElementById("productName").textContent = Name;
document.getElementById("productPrice").textContent = `Price: ${price}`;
document.getElementById("productImg").src = img;
