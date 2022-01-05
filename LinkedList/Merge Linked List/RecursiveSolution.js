// This is an input class. Do not edit.
// Time Complexity = O(N+M) where N = length of 1st linked list and M= legth of second linked list
// Space Complexity = O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    // Write your code here.
      recursive(headOne,headTwo,null);
      return headOne.value < headTwo.value ? headOne : headTwo;
  }
  
  function recursive(p1,p2,prev){
          if(p1 === null){
          prev.next = p2;
          return;
      }
      if(p2===null){
          return;
      }
      
      if(p1.value < p2.value){
          recursive(p1.next,p2,p1);
      }else{
          if(prev !== null) prev.next = p2;
          const newp2 = p2.next;
          p2.next=p1;
          recursive(p1,newp2,p2)
      }
      
  
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;