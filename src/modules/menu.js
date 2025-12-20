import "./menu.css";

export default function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuContain = document.createElement("div");
  menuContain.classList.add("menuContain");

  const menuItems = [
    {
      type: "entree",
      name: "French Beef Bourguignon",
      price: "$5.50",
    },
    {
      type: "entree",
      name: "French Coq Au Vin Rouge",
      price: "$5.50",
    },
    {
      type: "main course",
      name: "Ratatouille ",
      price: "$8.00",
    },
    {
      type: "dessert",
      name: "Chocolate Mousse",
      price: "$2.00",
    },
    {
      type: "drink",
      name: "water",
      price: "Free",
    },
    {
      type: "drink",
      name: "Wine",
      price: "$10.00",
    },
  ];

  class MenuItem {
    constructor(data) {
      this.id = crypto.randomUUID();
      this.type = data.type;
      this.name = data.name;
      this.price = data.price;
    }

    itemCard() {
      const card = document.createElement("div");
      card.classList.add("itemCard");

      const item = document.createElement("h3");
      item.textContent = this.name;

      const price = document.createElement("p");
      price.textContent = this.price;

      card.append(item, price);
      return card;
    }
  }

  const entrees = document.createElement("div");
  entrees.classList.add("menuGroup");
  const entreeTitle = document.createElement("h2");
  entreeTitle.textContent = "Entrees";
  entrees.append(entreeTitle);

  const mains = document.createElement("div");
  mains.classList.add("menuGroup");
  const mainTitle = document.createElement("h2");
  mainTitle.textContent = "Main Course";
  mains.append(mainTitle);

  const desserts = document.createElement("div");
  desserts.classList.add("menuGroup");
  const dessertTitle = document.createElement("h2");
  dessertTitle.textContent = "Desserts";
  desserts.append(dessertTitle);

  const drinks = document.createElement("div");
  drinks.classList.add("menuGroup");
  const drinkTitle = document.createElement("h2");
  drinkTitle.textContent = "Drinks";
  drinks.append(drinkTitle);

  menuItems.forEach((data) => {
    const menuItem = new MenuItem(data);
    if (data.type == "entree") {
      entrees.append(menuItem.itemCard());
    }
    else if (data.type == "main course") {
      mains.append(menuItem.itemCard());
    }
    else if (data.type == "dessert") {
      desserts.append(menuItem.itemCard());
    }
    else if (data.type == "drink") {
      drinks.append(menuItem.itemCard());
    }
  });

  menuContain.append(entrees, mains, desserts, drinks);
  content.append(menuContain);
}
