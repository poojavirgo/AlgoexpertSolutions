// This is an input class. Do not edit.
// Node Swap 
// Time Complexity : O(N)
//Space Complexity : O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function nodeSwap(head) {
    // Write your code here.
      let temp = new LinkedList(null);
       temp.next = head;
      let prev = temp;
      let first;
      let second;
      while(prev.next!== null && prev.next.next!== null){
           first = prev.next;
          second= prev.next.next;
          first.next= second.next;
          second.next=first;
          prev.next=second;
          prev= first;
      }
    return temp.next;
  }
  
  // Do not edit the lines below.
  exports.nodeSwap = nodeSwap;
  exports.LinkedList = LinkedList;