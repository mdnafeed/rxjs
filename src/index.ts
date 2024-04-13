import { of, from } from 'rxjs';

// From Operator

// Example with a Array
const array = [1,2,3,4,5];
const observableFromArray = from(array);

// Example with a promise 
const promise = new Promise((resolve)=> console.log(resolve('i am resolve')));
const observableFromPromise = from(promise);

// Example with a string
const string = "Nafeed Akram";
const observableFromString = from(string);

// Example with a set
const set = new Set([11,22,33,44]);
const observableFromSet = from(set);


// subscribe to the observable
observableFromArray.subscribe(console.log);
observableFromPromise.subscribe(console.log);
observableFromString.subscribe(console.log);
observableFromSet.subscribe(console.log)




// -------------------------------------------------------------------------------------------------------------------

// off Operator 

const observable = of(1,2,3,4,5);

observable.subscribe({
    next: (data) => console.log(data),
    complete: () => console.log('Complete')
})

//The of operator is useful when you want to create an observable sequence from a fixed set of values or when you want to emit specific values in a sequence.


// const obs = of(1,2,3,4,5).pipe(
//     map(item => item * 10)
// )

// obs.subscribe({
//     next: (data) => console.log(data)
// })

// const pr1 = new Promise(resolve =>{ resolve('i am promise1')});
// const pr2 = new Promise(resolve =>{ resolve('i am promise2')});
// const pr3 = new Promise(resolve =>{ resolve('i am promise3')});

// let array = [1,2,3,4]
// // const obs = from([pr1,pr2,pr3]);

// const obs = from('Hello')

// obs.subscribe({
//     next: (data) =>{console.log(data)},
//     complete: () => console.log('complete')
// })

// function http(consumer:any,isPromise = false){

//     const url =  'https://dummyjson.com/products/1';
//     const http = new XMLHttpRequest();

//     const onload = ()=>{
//         if(http.status == 200 && http.readyState === 4){
//             if(isPromise){
//                 consumer(http.responseText)
//             }
//             else{
//                 consumer.next(http.responseText)
//             }
//         }
//     }

//     const onError = ()=>{
//         consumer.error("Error")
//     }

//     http.addEventListener('load', onload)

//     http.addEventListener('error',onError)

//     http.open('GET',url);
//     http.send();
    
// }

// const pr = new Promise((resolve)=>{
//     console.log('Promise Start');
//     http(resolve,true);
// });

// setTimeout(()=>{
//     pr.then((data)=>{
//         console.log(data)
//     })
// },4000)

// const obs = new Observable((observer)=>{
//     console.log('Obs Start')
//     http(observer);
// })

// obs.subscribe({
//     next: (data)=>console.log(data)
// })

// ----------------------------------------------------------------------------------------------------------------

// Using RxJx

// const obs = new Observable((observer)=>{
//     const url =  'https://dummyjson.com/products/1';
//     const http = new XMLHttpRequest();


//     const onload = ()=>{
//         if(http.status == 200 && http.readyState === 4){
//             observer.next(http.responseText)
//         }
//     }

//     const onError = ()=>{
//         observer.error("Error")
//     }

//     http.addEventListener('load', onload)

//     http.addEventListener('error',onError)

//     http.open('GET',url);
//     http.send();

//     return ()=>{
//         http.removeEventListener('load' , onload)
//         http.removeEventListener('error', onError)
//     }
// }) 


// const resSub = obs.subscribe({
//     next : (data) => console.log(data),
//     error: (error) => console.log(error)
// })

// ----------------------------------------------------------------------------------------------------------

// Observable using Velina Javascript

// const obs = new Observable((observer)=>{
//     let counter = 0;
//     const producer = setInterval(()=>{
//         observer.next(counter++)

//         if(counter > 5){
//             observer.complete();
//         }
//     },1000)

//     return ()=>{
//         console.log('close Producer')
//         clearInterval(producer);
//     }
// })

// const sub = obs.subscribe({
//     next: (data) => console.log('Obs1 ', data),
//     error: (err) => console.log('Obs1 ', err),
//     complete: () => console.log('Obs1 ', 'Complete')
// })



// setTimeout(()=>{
//     const sub1 = obs.subscribe({
//         next: (data) => console.log('Obs2 ', data),
//         error: (err) => console.log('Obs2 ', err),
//         complete: () => console.log('Obs2 ', 'Complete')
//     })
// },5000)

// setTimeout(()=>{
//     sub.unsubscribe()
// },5000)