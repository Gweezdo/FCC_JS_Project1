  // make a copy of the string to adhear to functional programming best practice
  // use Regex to remove all punctuation from the string, turn all characters to lower case and remove all white space.
  // turn this string into an array
  // initialize a new blank array for the revesed string to be pushed to
  // run for loop to reverse the string

  
  function palindrome(str) {
  
    let strCopy = str.slice().toLowerCase();
    
    let newStr = strCopy.replace(/[^a-z0-9]/gi, '');
    console.log("newStr = " + newStr);
  
    let newStrArray = newStr.split("");
    console.log("newStrArray = " + newStrArray);
    let reversedStrArray = [];
    let arrayLength = newStrArray.length;
  
    for(let i = 0; i<arrayLength; i++){
      let temp = newStrArray.pop(); 
      reversedStrArray.push(temp);
    }
    console.log("reversedStrArray = " + reversedStrArray);
    let reversedStr = reversedStrArray.join("");
    console.log("reversedStr = " + reversedStr);
  
    if(newStr === reversedStr){
      return true;
    } else{
      return false;
    }
  }

  
  palindrome("2_A3*3#A2");
