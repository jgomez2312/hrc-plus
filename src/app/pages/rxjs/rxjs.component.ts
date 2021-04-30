import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSub: Subscription;

  constructor() {

    // this.retornaObservable().pipe(
    //   retry()
    // ).subscribe(
    //   valor => console.log('subs:', valor),
    //   err => console.warn('Error', err),
    //   () => console.info('Proceso terminado')
    // );

    this.intervalSub = this.retornaIntervalo()
    .subscribe( console.log );

  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    return interval(100)
                      .pipe(
                        // take(10),
                        map( valor => valor + 1 ),
                        filter( valor => (valor % 2 === 0)? true: false),
                      );
  }


  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4){
          clearInterval( intervalo);
          observer.complete();
        }

        if ( i === 2 ){
          console.log('i es igual a 2 ...error');
          observer.error('i llego al valor de dos')
        }

      }, 1000)

    });

  }

}