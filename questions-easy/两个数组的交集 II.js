/*示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2] */

const nums1 = [1,2,3,4,5]
const nums2 = [4,5,6]

// 哈希表
const intersect = (nums1,nums2)=>{
    let hash = new Map()
    let res = []
    for(let i=0;i<nums1.length;i++){
        if(hash.has(nums1[i])){
            hash.set(nums1[i],hash.get(nums1[i])+ 1 )
        }else {
            hash.set(nums1[i],1)
        }
    }
    for(let i=0;i<nums2.length;i++){
        let temp = nums2[i]
        let hashKey = hash.get(temp)
        if(hash.has(temp)){
            res.push(temp)
            if(hashKey>1){
                hash.set(temp,hashKey-1)
            }else{
                hash.delete(temp)
            }
        }
    }
    return res
}
console.log('intersect(nums1,nums2) :>> ', intersect(nums1,nums2));