import { of, interval, from, timer, fromEvent, Observable, Subject, Subscriber, BehaviorSubject } from "rxjs"
import { filter, first, last, mergeMap, skip, skipLast, skipUntil, switchMap, take, takeLast, takeUntil, takeWhile } from "rxjs/operators"

// interval(1000).pipe(
//   take(5)
// ).subscribe(console.log)

// of(1,2,3,4,5,6,7,8,11,111,111,0).pipe(
//   takeLast(2)
// ).subscribe(console.log)

from(["Nafeed","Akram","Jamia","Millia","Islamia","New Delhi"]).pipe(
  // filter(value => value == "Akram")
  // first()
  // last()
  // take(2)
  // takeLast(3)
  // interval(1000),
  // takeUntil() // constion should be obserbale ??
  // takeWhile(value => value != "Millia", true) ?? 
  // skipLast(2)
  // skipUntil() ??
    // skipWhile() ?? 
).subscribe(console.log)

// const button = document.getElementById('myBtn');
// if(button){
//   fromEvent(button, "click").pipe(
//     switchMap(()=> interval(1000))
//   ).subscribe((res) => console.log(res));
// }

// function fetchUser(userId:string){
//   return new Observable(observer =>{
//     console.log(userId)
//     observer.next({id: userId, name: "Name "}),
//     observer.complete()
//   })
// }


// of("Deljhi","Kolkayta","Jamia").pipe(
//   mergeMap((userId) => fetchUser(userId))
// ).subscribe({
//   next: (user)=> console.log(user),
//   complete: () => console.log("Completed")
// })


// const subscription1 = interval(100).subscribe((res) => console.log(res));
// const subscription2 = interval(200).subscribe((res) => console.log(res));

// subscription1.add(subscription2);

// setTimeout(()=>{
//   subscription1.unsubscribe();
// },2000)

// const subject = new Subject<number>();
// subject.subscribe(value => console.log("First Value ", value));
// subject.subscribe(value => console.log("Second value ",value));

// // subject.next(40);

// const obserable = from([1,2,3,4,5,6]);

// obserable.subscribe(subject);

// Whithout Multicasting

// const obserable = new Observable(subscriber =>{
//   console.log("Is Observable")
//   subscriber.next(Math.random());
// })

// obserable.subscribe(res => console.log(res));
// obserable.subscribe(res => console.log(res));

// // With Multicasting

// const subject = new Subject();
// subject.subscribe((res) => console.log(res));
// subject.subscribe((res) => console.log(res));

// subject.next(Math.random)

const behaviorSubject  = new BehaviorSubject<number>(0);
behaviorSubject.subscribe(value => console.log("First Value ", value));
behaviorSubject.subscribe(value => console.log("Second value ",value));
behaviorSubject.next(40);
behaviorSubject.next(50);

behaviorSubject.subscribe(value => console.log("Third value ",value));