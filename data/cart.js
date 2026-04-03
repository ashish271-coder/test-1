
export const cart = [];
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
    quantity:1
  });
    }
}