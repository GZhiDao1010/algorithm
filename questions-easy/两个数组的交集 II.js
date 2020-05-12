/*示例 1: 两个数组的交集 II
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2] */

const nums1 = [1,2,3,4,5]
const nums2 = [4,5,6]

// 哈希表
/**时间复杂度O(n)

先用Hashmap记录第一个数组中的元素【放在key】，和出现的次数【放在value】。

然后再遍历第二个数组，如果找到对应元素，则添加这个元素到返回数组里。

如果value值大于1，HashMap中的value值减 1，表示已经找到一个相同的了。

如果value值等于1，则删除该元素。
*/
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

const t1  = new Map([[2,'tet',{id:3}]])
const t2 = new Map([[2,'dddd',{id:4}]])
const merged = new Map([...t1,...t2])
console.log('merged :>> ', merged);