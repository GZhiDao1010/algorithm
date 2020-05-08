// 买卖股票的最佳时机II
/** 示例
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
         随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
*/


// 贪心算法  在每一步总是做出在当前看来最好的选择
// 时间复杂度：O(n)O(n)，遍历一次。
// 空间复杂度：O(1)O(1)，需要常量的空间。
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