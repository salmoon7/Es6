const mArray =[1,2,3,3,5]

// let newArray =  []



// let doubleValues=(item)=>{
//     return item*2
// }


// for (let i = 0; i < mArray.length; i++){
//     newArray.push(doubleValues(mArray[i]));
// }
// console.log(newArray)
//NOW USING MAP

let newArray = mArray.map((item)=>{
    return item *2
})
console.log(newArray)


let mArr=[{
    name:'Taofeek',
    experience:10,
    career:'Pilot'
},
{
    name:'Taofeek',
    experience:10,
    career:'Pilot'
},
{
    name:'Taofeek',
    experience:10,
    career:'Pilot'
},
]
let newData=mArr.map((data)=>{
    console.log(data);
  })