  // make a copy of the string to adhear to functional programming best practice
  // use Regex to remove all punctuation from the string, turn all characters to lower case and remove all white space.
  // turn this string into an array
  // initialize a new blank array for the revesed string to be pushed to
  // run for loop to reverse the string

  
  function palindrome(str) {
    
    if(str === ""){
      return undefined;
    }

    let strCopy = str.slice().toLowerCase();
    
    let newStr = strCopy.replace(/[^a-z0-9]/gi, '');
    // console.log("newStr = " + newStr);
  
    let newStrArray = newStr.split("");
    // console.log("newStrArray = " + newStrArray);
    let reversedStrArray = [];
    let arrayLength = newStrArray.length;
  
    for(let i = 0; i<arrayLength; i++){
      let temp = newStrArray.pop(); 
      reversedStrArray.push(temp);
    }
    // console.log("reversedStrArray = " + reversedStrArray);
    let reversedStr = reversedStrArray.join("");
    // console.log("reversedStr = " + reversedStr);
  
    if(newStr === reversedStr){
      console.log("true");
      return true;
      
    } else{
      console.log("false");
      return false;
      
    }
  }

  
  function output(){
    var newDiv = document.getElementById("outputDiv"); 
    var answer = palindrome(document.getElementById('user-input').value); 
    // var answer = document.body.appendChild(newDiv);
    
    if(answer === true){
      $(document).ready(function(){
        $("#icon").addClass(".check-icon");
      });
      return newDiv.textContent = "Yes, it's a Palindrome!";

    }else if(answer === false) {
      $(document).ready(function(){
        $(".icon").addClass(".cross-icon");
      });
      return newDiv.textContent = "Oops, not quite!";

    }else{
      return newDiv.textContent = "Enter a palindrome to check";
    }
  }


  