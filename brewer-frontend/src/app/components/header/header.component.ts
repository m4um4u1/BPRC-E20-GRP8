import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //following functions are PackML commands taken from the example website in "projektoplæg"

  onStartClicked(){
    //function for starting the machine
    this.snackBar.open('Machine is Started');
  }

  onStopClicked() {
    //function for stopping the machine
    this.snackBar.open('Machine is Stopped');
  }

  onResetClicked() {
  //function for reseting the machine
    this.snackBar.open('Machine is Reseted');
  }

  onAbortClicked() {
  //function for aborting a operation
    this.snackBar.open('Aborted operation');
  }

  onClearClicked() {
  //function to clear
    this.snackBar.open('Cleared operations');
  }

}
