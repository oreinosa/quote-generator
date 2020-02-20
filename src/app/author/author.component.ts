import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { QuoteContainer } from '../quote-container';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent extends QuoteContainer {
  author: string = "";
  constructor(
    private quotesService: QuotesService
  ) {
    super();
  }

  ngOnInit() {

  }

  getQuote(author: string) {
    return this.quotesService.getWordByAuthor(author).pipe(tap(quote => this.loading = false));
  }

}
