const array =['wash dishes','make dinner'];

randertodolist();
function randertodolist(){
  let arrayHTML = '';
for(let i=0; i<array.length; i++){
const todo = array[i];
const html =`<p> ${todo}</p>`;
arrayHTML += html

}
console.log(arrayHTML);
 document.querySelector('.js-todo-list').
 innerHTML = arrayHTML;
}
function addList(){
  const element = document.querySelector('.js-name');
  const name = element.value;
   
  array.push(name);
  console.log(array);
  element.value ='';  //this make become text empty
  randertodolist();
} 