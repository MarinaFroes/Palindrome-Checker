const palindrome = () => {
//Get the user input
  let input = document.getElementById("textarea").value;
  console.log(input);
  if(!input) {
    document.getElementById("errorMessage").classList.add("show");
    console.log("No input");
    throw new Error(errorMessage);
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
    let copyArr = [...arr]; //Spread operator to copy the original array
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
    document.getElementById("isPalindrome").classList.add("show");
    console.log("Palindrome");
  } else {
    document.getElementById("notPalindrome").classList.add("show");
    console.log("Not a Palindrome");
  };
};

/* If one of the results is showing, hide it */
const hideResult = () => {
  if (!event.target.closest("#textarea")) {
    const results = document.getElementsByClassName("result");
    let i;
    for (i = 0; i < results.length; i++) {
      let itemResult = results[i];
      if (itemResult.classList.contains('show')) {
        itemResult.classList.remove('show');
      }
    }
  }
};
