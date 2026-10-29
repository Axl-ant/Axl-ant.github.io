import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';
import { Education } from '../models/education/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];

  constructor(public educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducation()
      .valueChanges({ idField: 'id' })
      .subscribe(data => {
        this.educationList = data;
      });
  }
}
