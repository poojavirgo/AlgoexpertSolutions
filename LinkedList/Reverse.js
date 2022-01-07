// This is an input class. Do not edit.
// Reverse a linked list
//Time Complexity : O(n)
//Space Complexity: O(1)

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
    // Write your code here.
      let prev= null;
      let current= head;
      while(current!=null){
          const next= current.next;
          current.next=prev;
          prev=current;
          current=next;
      }
      return prev;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.reverseLinkedList = reverseLinkedList;