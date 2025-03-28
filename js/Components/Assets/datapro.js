import p1_product from "../Assets/p1_product.webp"; 
import p47 from "../Assets/p47.webp"; /// Import the image
import joy from "../Assets/joy.webp";
import earlcd from "../Assets/earlcd.webp";

const datapro = [
  {
    id: 1,
    name: "Iphone charger",
    image: p1_product, // Use the imported image variable
    new_price: 700.0,
    old_price: 1200.0,
  },
  {
    id: 2,
    name: "Head Phone P47 ",
    image: p47, // Use the imported image variable
    new_price: 1100.0,
    old_price: 1800.0,
  },
  {
    id: 3,
    name: "Joy Room earbuds",
    image: joy, // Use the imported image variable
    new_price: 2999.0,
    old_price: 4500.0,
  },
  {
    id: 4,
    name: "ANC A15 Pro Lcd Earbuds",
    image: earlcd, // Use the imported image variable
    new_price: 3100.0,
    old_price: 4500.0,
  },

];

export default datapro; // Export the data