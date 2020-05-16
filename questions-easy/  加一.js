/**

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
https://leetcode-cn.com/problems/plus-one/solution/66-jia-yi-by-stevenyoung21/
*/
const plusOne = (digits)=>{
    let arr = digits.join('')
    let num = BigInt(arr)+1n+''
    let arr2 = num.split('')
    let endArr = arr2.map(Number)
    return endArr
}
console.log('plusOne([]) :>> ', plusOne([4,3,2,1,3,4,5,6,6,7,8,9,9,3,4,9]));