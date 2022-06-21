// Time Complexity :O(n)
//Space Compelxity :O(n)

function minRewards(scores) {
    // Write your code here.
    const rewards= scores.map(_=>1);
    //left sibling check:
    for(let i=0;i<scores.length;i++){
      if(scores[i]>scores[i-1]) rewards[i]=rewards[i-1]+1;
    }
    //right sibling check:
    for(let i=scores.length-1;i>=0;i--){
      if(scores[i]>scores[i+1])  rewards[i]=Math.max(rewards[i],rewards[i+1]+1);
    }
    return rewards.reduce((a,b)=>a+b);
  }
  
  // Do not edit the line below.
  exports.minRewards = minRewards;
  