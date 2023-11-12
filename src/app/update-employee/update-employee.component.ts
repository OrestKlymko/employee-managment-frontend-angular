import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();


  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {
  }


  onsubmit() {
    this.route.params.subscribe(params => {
      this.employeeService.updateEmployee(params["id"], this.employee).subscribe(data => {
        this.goToEmployeeList()
      });
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe(data => this.employee = data);
  }

  goToEmployeeList() {
    this.router.navigate(["/employees"])
  }


}
