
// 给定一个整数数组，判断是否存在重复元素。
// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。


const nums = [1,19,3,4,7,3]
// 线性查找
const containsDuplicate = (nums)=>{
    for(let i=0;i<nums.length;i++){
        for(let j= 0;j<i;j++){
            if(nums[j]===nums[i]) return true
        }
    }
    return false
}
console.log('containsDuplicate() :>> ', containsDuplicate(nums));
// 排序
const containsDuplicate2 = (nums)=>{
   const tt =  nums.sort((a,b)=>a-b)
    console.log('nums :>> ', tt);
    for(let i=0;i<nums.length - 1;i++){
        if(nums[i]===nums[i-1]) return true
    }
    return false
}
console.log('containsDuplicate2(nums) :>> ', containsDuplicate2(nums));

// set size
const containsDuplicate3 = nums=>new Set(nums).size !== nums.length
console.log('containsDuplicate3(nums) :>> ', containsDuplicate3(nums));

// 哈希表
const containsDuplicate4 = (nums)=>{
    let set = new Set()
    let len = nums.length
    for(let i=0;i<len;i++){
        if(set.has(nums[i])) return true
        set.add(nums[i])
    }
    return false
}
console.log('containsDuplicate4(nums) :>> ', containsDuplicate4(nums));