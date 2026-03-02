import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-tabs.component.html',
  styleUrl: './course-tabs.component.css'
})
export class CourseTabsComponent {
  @Input({ required: true }) activeTab: 'angular' | 'spring' = 'angular';
  @Output() tabChange = new EventEmitter<'angular' | 'spring'>();

  selectTab(tab: 'angular' | 'spring'): void {
    this.tabChange.emit(tab);
  }
}
