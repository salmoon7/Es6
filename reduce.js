//reduce passes the the result of a callback to another function

const numArr=[1,2,3,4,55,6]

numArr.reduce((acc,item)=>{
    console.log(item)
    console.log(acc)
    return acc
},0)