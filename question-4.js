// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let name = "";
let minInventory = Infinity;
for(let item of inventory){
  if(item.quantity < minInventory){
    minInventory = item.quantity;
    name = item.name;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${name} ซึ่งมี ${minInventory} ชิ้น`);
