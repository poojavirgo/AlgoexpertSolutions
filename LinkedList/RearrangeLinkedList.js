// This is the class of the input linked list.
// Rearrange LinkedList
// Time Complexity : O(N)
//Space Complexity : O(1)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function rearrangeLinkedList(head, k) {
    // Write your code here.
    //list of pointers  below:
      let SH= null;
      let ST = null;
      let EH= null;
      let ET=null;
      let GH= null;
      let GT= null;

      let current = head;
      
      while(current!==null){
          if(current.value <k){
              [SH,ST] = growLinkedList(SH,ST,current);
          }else if(current.value >k){
              [GH,GT] = growLinkedList(GH,GT,current);
              
          }else{
              [EH,ET] = growLinkedList(EH,ET,current);
              
          }
          const prev = current;
          current=current.next;
          prev.next=null;
      }
      
      const[firstHead, firstTail]= connectLinkedList(SH,ST,EH,ET);
      const [finalHead,_]= connectLinkedList(firstHead,firstTail,GH,GT);
      return finalHead;
  }
  
  function connectLinkedList(headOne,tailOne,headTwo,tailTwo){
      const newHead= headOne === null? headTwo : headOne;
      const newTail= tailTwo === null? tailOne : tailTwo;
      if(tailOne!== null) tailOne.next = headTwo;
      return[newHead, newTail];
  }
  
  function growLinkedList(head,tail,node){
   let newHead = head;
  let newTail= node;
      
      if(newHead=== null)newHead=node;
      if(tail!==null) tail.next = node;
      return [newHead, newTail];
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.rearrangeLinkedList = rearrangeLinkedList;