import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent implements OnInit {
  userForms: FormGroup;
  submittedData: any[] = [];

  ngOnInit(): void {
    this.userForms = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]), // Required field
      username: new FormControl('', [Validators.required]), // Required field
      email: new FormControl('', [Validators.required, Validators.email]), // Required and must be a valid email
      address: new FormGroup({
        street: new FormControl('', [Validators.required]), // Required field
        suite: new FormControl(''),
        city: new FormControl('', [Validators.required]), // Required field
        zipcode: new FormControl('', [Validators.required]), // Required field
      })
    });

    // const storedData = localStorage.getItem('submittedData');
    // if (storedData) {
    //   this.submittedData = JSON.parse(storedData);
    // }
  }

  onSubmit() {
    if (this.userForms.valid) { // Check if the form is valid
      this.submittedData.push(this.userForms.value);
      console.log("All Data", this.submittedData);
      // localStorage.setItem('submittedData', JSON.stringify(this.submittedData)); // Store in local storage
      this.userForms.reset(); 
    } else {
      console.error("Form is invalid. Please fill out all required fields.");
    }
  }
}
