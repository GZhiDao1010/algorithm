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

// 双指针
/**两个数组排序
设定两个为0的指针，比较两个指针的元素是否相等
如果相等，元素push到返回值里，两个指针同时往前
如果不相等，元素小的指针往前
如果相等，那肯定比较过的元素就没用了，两个指针++

如果不相等，那把元素小的数组指针++。

因为大元素可能在小元素数组里存在，但是小元素在大元素所在数组肯定不存在。因为已经排过序了
*/
var intersect2 = (nums1,nums2)=>{
    let p1 = 0
    let p2 = 0
    let res = []
    nums1 = nums1.sort((a,b)=>a-b)
    nums2 = nums2.sort((a,b)=>a-b)
    while(p1<nums1.length && p2<nums2.length){
        if(nums1[p1]===nums2[p2]){
            res.push(nums1[p1])
            p1++
            p2++
        }else if(nums1[p1] < nums2[p2]){
            p1++
        }else{
            p2++
        }
    }
    return res
}