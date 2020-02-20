import { Observable } from 'rxjs';
import { Quote } from './quote';

export abstract class QuoteContainer {
  quote$: Observable<Quote>;
  loading = false;
  constructor(
  ) { }

  ngOnInit() {
    this.setQuote();
  }

  abstract getQuote(query?: string): Observable<Quote>;

  setQuote(query?: string) {
    this.loading = true;
    this.quote$ = this.getQuote(query);
  }
}
