//Find loop in linked list
//Time complexity : O(N)
//Space complexity: O(N)

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
    // Write your code here.
      let current= head;
      let s = new Set();
      while(current!=null){
  
          if(s.has(current)){
              return current;
          }
          s.add(current);
          current=current.next;
      }
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;
  