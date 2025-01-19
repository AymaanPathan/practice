 isParenthesisBalanced(s) {
      let stack = new Stack();
      for(let i=0;i<s.length;i++){
          let char = s[i];
          if(char=="("){
              stack.push(")")
          }else if(char==="["){
              stack.push("]")
          }else if(char==="{"){
              stack.push("}")
          }  else if (stack.pop() !== char) {
                    return false;

            }
      }
      return stack.isEmpty()
    }