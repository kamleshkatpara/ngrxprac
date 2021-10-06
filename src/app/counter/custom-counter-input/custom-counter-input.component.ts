import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value: number | any;
  channelName$: Observable<string> | any;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }))
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName())
  }

}
