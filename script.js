let cart = [];
let getProductlist = document.querySelector(".product-list");
getProductlist.addEventListener("click", function (event) {
  //console.dir(event.target)
  if (event.target.classList.contains("add-to-cart")) {
    let productCard = event.target.closest(".product-card");

    let productName = productCard.querySelector(".desc1 h4").innerText;
    let productPrice = productCard.querySelector(".desc2 div.price").innerText;
    let productImg = productCard.querySelector(".image-container img").src;

    cart.push({
      name: productName,
      price: productPrice,
      img: productImg,
    });

    document.querySelector(".badge").innerText = cart.length;
    showNotification(productImg);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
});

function showNotification(imgUrl) {
  let notification = document.getElementById("notification-box");
  let notifyImg = document.getElementById("notify-img");
  let notifyTxt = document.getElementById("notify-text");

  notifyImg.src = imgUrl;
  notifyTxt.innerText = `Added to bag`;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
