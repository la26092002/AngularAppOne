import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = ''; // must be initialized
  @Input() color: string = '';// must be initialized

  //EventEmitter when you want to create a custom event that can be listened to by other components or directives.

  @Output() btnClick = new EventEmitter();//because we want our component reuseble

  /*
  Inside the onClick method, you are using the emit method of the btnClick property 
  (which is an instance of EventEmitter) to emit a custom event. This event doesn't 
  have any data associated with it; it's just a signal to notify any parent component 
  that this button was clicked.
  */
  onClick() {
    this.btnClick.emit();
  }

}
