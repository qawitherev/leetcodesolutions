var isValid = function(s) {
  //first we define an empty stack, LIFO
  const stack = [];
  
  //then we define pairs of each parentheses 
  const pairs = {
    '(':')',
    '{':'}',
    '[':'[',
    };
    
    //we want to loop through every char in the passed string 
    for (let i = 0; i<s.length, i++){
      //we take a single char from the string 
      const char = s[i];
      
      if (pairs[char]){ //if char is opening parentheses 
        stack.push(pairs[char[); //we push it inside the stack 
        }else if (char !== stack.pop()){
          //if closing parentheses, pop topmost element, and if popped element not the same return false
          return false; //if same continue looping 
          }
         }
    return stack.length === 0; // return true if stack is empty 
    };
