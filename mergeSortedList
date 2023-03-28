var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummmy;
  let l1 = list1;
  let l2 = list2;
  
  while (l1 && l2) { //while l1 and l2 are not null 
    if (l1.val < l2.val){ //to compare and sort 
      current.next = l1; //next node after current 
      l1 = l1.next;
    }else {
      current.next = l2;
      l2 = l2.next;
    }
   current = current.next; //move the dummy node to next 
  }
  
  if (l1) { //if l1 and l2 are not null
    current.next = l1;
  }else if (l2) {
    current.next = l2;
  }
  
  return dummy.next; //return head of the dummy, remember dummy is -1
}
