// Code your solutions in this file

function writeCards(array, eventName){
  //create new array with the messages 
  const newArray=[]
  for(let i = 0; i < array.length; i++){
    //create custom message for each name
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
  }
  //return new array
  return newArray
}

function countDown(integer){
  let i = 0;
  while(i <= integer){
    console.log(integer)
    integer--
  }
}