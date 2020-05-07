// 买卖股票的最佳时机II

// 贪心算法  在每一步总是做出在当前看来最好的选择
const maxProfit = (nums)=>{
    let profit = 0;
    for(let i=1;i<nums.length;i++){
        let tmp = nums[i] - nums[i-1];
        if(tmp>0) profit+=tmp;
    }
    return profit;
}
console.log('maxProfit==',maxProfit([1,4,2,7]));

const maxProfit2 = (nums)=>{
    let profit = 0;
    let len = nums.length;
    for(let i=0;i<len;i++){
        profit+=Math.max(nums[i+1]-nums[i],0)
    }
    return profit
}

const maxProfit3 = (nums)=>{
    let profit=0;
    let len = nums.length;
    for(let i=0;i<len;i++){
        profit+=Math.max(nums[i+1]-nums[i],0)
    }
    return profit;
}