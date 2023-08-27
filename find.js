// find and find index
let numArr=[-4,-3,-2,-1,1,2,3,4]
const result=numArr.find(item=>{
    return item%2===0;
})
console.log(result)

const reult=numArr.findIndex(item=>{
    return item%2===0;
})
console.log(result)
console.log(reult)