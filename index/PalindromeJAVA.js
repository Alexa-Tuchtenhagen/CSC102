//create a function to test to see if a word is a palindrome
function checkPalindrome(wordToTest){


    //remove all of the space in the string that was passed in
    var cleanedWord = wordToTest.replace(/\s/g,"").toLowerCase();

    //take our cleaned word with no space and all lower case and reverse it
    var reverseWord = cleanedWord.split("").reverse().join("");

    //if the cleaned and reversed word are the same, the function returns true
    //if they are different, the function returns false
    return cleanedWord == reverseWord;
   }

   console.log("radar=" + checkPalindrome("radar"));
   console.log("tag=" + checkPalindrome("tag"));
   console.log("A man a plan a canal Panama" + checkPalindrome("A man a plan a canal Panama"));

   //bContinue will track if the user wants to keep entering words
   var bContinue = true

   //loop to keep running the code for as long as the user wants
   do{
       //get a word from the user
       var userImput = prompt("Enter a word to test if it is a palindrome: ");

       //test the variable that the user entered
       var isPalindrome = checkPalindrome(userImput);

       //show the user a message based on the true false value returned from the function
       //if isPalindrome is true, the if statement will run
       if(isPalindrome){ 
           alert(userImput + " is a palindrome!");

       }
       else{ //if not a palindrome
           alert(userImput + " is NOT a palindrome!")

       }

       //ask the user if they want to continue testing for palindrone
       var answer = prompt ("Do you want to continue? (y/n)")

       //test to see if they entered n
       if (answer.toLowerCase() == "n"){
           bContinue = false; //change bContinue to false so we can exit out of the loop
       }

   }while(bContinue); //while bContinue is true keep running the loop
  
