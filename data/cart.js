 export let cart = JSON.parse(localStorage.getItem('cart'));
 
 if(!cart){
  cart = [   {
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
  deliveryOptionId: '3'
},
 {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1,
  deliveryOptionId: '2'
 }
];
 }
 
function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart(productId){
  let matchingIteam
    cart.forEach((cartitem)=>{
      if(productId===cartitem.productId){
        matchingIteam =cartitem
      }
    });
    if(matchingIteam){
      matchingIteam.quantity += 1;
    }else{
       cart.push({
    productId:productId,
    quantity:1,
    deliveryOptionId:'1'
  });
    }
    saveToStorage();
}
export function removeFromCart(productId){
  const newCart =[];
  cart.forEach((cartIteam)=>{ 
if(cartIteam.productId !== productId){
  newCart.push(cartIteam);
}
  });
cart =newCart;
saveToStorage();
} 
export function updatedeliveryOption(productId,deliveryOptionId){
   let matchingIteam
    cart.forEach((cartitem)=>{
      if(productId===cartitem.productId){
        matchingIteam =cartitem
      }
    });

    matchingIteam.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}