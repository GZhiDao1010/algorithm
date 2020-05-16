/**给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */
const nums = [0,5,23,60,5,0]
const moveZerose = (nums) => {
  let zerose = [];
  let noZerose = [];
  nums.map((item) => {
    if (item === 0) {
      zerose.push(item);
    } else {
      noZerose.push(item);
    }
  });
  return [...noZerose, ...zerose];
};
console.log('moveZerose([0,5,23,60,5,0]) :>> ', moveZerose(nums));
// 双指针 https://leetcode-cn.com/problems/move-zeroes/solution/tu-jie-shuang-zhi-zhen-by-muyids/
const moveZerose2 = (nums)=>{
    let i=0,j=0;
    while(i<nums.length){
        if(nums[i] !== 0){
            if(j<i){
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
        i++
    }
    return nums
}
console.log('moveZerose2(nums) :>> ', moveZerose2(nums));