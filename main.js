const palindrome = () => {
//Get the user input
  let input = document.getElementById("sequenceToCheck").value;

//Array of alphanumerics characters to compare with the input array
  const alphaNum = ('abcdefghijklmnopqrstuvwxyz0123456789').split('');

//Turn input into an array and into lowercase
  const inputArray = input.toLowerCase().split('');

//Remove all non-alphanumeric characters (punctuation, spaces and symbols) of inputArray
const toRemoveNonAlphanum = (array1, array2) => {
  let finalArray = [];
  for (let i = 0; i < array1.length; i++ ){
    for (let j = 0; j < array2.length; j++){
      if (array1[i] === array2[j]){
        finalArray.push(array1[i]);
      };
    };
  };
  return finalArray;
};

toRemoveNonAlphanum(inputArray, alphaNum);

//Reverse Array
const getReverseArray = (arr) => {
  const reverseArray = arr.reverse();
  return reverseArray;
};

const reverseArray = getReverseArray(finalArray);

//Compare finalArray and reverseArray
const compareArrays = (array1, array2) => {

  for (let i = 0; i < array1.length; i++ ){
    if (array1[i] === array2[i]){

    } else {

    };
  };
};

  let result = document.getElementById("result");
  result.innerHTML = "É UM PALÍNDROMO";
};


// const palindrome = () => {
//   let str = document.getElementById("sequenceToCheck").value;
//
//   const arrAlphaNum = ('abcdefghijklmnopqrstuvwxyz0123456789').split('');
//
//   const myArr = str.toLowerCase().split('');
//
//   const commonArray = [];
//
//
//   for (let i = 0; i < myArr.length; i++ ){
//     for (let j = 0; j < arrAlphaNum.length; j++){
//       if (myArr[i] === arrAlphaNum[j]){
//         commonArray.push(myArr[i]);
//       };
//     };
//   };
//
//   let copyOfCommonArray = [];
//   commonArray.every(item => copyOfCommonArray.push(item));
//
//   const reverseArray = commonArray.reverse();
//
//   let result = document.getElementById("result");
//
//   for (let i = 0; i < commonArray.length; i++ ){
//     if (copyOfCommonArray[i] === reverseArray[i]){
//
//     } else {
//       return false;
//     };
//   };
//
//
//   result.innerHTML = "É UM PALÍNDROMO";
// };
