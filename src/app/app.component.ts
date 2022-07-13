import { Component, OnInit } from '@angular/core';

import {
  MONTH_LIST,
  ROLE_LIST,
  DEFAULT_ROLE,
  ROLE_EXPERIENCE,
} from './app.constant';
import { IDropdownValue } from './shared';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  days: IDropdownValue[] = [];
  months: IDropdownValue[] = [];
  years: IDropdownValue[] = [];
  roles: IDropdownValue[] = [];
  experiences: { min: number; max: number }[] = [...ROLE_EXPERIENCE];

  day = 0;
  month = 0;
  year = 0;
  role = 0;
  experience = 0;

  ngOnInit(): void {
    this.initDate();
    this.initRoles();
  }

  changeMonth(): void {
    this.setMaxDays();
  }

  changeYear(): void {
    this.setMaxDays();
  }

  changeRole(): void {
    this.setExperience();
  }

  changeEcperience(): void {
    this.setRoleByExperience();
  }

  private initDate(): void {
    for (let i = 0; i < 31; i++) {
      this.days.push({
        value: i,
        title: i + 1,
        disabled: false,
      });
    }

    for (let i = 0; i < MONTH_LIST.length; i++) {
      this.months.push({
        value: i + 1,
        title: MONTH_LIST[i],
        disabled: false,
      });
    }

    const currentYear = new Date().getFullYear();
    for (let i = 1992; i <= currentYear; i++) {
      this.years.push({
        value: i,
        title: i,
        disabled: false,
      });
    }

    this.day = this.days[0].value;
    this.month = this.months[0].value;
    this.year = this.years[0].value;
    this.setMaxDays();
  }

  private setMaxDays(): void {
    const countDays = new Date(this.year, this.month, 0).getDate();
    this.days = this.days.map((d) => ({
      ...d,
      disabled: d.value + 1 > countDays,
    }));
  }

  private initRoles(): void {
    this.roles = ROLE_LIST.map((role) => ({
      value: role.value,
      title: role.title,
      disabled: false,
    }));

    this.role = this.roles.find((role) => role.title === DEFAULT_ROLE).value;
    this.setExperience();
  }

  private setExperience(): void {
    const role = this.roles.find((r) => r.value === this.role);
    this.experience = this.experiences.findIndex(
      (e) => e.min <= this.role && e.max >= this.role
    );
  }

  private setRoleByExperience(): void {
    const experience = this.experiences[this.experience];
    const role = this.roles.find(
      (r) => experience.min <= r.value && experience.max >= r.value
    );
    this.role = role.value;
  }
}
