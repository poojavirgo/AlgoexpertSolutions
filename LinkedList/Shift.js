// This is the class of the input linked list.
// Time Complexity : O(n)
//Space Complexity :O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function shiftLinkedList(head, k) {
    // Write your code here.
    let tail= head;
      let length = 1;
      while(tail.next!== null){
          tail= tail.next;
          length++;
      }
      
      let newK= Math.abs(k) % length;
      if(newK === 0) return head;
      
      const pos= k>0? length-newK : newK;
      let newTail = head;
       for(let i=1;i< pos; i++){
           newTail= newTail.next;
       }
      
      const newHead = newTail.next;
      newTail.next = null;
      tail.next= head;
      return newHead;
      
      
      
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.shiftLinkedList = shiftLinkedList;