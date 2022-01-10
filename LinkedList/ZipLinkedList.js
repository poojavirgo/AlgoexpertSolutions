// This is an input class. Do not edit.
//Time Complexity : O(N)
//Space Complexity : O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function zipLinkedList(linkedList) {
    // Write your code here.
      if(linkedList === null || linkedList.next === null) return linkedList;
    let firstHalfHead = linkedList;
      let secondHalfHead = splitLinkedList(linkedList);
      let  reversedSecondHalfHead = reverssedLinkedList(secondHalfHead);
      return interweaveLinkedList(firstHalfHead,reversedSecondHalfHead);
   
  }
  
  function  splitLinkedList(head){
      
      let slow = head;
      let fast = head;
      let newHead;
      while(fast!== null && fast.next!== null){
          
          slow= slow.next;
          fast= fast.next.next;
      }
   const secondHalfhead = slow.next;
      slow.next= null;
      return secondHalfhead;
  }
  
  function reverssedLinkedList(head){
      let current= head;
      let prev= null;
      let nextNode= null;
      while(current!=null){
          nextNode= current.next;
          current.next = prev;
          prev= current;
          current= nextNode;	
      }
      return prev;
  }
  
  function interweaveLinkedList(head1,head2){
      let first= head1;
      let second = head2;
      let temp1, temp2;
      while(first!== null && second!== null){
         temp1 = first.next;
         temp2 = second.next;
          
          first.next=second;
          second.next= temp1;
           first= temp1;
          second=temp2;
      }
  return head1;
  }
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.zipLinkedList = zipLinkedList;