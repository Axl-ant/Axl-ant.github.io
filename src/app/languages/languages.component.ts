import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';
import { Language } from '../models/languages/languages.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements OnInit {
  languagesList: Language[] = [];

  constructor(public languagesService: LanguagesService) {}

  ngOnInit(): void {
    this.languagesService.getLanguages()
      .valueChanges({ idField: 'id' })
      .subscribe(data => {
        this.languagesList = data;
      });
  }
}
