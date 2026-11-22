const menuData = {
  tea: [
    ["Chai & Tea", [["Chai",250],["Kashmiri Chai",300],["Elaichi Chai",270],["Gud Wali Chai",270],["Green Tea",230]]]
  ],
  fastfood: [
    ["Appetizers", [["Chicken Strips (5 pcs)",800],["Chicken Poppers (10 pcs)",800],["Nuggets (6 pcs)",630],["Fried Wings (10 pcs)",750],["Honey Wings (10 pcs)",949],["Finger Fish (8 pcs)",1999],["Chicken Dynamite (6 pcs)",850],["Fries",330],["Loaded Fries",800]]],
    ["Burgers", [["Zinger Burger",550],["Tower Burger",949],["Patty Burger",450],["Crunch Burger",620],["Fish Burger",799],["Pizza Burger",760]]],
    ["Pizza", [["Tea Club Special Pizza","— / 1,500 / 2,600"],["Chicken Tikka","670 / 1,370 / 1,920"],["Chicken Fajita","670 / 1,370 / 1,920"],["Hot Mughlai","670 / 1,370 / 1,920"],["Malai Boti","670 / 1,370 / 1,920"],["Kabab Crust","— / 1,480 / 2,590"],["Cheese Lover","— / 1,480 / 2,590"],["Cheese Stuffer","— / 1,480 / 2,590"]], "Small / Medium / Large"],
    ["Pasta", [["Alfredo Pasta","680 / 899"],["Creamy Pasta","640 / 799"],["Crunchy Pasta","640 / 799"],["Tea Club Special Pasta","890 / 990"]], "Half / Full"],
    ["Sandwiches", [["Club Sandwich",899],["Grilled Sandwich",890],["Sandos",760],["Pizza Stacker",999]]],
    ["Wraps", [["Crunchy Wrap","— / 1,500 / 2,600"],["Malai Boti Wrap","670 / 1,370 / 1,920"],["Special Tea Club Wrap","670 / 1,370 / 1,920"]], "Small / Medium / Large"]
  ],
  drinks: [
    ["Coffee", [["Espresso",499],["Americano",499],["Caffe Latte",699],["Caramel Latte",799],["Caffe Mocha",630],["Ice Cold Coffee",799],["Caramel Crunch",799]]],
    ["Shakes", [["Oreo Shake",700],["KitKat Shake",860],["Chocolate Shake",700],["Pineapple Shake",700],["Pina Colada",890],["Date Shake",799]]],
    ["Drinks & Mocktails", [["Tin Pack Coke",150],["Tin Pack Sprite",150],["Diet",140],["Mineral Water (H)",90],["Mint Margarita",480],["Blueberry Mocktail",530],["Lemonade",300],["Fresh Lime",250],["Pink Mojito",600],["Mojito",599]]]
  ],
  breakfast: [
    ["Plated Breakfast", [["Bread Jam",350],["Cheese Bread",500],["Egg Bread",350],["Fry Egg",99],["Omelette",99],["Cheese Omelette",299],["Chicken Cheese Omelette",350],["Sada Paratha",120],["Lacha Paratha",140],["Chicken Cheese Paratha",399],["Tea Club Special Paratha",399],["Andaa Paratha",250]]],
    ["Organic Breakfast", [["Desi Ghee Ka Tarka Wala Saag",450],["Makai Ki Roti",200],["Makhan Wala Saag",500],["Lassi",299],["Tea Club Special Lassi",299],["Chai",150],["Khajoor",199],["Shahad",199],["Tea Club Butter*",1500],["Special Platter",1000]]]
  ],
  more: [
    ["Soups", [["Tea Club Special Soup","699 / 1,199"],["Chicken Corn Soup","599 / 1,099"]], "Half / Full"],
    ["Desserts", [["Kheer",350],["Gulab Jamun (2 pcs)",170],["Fruit Trifle",399],["Mango Delight",449]]]
  ]
};
const introCopy = {
  tea:["THE CLASSICS","Chai & tea","House favourites including Kashmiri, Elaichi and Gud Wali Chai.","ASK ABOUT TODAY'S TEA SELECTION","assets/cafe-interior.jpg"],
  fastfood:["FROM THE KITCHEN","Fast food","Browse appetizers, burgers, pizzas, pasta, sandwiches and wraps.","PRICES SHOWN IN PKR","assets/premium-seating.jpg"],
  drinks:["SIPS & SHAKES","Coffee & drinks","Coffee favourites, shakes, soft drinks and refreshing mocktails.","PRICES SHOWN IN PKR","assets/cafe-interior.jpg"],
  breakfast:["START THE DAY","Breakfast","Choose from plated breakfast and the Tea Club organic breakfast selection.","PRICES SHOWN IN PKR","assets/outdoor-seating.jpg"],
  more:["A LITTLE EXTRA","Soups & desserts","Warm soups and sweet finishes from the printed Tea Club menu.","PRICES SHOWN IN PKR","assets/storefront.jpg"]
};
function renderMenu(category) {
  const copy=introCopy[category];
  document.getElementById("menuEyebrow").textContent=copy[0];
  document.getElementById("menuTitle").textContent=copy[1];
  document.getElementById("menuDescription").textContent=copy[2];
  document.getElementById("menuHint").textContent=copy[3];
  const image=document.querySelector("#menuImage img");
  image.src=copy[4]; image.alt=copy[1]+" at Tea Club";
  const catalog=document.getElementById("menuCatalog");
  catalog.innerHTML="";
  menuData[category].forEach(([heading,items,note])=>{
    const section=document.createElement("section");
    section.className="catalog-group";
    const h=document.createElement("div"); h.className="catalog-title";
    h.innerHTML="<h4></h4><span></span>";
    h.querySelector("h4").textContent=heading;
    h.querySelector("span").textContent=note||"";
    section.appendChild(h);
    const list=document.createElement("div"); list.className="catalog-items";
    items.forEach(([name,price])=>{
      const row=document.createElement("div"); row.className="catalog-row";
      const n=document.createElement("span"); n.className="catalog-name"; n.textContent=name;
      const p=document.createElement("strong"); p.className="catalog-price";
      p.textContent=typeof price==="number" ? "Rs. "+price.toLocaleString("en-PK") : price;
      row.append(n,p); list.appendChild(row);
    });
    section.appendChild(list); catalog.appendChild(section);
  });
}
document.querySelectorAll(".tab").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(tab=>{tab.classList.remove("active");tab.setAttribute("aria-selected","false");});
  button.classList.add("active");button.setAttribute("aria-selected","true");
  renderMenu(button.dataset.category);
}));
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");
}));
renderMenu("tea");
