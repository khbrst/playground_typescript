// RxJS v6+
import { merge, of } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';

// emit one item
const example = of(null);
// delay output of each by an extra second
const message = merge(
  example.pipe(mapTo('Hello')),
  example.pipe(
    mapTo('World!'),
    delay(1000)
  ),
  example.pipe(
    mapTo('Goodbye'),
    delay(2000)
  ),
  example.pipe(
    mapTo('World!'),
    delay(3000)
  )
);
// output: 'Hello'...'World!'...'Goodbye'...'World!'
message.subscribe(val => console.log(val));