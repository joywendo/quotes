import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{Quote} from '..goal'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

// the quotedetele function is used for event emission
  quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}