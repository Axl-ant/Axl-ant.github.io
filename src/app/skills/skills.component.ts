import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills-service/skills.service';
import { Skill } from '../models/skills/skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillsList: Skill[] = [];

  constructor(public skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills()
      .valueChanges({ idField: 'id' })
      .subscribe(data => {
        this.skillsList = data;
      });
  }
}
