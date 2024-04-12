import { Observable } from 'rxjs'


const obs = new Observable((observer)=>{
    const url =  'https://dummyjson.com/products/1';
    const http = new XMLHttpRequest();


    const onload = ()=>{
        if(http.status == 200 && http.readyState === 4){
            observer.next(http.responseText)
        }
    }

    const onError = ()=>{
        observer.error("Error")
    }

    http.addEventListener('load', onload)

    http.addEventListener('error',onError)

    http.open('GET',url);
    http.send();

    return ()=>{
        http.removeEventListener('load' , onload)
        http.removeEventListener('error', onError)
    }
}) 


const resSub = obs.subscribe({
    next : (data) => console.log(data),
    error: (error) => console.log(error)
})























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