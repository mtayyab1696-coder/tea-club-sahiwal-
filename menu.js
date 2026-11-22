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
const categoryNames={tea:'Chai & Tea',fastfood:'Fast Food',drinks:'Coffee & Drinks',breakfast:'Breakfast',more:'Soups & Desserts'};
const root=document.getElementById('menuCatalog');
function money(v){return typeof v==='number'?'Rs. '+v.toLocaleString('en-PK'):v;}
function render(category='all'){
 root.innerHTML='';
 const keys=category==='all'?Object.keys(menuData):[category];
 keys.forEach(key=>menuData[key].forEach(([heading,items,note])=>{
  const group=document.createElement('section');group.className='menu-group';
  const top=document.createElement('div');top.className='menu-group-head';
  const h=document.createElement('h2');h.textContent=heading;top.appendChild(h);
  if(note){const small=document.createElement('span');small.textContent=note;top.appendChild(small)}
  group.appendChild(top);
  const grid=document.createElement('div');grid.className='items-grid';
  items.forEach(([name,price])=>{const row=document.createElement('article');row.className='menu-item';const nm=document.createElement('h3');nm.textContent=name;const pr=document.createElement('strong');pr.textContent=money(price);row.append(nm,pr);grid.appendChild(row)});
  group.appendChild(grid);root.appendChild(group);
 }));
}
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');render(btn.dataset.filter)}));
render();
