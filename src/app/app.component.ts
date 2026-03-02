import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularOutlineComponent } from './components/angular-outline/angular-outline.component';
import { CourseTabsComponent } from './components/course-tabs/course-tabs.component';
import { SpringOutlineComponent } from './components/spring-outline/spring-outline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CourseTabsComponent, AngularOutlineComponent, SpringOutlineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeTab: 'angular' | 'spring' = 'angular';

  onTabChange(tab: 'angular' | 'spring'): void {
    this.activeTab = tab;
  }
}
