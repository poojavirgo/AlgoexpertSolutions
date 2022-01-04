// Time complexity = O(n)
// Space complexity = O(1)

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // Write your code here.
      let first_ptr = head;
      let second_ptr = head;
      let counter =1;
      
      while(counter <= k){
          second_ptr= second_ptr.next;
          counter++;
      }
      
      if(second_ptr === null){
          head.value = head.next.value;
          head.next= head.next.next;
          return;
      }
      
      while (second_ptr.next != null){
          first_ptr= first_ptr.next;
          second_ptr= second_ptr.next;
      }
      
      first_ptr.next = first_ptr.next.next;
      
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;