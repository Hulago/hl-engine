import * as Rx from 'rxjs';

const TIMEOUT = 1000;

export class Server {
  private producerStore: Rx.BehaviorSubject<any>;
  private consumerStore: Rx.BehaviorSubject<any>;
  private consumerSubscription: Rx.Subscription;
  private producerSubscription: Rx.Subscription;

  constructor() {
    this.producerStore = new Rx.BehaviorSubject<any>(null);
    this.consumerStore = new Rx.BehaviorSubject<any>(null);
  }

  run() {
    this.consumerSubscription = this.consumerStore.subscribe(() => {
      this.producer();
    })
    this.producerSubscription = this.consumer()
  }

  stop() {
    this.consumerSubscription.unsubscribe();
    this.producerSubscription.unsubscribe();
  }

  getProcessUnit() {
    return Promise.resolve({});
  }

  producer() {

    this.getProcessUnit().then((processUnit) => {

      if (processUnit) {
        this.producerStore.next(processUnit);
      } else {
        setTimeout(() => (this.producer()), TIMEOUT)
      }

    });
    
  }

  process(processUnit) {
    return Promise.resolve(true);
  }

  consumer() {
    return this.producerStore.subscribe((processUnit) => {
      this.process(processUnit).then(() => {
        this.consumerStore.next(true);
      })
    })
  }
}
