import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //following functions are PackML commands taken from the example website in "projektoplæg"

  onStartClicked(){
    //function for starting the machine
  }

  onStopClicked() {
    //function for stopping the machine
  }

  onResetClicked() {
  //function for reseting the machine
  }

  onAbortClicked() {
  //function for aborting a operation
  }

  onClearClicked() {
  //function to clear
  }

}
