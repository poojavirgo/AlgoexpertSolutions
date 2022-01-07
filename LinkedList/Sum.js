//Sum of two linked list
//Time Complexity : O(n);
//Space Complexity : O(1);

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
      //CREATE LINKED LIST WITH NEW NODE 0
      let newNode= new LinkedList(0);
      let current= newNode;
      let carry=0;
      let p1= linkedListOne;
      let p2= linkedListTwo;
      while(p1!== null || p2!==null || carry!==0){
          const value1=p1!==null? p1.value:0 ;
          const value2= p2!== null? p2.value :0;
          const sum = value1+value2+carry;
          const newValue = sum % 10;
           const node= new LinkedList(newValue);
              current.next=node;
              current=node;
          carry=Math.floor(sum/10);
          p1= p1!==null? p1.next : null;
          p2= p2!==null? p2.next : null;
      }
    return newNode.next;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;
  