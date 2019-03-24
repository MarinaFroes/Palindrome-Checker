const palindrome = () => {
//Get the user input
  const icon = document.getElementById("icon");
  const message = document.getElementById("message");

  let input = document.getElementById("textarea").value;
  
  if(!input) {
    icon.setAttribute('class', 'far fa-meh-rolling-eyes');
    message.innerText = "Ops! There's nothing to check! Try to type something.";
    return; 
  }
  
  const checkPalindrome = str => {
    const alphaNumStr = str.toLowerCase().replace(/[\W_]/g, '');

    const reversedStr = alphaNumStr.split('').reverse().join('');

    const result = (reversedStr === alphaNumStr) ? true : false;
    
    return result; 
  }
  
  

  if (checkPalindrome(input)) {
    icon.setAttribute('class', 'far fa-grin-stars');
    message.innerText = 'Yep! Definitely a palindrome!';
    
  } else {
    icon.setAttribute('class', 'far fa-sad-cry');
    message.innerText = 'Nope! Not a palindrome! Try again.';
    
  };
  
};

