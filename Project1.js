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
    
    var answer = palindrome(document.getElementById('user-input').value); 
    
    if(answer === true){
      $("#check-icon").css("display", "block");
      $("#cross-icon").css("display", "none");
      var outputString = document.getElementById("yes-msg").textContent;
      document.getElementById("outputDiv").innerHTML = outputString;
      
    }else if(answer === false) {
      $("#cross-icon").css("display", "block");
      $("#check-icon").css("display", "none");
      var outputString = document.getElementById("no-msg").textContent;
      document.getElementById("outputDiv").innerHTML = outputString;
    }
    // else{
    //   var outputString = document.getElementById("empty-input-msg").textContent;
    //   document.getElementById("outputDiv").innerHTML = outputString;
    //   $("#cross-icon").css("display", "none");
    //   $("#check-icon").css("display", "none");
    // }
  }


  var blurred = false;
  window.onblur = function() { blurred = true; };
  window.onfocus = function() { blurred && (location.reload()); };


  // function output(){
  //   var newDiv = document.getElementById("outputDiv"); 
  //   var answer = palindrome(document.getElementById('user-input').value); 
  //   // var answer = document.body.appendChild(newDiv);
    
  //   if(answer === true){
  //     // $(document).ready(function(){
  //       $("#check-icon").css("display", "block");
  //     // });
  //     return newDiv.textContent = "Yes, it's a Palindrome!";

  //   }else if(answer === false) {
  //     $(document).ready(function(){
  //       $("#cross-icon").addClass(".visible");
  //     });
  //     return newDiv.textContent = "Oops, not quite!";

  //   }else{
  //     return newDiv.textContent = "Enter a palindrome to check";
  //   }
  // }
  