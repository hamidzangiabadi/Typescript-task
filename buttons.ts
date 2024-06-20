import { Button } from "./classes/Button";
import { ButtonKeyTypes } from "./enums/ButtonKeyTypes";

/// our buttons list
const buttonsList: Button[] = [];

// objects to add to list
const HomeBtn = new Button(0, ButtonKeyTypes.Home, "Home", "/home");
const AboutBtn = new Button(1, ButtonKeyTypes.About, "About", "/about");
const ContactBtn = new Button(2, ButtonKeyTypes.Contact, "Contact", "/contact");
const ProductsBtn = new Button(
  3,
  ButtonKeyTypes.Products,
  "Products",
  "/products"
);

// add buttons to our list
buttonsList.push(HomeBtn, AboutBtn, ContactBtn, ProductsBtn);

// function to select the buttons based on ButtonKeyTypes[]
function getSelectedButtons(selectedKeys: ButtonKeyTypes[]): Button[] {
  return buttonsList.filter((btn) => selectedKeys.includes(btn.key));
}

// usage test
const selectedButtonTypes = [
  ButtonKeyTypes.Home,
  ButtonKeyTypes.About,
  ButtonKeyTypes.Products,
];
const selectedButtons = getSelectedButtons(selectedButtonTypes);
console.log(selectedButtons);
