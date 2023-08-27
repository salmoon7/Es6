
// let list=[]
// $.get('https://jsonplaceholder.typicode.com/posts',(response)=>{

//     console.log(response);
//     let id=1;
//     $.get(`https://jsonplaceholder.typicode.com/posts/${id}`,(response)=>{
//         console.log(response);


// $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,(response)=>{
// console.log(response);
// });
// }).fail(err =>{
//     confirm(err);;
// });
// });

const postListPromise  =new     Promise((resolve,reject)=>{
    $.get('https://jsonplaceholder.typicode.com/posts',(data)=>{
        // console.log('Get post list response',data);
        resolve(data);
       }).fail(err=>{
        reject(new Error('Called failled toGET POST LIST requeest')); 
       })
})

postListPromise.then((response)=>{
    console.log('Call successful');
    console.log('Then response id',response)
}).catch((error)=>{
    console.log('Call failed')
})

//CHAINING PROMISES
