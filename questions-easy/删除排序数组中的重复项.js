// 删除排序数组中的重复项
const removeDuplicates = (nums)=>{
    if(nums === null || nums.length ===0) return 0
    let p = 0;
    let q = 1;
    while(q<nums.length){
        if(nums[p] !==nums[q]){
            p++
            nums[p]=nums[q]
        }
        q++
    }
    return p+1
}
console.log(`删除排序数组中的重复项${removeDuplicates([33,33,1,5,0])}`);

const removeDuplicates2 = (nums)=>{
    if(nums===null || nums.length === 0) return 0;
    let p=0;
    let q=1;
    while(q<nums.length){
        if(nums[p] !== nums[q]){
            p++;
            nums[p]=nums[q]
        }
        q++
    }
    return p+1;
}

const removeDuplicates4 = (nums)=>{
    if(nums===null || nums.length ===0) return 0;
    let p=0;
    let q=1;
    while(q<nums.length){
        if(nums[p]!==nums[q]){
            p++
            nums[p]=nums[q]
        }
        q++
    }
    return p+1
}

const removeDuplicates3 = (nums)=>{
    if(nums===null|| nums.length ===0) return 0;
    let p=0;
    let q=0;
    while(q<nums.length){
        if(nums[p] !== nums[q]){
            p++
            nums[p]=nums[q]
        }
        q++
    }
    return p+1
}

const removeDuplicates4 = (nums)=>{
    if(nums===null||nums.length===0) return 0;
    let p=0;
    let q=1;
    while(q<nums.length){
        if(nums[p]!==nums[q]){
            p++;
            nums[p] = nums[q]
        }
        q++;
    }
    return p+1
}

// 延伸场景：去掉数组中对象id相等的，并且返回新的数组
const objArray = [
    {
        name:'name1',
        id:1
    },
    {
        name:'name1',
        id:1
    },
    {
        name:'name2',
        id:2
    },
    {
        name:'name2',
        id:2
    },
    {
        name:'name3',
        id:3
    },
    {
        name:'name4',
        id:4
    }
]
const  removeDuplicatesObj = (nums)=>{
    if(nums === null || nums.length === 0) return []
    let p = 0;
    let q = 1;
    let n = [nums[0]]
    while(q<nums.length){
        if(nums[p].id !== nums[q].id){
            p++
            nums[p] = nums[q]
            n.push(nums[p])
        }
        q++;
    }
    return n
};
console.table(`${JSON.stringify(removeDuplicatesObj(objArray))}`)