import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';
import { Interest } from '../models/interests/interests.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interestsList: Interest[] = [];

  constructor(public interestsService: InterestsService) {}

  ngOnInit(): void {
    this.interestsService.getInterests()
      .valueChanges({ idField: 'id' })
      .subscribe(data => {
        this.interestsList = data;
      });
  }
}
