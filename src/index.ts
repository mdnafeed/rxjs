import { of, from, interval, timer, fromEvent } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";


console.log('START Map Operator')

//map operator transform the data emitted by observable

const observableMapOperator = of(1,2,3,4,5);

const doubleObservableOperator = observableMapOperator.pipe(
    map(item=>item * 2)
)


doubleObservableOperator.subscribe({
    next: (data) => console.log(data)
})

console.log('END Map Operator')

//----------------------------------------------------------------------------------------------------------------

console.log('START Ajax')

const observableAjaxOperation = ajax.get('https://jsonplaceholder.typicode.com/todos');

observableAjaxOperation.subscribe({
    next: (data)=> console.log(data.response),
    error: (error)=> console.log(error),
    complete: () => console.log('Complete')
})

console.log('END Ajax')

// --------------------------------------------------------------------------------------------------------------

console.log('START FormEvent');

// The fromEvent operator is a powerful tool for handling user interactions in reactive and event-driven web applications.

const button:any = document.getElementById('myButton');

const observableFromEvent = fromEvent(button, 'click');

observableFromEvent.subscribe(event => console.log('button clicked'))

// -----------------------------------------------------------------------------------------------


console.log('START timer')

// The timer operator is useful when you need to introduce time delays into your observables, either for a single emission or for periodic emissions after an initial delay.

const observableTimer = timer(2000, 1000);
observableTimer.subscribe({
    next: (data) => console.log('Interval '+data)
})

console.log('END Interval')
// -----------------------------------------------------------------------------------------------------

console.log('START Interval Operator');

// The interval operator in RxJS is a creation operator that emits sequential numbers at specified time intervals

const observableInterval = interval(1000);

observableInterval.subscribe({
    next: (data) => console.log(data)
});

//The interval operator is useful when you need to perform actions at regular time intervals or when you want to create periodic events in your application

// ----------------------------------------------------------------------------------------------------
console.log('START From Operator');

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

// it creates an observable from an array, an array-like object, a Promise, an iterable object, or an Observable-like object.


// -------------------------------------------------------------------------------------------------------------------
console.log('START of Operator');
// off Operator 

const observable = of(1,2,3,4,5);

observable.subscribe({
    next: (data) => console.log(data),
    complete: () => console.log('Complete')
})

// The of operator is useful when you want to create an observable sequence from a fixed set of values 


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