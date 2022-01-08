// This is an input class. Do not edit.
//Space Complexity : O(N)
//Time Complexity: O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function linkedListPalindrome(head) {
    // Write your code here.
      let slow = head;
      let fast=head;
      while(fast!== null && fast.next!==null){
          slow=slow.next;
          fast=fast.next.next;
      }
      let reversedNode = reverseLinkedlist(slow);
      
      let firsthalf = head;
      while(reversedNode!==null){
          if(reversedNode.value !== firsthalf.value){
              return false;
          }
          reversedNode= reversedNode.next;
          firsthalf=firsthalf.next;
      }
    return true;
  }
  
  function reverseLinkedlist(head){
      let prev =null;
      let Next= null;
      let current = head;
      while(current!== null){
          Next= current.next;
          current.next=prev;
          prev=current;
          current=Next;
      }
      return prev;
      
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.linkedListPalindrome = linkedListPalindrome;
  