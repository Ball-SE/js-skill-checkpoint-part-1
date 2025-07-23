// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (product, promotion){
  let total =0;
  for(let item of product){
    total += item.price * item.quantity;
  }
  if(promotion === "SALE50"){
    total = total*0.5;
  }else if(promotion === "SALE20"){
    total = total*0.8;
  }
  return total;
}

console.log(calculateTotalPrice(products,promotionCode));