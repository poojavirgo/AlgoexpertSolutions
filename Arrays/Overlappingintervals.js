// Time Complexity :O(nlogn)
//Space Compelxity :O(n)


function mergeOverlappingIntervals(array) {
    // Write your code here.
  
  
    const sortedarray = array.sort((a,b)=>a[0]-b[0]);
    const result =[];
  
  let current = sortedarray[0];
    result.push(current);
  
    for(const next of sortedarray){
      const [_,end]=current;
      const [nextstart,nextend]=next;
      if(end>=nextstart){
        current[1] =Math.max(end,nextend);
      }else{
        current=next;
        result.push(current);
      }
    }
  
    return result;
  }
  
  // Do not edit the line below.
  exports.mergeOverlappingIntervals = mergeOverlappingIntervals;


