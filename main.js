const palindrome = () => {
//Get the user input
  let input = document.getElementById("textarea").value;
  let checkedResult = document.getElementById("checkedResult");

  if(!input) {
    checkedResult.innerHTML = "Ops! There's nothing to check! Try to type something.";
    checkedResult.style.backgroundColor = "#900";
    throw new Error('No input');
  }
//Array of alphanumerics characters to compare with the input array
  const alphaNum = ('abcdefghijklmnopqrstuvwxyz0123456789').split('');

//Turn input into an array and into lowercase
  const inputArray = input.toLowerCase().split('');

//Remove all non-alphanumeric characters (punctuation, spaces and symbols)
  const getAlphanum = (array1, array2) => {
    let newArray = [];
    for (let i = 0; i < array1.length; i++ ){
      for (let j = 0; j < array2.length; j++){
        if (array1[i] === array2[j]){
          newArray.push(array1[i]);
        };
      };
    };
    return newArray;
  };

  const finalArray = getAlphanum(inputArray, alphaNum);

//Get reverse Array - copying the array first, because .reserve() is destructive
  const getReverseArray = (arr) => {
    let copyArr = [];
    arr.every(item => copyArr.push(item));
    const newArray = copyArr.reverse();
    return newArray;
  };

  const reverseArray = getReverseArray(finalArray);

//Compare finalArray and reverseArray
  const compareArrays = (array1, array2) => {
    for (let i = 0; i < array1.length; i++ ){
      if (array1[i] !== array2[i]){
        return false;
      };
    };
    return true;
  };


  let result = compareArrays(finalArray, reverseArray);

  if(result) {
    checkedResult.innerHTML = "Yep! Definitely a palindrome!";
    checkedResult.style.backgroundColor = "#fff";
    checkedResult.style.color = "#004d99";
  } else {
    checkedResult.innerHTML = "Nope! Not a palindrome! Try again";
    checkedResult.style.backgroundColor = "#fff";
    checkedResult.style.color = "#900";
  }

};
