let data = [
  {
    id: 1,
    name: "Rolls On Wheels - Shawarma & Wraps",
    rating: "4.2",
    description:
      "Rolls, Kebab, Fast Food, Wraps, Momos, Shawarma, Beverages, Desserts",
    price: 250,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/7/54787/c10ba0e57de8130baf11f500e22c7917_o2_featured_v2.jpg",
  },
  {
    id: 2,
    name: "Burger King",
    rating: "4.0",
    description: "Burger, Fast Food, Desserts, Beverages",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/5/61555/96bb2a4261a76f702bc8032c66526b49_o2_featured_v2.jpg",
  },
  {
    id: 3,
    name: "Boba Bhai",
    rating: "4.4",
    description:
      "Bubble Tea, Burger, Beverages, Tea, Fast Food, Street Food, Momos, Shake",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/7/20763247/c8c8f96c8a4328608ac15e71dfe5d858_o2_featured_v2.jpg",
  },
  {
    id: 4,
    name: "Sree Banashankari Donne Biriyani",
    rating: "4.1",
    description: "Biryani, South Indian",
    price: 150,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/9/18946469/bb269e260f34d2e81ed3ba1b9db46254_o2_featured_v2.jpg",
  },
  {
    id: 5,
    name: "Pizza Hut",
    rating: "3.9",
    description: "Pizza, Italian, Pasta, Fast Food, Desserts, Beverages",
    price: 250,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/8/51418/4833d1ca366697d553e096c9cdb625b6_o2_featured_v2.jpg",
  },
  {
    id: 6,
    name: "Dawat Durbar",
    rating: "4.0",
    description: "North Indian, Chinese, Mughlai",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/8/51418/4833d1ca366697d553e096c9cdb625b6_o2_featured_v2.jpg",
  },
  {
    id: 7,
    name: "Leon's Burgers & Wings",
    rating: "4.5",
    description: "Burger, Fast Food, Wraps",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/6/18740146/60afc26a8d420799fc8bc7e27c968951_o2_featured_v2.jpg",
  },
  {
    id: 8,
    name: "Royal Restaurant",
    rating: "4.1",
    description: "North Indian, Chinese, Sichuan",
    price: 100,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/2/52122/249bc00a0a89e12dd72dfbff7a1ba542_o2_featured_v2.jpg",
  },
  {
    id: 9,
    name: "Kwality Wall's Ice Cream And More",
    rating: "4.3",
    description: "Ice Cream, Desserts",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/9/19085099/55bc3ca3172d678a005f9c152949154b_o2_featured_v2.jpg",
  },
  {
    id: 11,
    name: "Samosa Party",
    rating: "4.2",
    description: "Street Food, Tea, North Indian, Beverages, Mithai, Desserts",
    price: 100,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/8/18443088/08243625d6649ea325776a3eda3aeeb9_o2_featured_v2.jpg",
  },
  {
    id: 12,
    name: "Meat And Eat",
    rating: "3.7",
    description:
      "Burger, Sandwich, Fast Food, Wraps, Biryani, Beverages, Desserts",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/0/57840/2f32447aa2aef630ebdf6005b2a822a3_o2_featured_v2.jpg",
  },
  {
    id: 13,
    name: "Meat And Eat",
    rating: "3.7",
    description:
      "Burger, Sandwich, Fast Food, Wraps, Biryani, Beverages, Desserts",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/0/57840/2f32447aa2aef630ebdf6005b2a822a3_o2_featured_v2.jpg",
  },
  {
    id: 14,
    name: "RollsKing",
    rating: "4.1",
    description: "Rolls, Fast Food, North Indian, Beverages",
    price: 200,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/2/20163232/894ac21a74e90d9adecd00fef9ff416f_o2_featured_v2.jpg",
  },
  {
    id: 15,
    name: "Subway",
    rating: "3.8",
    description: "Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverages",
    price: 250,
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/4/50924/758007b3cfff26e1ff10443be701c61b_o2_featured_v2.jpg",
  },
];

let curPage = 1;
let itemsPerPage = 3;

function displayItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const paginatedItems = data.slice(startIndex, lastIndex);
  console.log({
    startIndex,
    lastIndex,
    paginatedItems,
  });
  let productContainer = document.querySelector(".product-list");
  productContainer.innerHTML = "";

  paginatedItems.forEach((ele) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.id = `product_${ele.id}`;

    const formatedDescLength = 20;
    let trancatedDescription = ele.description;
    if (trancatedDescription.length > formatedDescLength) {
      trancatedDescription =
        trancatedDescription.substring(0, formatedDescLength) + "...";
    }
    productCard.innerHTML = `
      <figure class='image-container'>
          <img src=${ele.imgUrl}
          alt="">
      </figure>
      <div class="desc1">
          <h4> ${ele.name} </h4>
          <div> ${ele.rating}</div>
      </div>
      <div class="desc2">
          <h4> ${trancatedDescription} </h4>
          <div class="price">${ele.price}</div>
      </div>
      <button class="add-to-cart">Add to Cart</button>

    `;

    productContainer.appendChild(productCard);
  });
  document.querySelector("#pageNumber").innerText = page;
  updatePaginationButtons(page);
}

function previous() {
  if (curPage > 1) {
    curPage--;
    displayItems(curPage);
  }
}
function nextPage() {
  console.table(curPage, itemsPerPage, data.length);
  if (curPage * itemsPerPage < data.length) {
    curPage++;
    console.log(curPage);
    displayItems(curPage);
  }
}
function updatePaginationButtons(page) {
  const prevBtn = document.querySelector(".prev");
  const nexBtn = document.querySelector(".next");

  prevBtn.disabled = curPage === 1;
  prevBtn.classList.toggle("disabled", prevBtn.disabled);

  nexBtn.disabled = curPage * itemsPerPage >= data.length;
  nexBtn.classList.toggle("disabled", nexBtn.disabled);
}
window.onload = function () {
  displayItems(curPage);
};
