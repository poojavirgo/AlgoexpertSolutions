// Remove Duplicates from sorted linked lists
// Time Complexity =O(n) ,becoz the second while will not run again for every node , it will just look and set next distinct node.
// Space Complexity =O(1)

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
      let current= linkedList;
      let nextNode;
      while(current!=null){
          nextNode= current.next;
          while(nextNode!=null && current.value === nextNode.value){
              nextNode= nextNode.next;
          }
          current.next=nextNode;
          current=nextNode;	
      }
    return linkedList;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  