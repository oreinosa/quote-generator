import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  randomQuote$: Observable<any>;
  loading = true;
  constructor(
    private quotesService: QuotesService
  ) { }

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.loading = true;
    this.randomQuote$ = this.quotesService.getRandom().pipe(tap(quote => this.loading = false));
  }

}
