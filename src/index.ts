import { of, interval, from, timer } from "rxjs"
import { filter, first, last, skip, skipLast, skipUntil, take, takeLast, takeUntil, takeWhile } from "rxjs/operators"

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