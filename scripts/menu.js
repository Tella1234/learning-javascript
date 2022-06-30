// Items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "../assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "../assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "../assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "../assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "../assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "../assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "../assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "../assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "../assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "../assets/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const buttonSection = document.querySelector(".button-section")

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu)
  displayButtons()
});

function displayButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
    );
    const categoryBtns = categories
      .map(function(category) {
        return `<button type="button" class="bg-transparent capitalize border-2 border-[#c59d5f] mx-2 rounded-md py-2 px-3 text-[#c59d5f] cursor-pointer transition ease-in-out duration-500 hover:bg-[#c59d5f] hover:text-white filter-btn" data-id="${category}">${category}</button>`;
      })
      .join("");

      buttonSection.innerHTML = categoryBtns;
      const filterBtns = buttonSection.querySelectorAll(".filter-btn");

      filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e){
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter (function (menuItem) {
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          if (category === "all") {
            diplayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
}

function displayMenuItems(menuItems) {
  const displayMenu = menuItems
  .map(function (item) {
    return `<article class="grid gap-y-4 gap-x-8 max-w-sm xl:grid-cols-[225px_1fr] md:gap-y-0 md:gap-x-5 md:max-w-[640px]">
        <img src=${item.img} alt="${item.title}" class="object-cover h-52 md:h-44 w-full border-4 border-[#c59d5f] rounded-lg xl:h-[150px]" >
        <div class="">
          <header class="flex justify-between border-b border-dotted border-gray-400">
            <h4 class="mb-2 font-semibold">${item.title}</h4>
            <h4 class="text-[#c59d5f] font-semibold">$${item.price}</h4>
          </header>
          <p class="mb-0  pt-4 text-[#698dae]">${item.desc}</p>
        </div>
      </article>`;
  })
  .join("");

  sectionCenter.innerHTML = displayMenu
}