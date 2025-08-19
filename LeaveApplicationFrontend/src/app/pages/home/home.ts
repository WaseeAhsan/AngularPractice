import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeData } from "../employee-data/employee-data";

@Component({
  selector: 'app-home',
  standalone:true, 
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  
}
