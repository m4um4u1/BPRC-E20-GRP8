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

  // following functions are PackML commands taken from the example website in "projektoplæg"

  onStartClicked(): void{
    // function for starting the machine
    this.snackBar.open('Machine is Started', 'OK');
  }

  onStopClicked(): void {
    // function for stopping the machine
    this.snackBar.open('Machine is Stopped', 'OK');
  }

  onResetClicked(): void {
  // function for reseting the machine
    this.snackBar.open('Machine is Reseted', 'OK');
  }

  onAbortClicked(): void {
  // function for aborting a operation
    this.snackBar.open('Aborted operation', 'OK');
  }

  onClearClicked(): void {
  // function to clear
    this.snackBar.open('Cleared operations', 'OK');
  }
}
