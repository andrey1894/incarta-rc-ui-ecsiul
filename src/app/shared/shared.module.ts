import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownComponent } from './dropdown';

@NgModule({
  declarations: [DropdownComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  exports: [DropdownComponent],
})
export class SharedModule {}
