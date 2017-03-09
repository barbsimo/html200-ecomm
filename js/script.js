
var cart = [];
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

function compareFunc(a,b) {
  if (a.name.toLowerCase() < b.name.toLowerCase())
    return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase())
    return 1;
  return 0;
}
function compareNumbers(a,b) {
  return a.price - b.price;
}

function capture()
{
  console.log(document.shopInfo.filter.value);
  var sortBy = document.shopInfo.filter.value;
  if (sortBy == "price") {
    products.sort(compareNumbers);
    console.log(products);
  }
  else if (sortBy = "name") {
    products.sort(compareFunc);
    console.log(products);
  }
  event.preventDefault();
}


function modifyCart() {
  var scarf = document.addRemoveForm.addRemove.value;
 // console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function WCKmodifyCart() {
  var scarf = document.WCKaddRemoveForm.WCKaddRemove.value;
  //console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function NLmodifyCart() {
  var scarf = document.NLaddRemoveForm.NLaddRemove.value;
 // console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function OImodifyCart() {
  var scarf = document.OIaddRemoveForm.OIaddRemove.value;
//  console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function FPmodifyCart() {
  var scarf = document.FPaddRemoveForm.FPaddRemove.value;
 // console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function MCmodifyCart() {
  var scarf = document.MCaddRemoveForm.MCaddRemove.value;
 // console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function EtromodifyCart() {
  var scarf = document.EtroaddRemoveForm.EtroaddRemove.value;
 // console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
function ATmodifyCart() {
  var scarf = document.ATaddRemoveForm.ATaddRemove.value;
 // console.log("scarf in:" + scarf + "end")
  var index = cart.indexOf(scarf);
  if (index >= 0) {
    cart.splice(index,1)
  }
  else {
    cart.push(scarf)
  }
  console.log(cart);
  event.preventDefault();
}
// TODO: trigger on change of cart contents
function sumPrices(cartArray) {
  var sumTotal = 0;
  for (var i = 0; i < cartArray.length; i=i+1)
    {
      if (cartArray[i].price){
        sumTotal = sumTotal + cartArray[i].price;
      }
    }
  // TODO: print total as HTML to page, next to cart icon
  console.log(sumTotal);
      
}
//for (var i = 0; i < products.length; i=i+1)
//  {
//    console.log("Product: "+products[i].name);
//    console.log("Price: "+products[i].price);
//    console.log("Description: "+products[i].description);
//    console.log("----------");
//  }
  
for (var key in products)
  {
   // console.log("Product: "+products[key].name);
   // console.log("Price: "+products[key].price);
   // console.log("Description: "+products[key].description);
   // console.log("----------");
  }