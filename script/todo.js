const array =[];
function addList(){
  const element = document.querySelector('.js-name');
  const name = element.value;
   
  array.push(name);
  console.log(array);
  element.value ='';  //this make become text empty
}