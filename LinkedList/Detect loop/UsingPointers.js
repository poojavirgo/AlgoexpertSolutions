// This is an input class. Do not edit.
//Find loop in linked list, using fastest method
//Time complexity : O(N)
//Space complexity: O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
    // Write your code here.
      let slow = head.next;
      let fast = head.next.next;
      while(slow!=fast){
          slow=slow.next;
          fast=fast.next.next;	
      }
      slow=head;
      while(slow!=fast){
          slow=slow.next;
          fast=fast.next;
      }
      return slow;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;