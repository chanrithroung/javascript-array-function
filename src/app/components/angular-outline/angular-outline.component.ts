import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Topic {
  name: string;
  items: string[];
}

interface Phase {
  number: string;
  title: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced' | 'Expert';
  duration: string;
  topics: Topic[];
}

@Component({
  selector: 'app-angular-outline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-outline.component.html',
  styleUrl: './angular-outline.component.css'
})
export class AngularOutlineComponent {
  readonly phases: Phase[] = [
    {
      number: 'PHASE 01',
      title: 'Foundations',
      level: 'Foundation',
      duration: '2-3 Weeks',
      topics: [
        {
          name: 'TypeScript Essentials',
          items: [
            'Types, interfaces, enums, generics',
            'Decorators and metadata',
            'Strict mode and tsconfig',
            'Utility types: Partial, Record, Pick',
            'Type narrowing and guards'
          ]
        },
        {
          name: 'Angular CLI and Workspace',
          items: [
            'Generating components, services, modules',
            'Workspaces and monorepo setup',
            'Build targets and configurations',
            'Schematics overview'
          ]
        },
        {
          name: 'Components and Templates',
          items: [
            'Component lifecycle hooks',
            'Input and Output with EventEmitter',
            'ngIf, ngFor, ngSwitch',
            'Built-in and custom pipes',
            'ViewChild and ContentChild'
          ]
        }
      ]
    },
    {
      number: 'PHASE 02',
      title: 'Modules and DI',
      level: 'Foundation',
      duration: '2 Weeks',
      topics: [
        {
          name: 'NgModules',
          items: [
            'Feature, Shared, Core modules',
            'Lazy loading modules',
            'forRoot and forChild patterns',
            'Standalone components (Angular 14+)'
          ]
        },
        {
          name: 'Dependency Injection',
          items: [
            'Providers: root, module, component',
            'InjectionToken',
            'Hierarchical injectors',
            'Factory and value providers',
            'Tree-shakable providers'
          ]
        }
      ]
    },
    {
      number: 'PHASE 03',
      title: 'Routing and Navigation',
      level: 'Intermediate',
      duration: '2 Weeks',
      topics: [
        {
          name: 'Router Fundamentals',
          items: [
            'Route definitions and RouterOutlet',
            'Route parameters and query params',
            'Child and auxiliary routes',
            'Programmatic navigation'
          ]
        },
        {
          name: 'Advanced Routing',
          items: [
            'Route Guards: CanActivate, CanDeactivate',
            'Resolvers for data prefetching',
            'Lazy-loaded feature modules',
            'Router events and scroll restoration',
            'Functional guards (Angular 15+)'
          ]
        }
      ]
    },
    {
      number: 'PHASE 04',
      title: 'Forms and Validation',
      level: 'Intermediate',
      duration: '2 Weeks',
      topics: [
        {
          name: 'Reactive Forms',
          items: [
            'FormControl, FormGroup, FormArray',
            'FormBuilder service',
            'Dynamic form generation',
            'Typed forms (Angular 14+)'
          ]
        },
        {
          name: 'Validation',
          items: [
            'Built-in validators',
            'Custom sync and async validators',
            'Cross-field validation',
            'Clean error messaging'
          ]
        },
        {
          name: 'Template-Driven Forms',
          items: [
            'ngModel and two-way binding',
            'When to use vs reactive forms',
            'ControlValueAccessor'
          ]
        }
      ]
    },
    {
      number: 'PHASE 05',
      title: 'RxJS and State Management',
      level: 'Intermediate',
      duration: '3 Weeks',
      topics: [
        {
          name: 'RxJS Core',
          items: [
            'Observables, Subjects, BehaviorSubject',
            'map, filter, switchMap, mergeMap, concatMap',
            'combineLatest, forkJoin, zip',
            'catchError and retry',
            'takeUntil and memory leak prevention'
          ]
        },
        {
          name: 'NgRx',
          items: [
            'Store, Actions, Reducers, Selectors',
            'Effects for side effects',
            'Entity adapter and ComponentStore',
            'NgRx Signals'
          ]
        },
        {
          name: 'Angular Signals',
          items: [
            'signal, computed, effect',
            'Signals vs Observables',
            'Signal-based inputs and queries',
            'toSignal and toObservable interop'
          ]
        }
      ]
    },
    {
      number: 'PHASE 06',
      title: 'HTTP, APIs and Security',
      level: 'Advanced',
      duration: '2 Weeks',
      topics: [
        {
          name: 'HttpClient',
          items: [
            'GET, POST, PUT, DELETE requests',
            'HTTP interceptors',
            'Request and response transformation',
            'Error handling and retry strategies',
            'File upload and download'
          ]
        },
        {
          name: 'Auth and Security',
          items: [
            'JWT authentication flow',
            'OAuth2 / OIDC basics',
            'Token refresh interceptor',
            'Route protection strategies',
            'XSS and CSRF prevention'
          ]
        }
      ]
    },
    {
      number: 'PHASE 07',
      title: 'Performance and Architecture',
      level: 'Advanced',
      duration: '3 Weeks',
      topics: [
        {
          name: 'Change Detection',
          items: [
            'Default vs OnPush strategy',
            'Zone.js and zoneless Angular',
            'markForCheck and detectChanges',
            'Profiling with Angular DevTools'
          ]
        },
        {
          name: 'Rendering and SSR',
          items: [
            'Angular Universal',
            'Server-side rendering setup',
            'Static site generation',
            'Hydration strategies',
            'Deferrable views (@defer)'
          ]
        },
        {
          name: 'Enterprise Architecture',
          items: [
            'Monorepo with Nx',
            'Micro-frontends with Module Federation',
            'Feature-based folder structure',
            'Smart vs dumb component pattern',
            'Design system integration'
          ]
        },
        {
          name: 'Bundle Optimization',
          items: [
            'Tree-shaking and code splitting',
            'Lazy loading assets and routes',
            'Bundle analysis',
            'Preloading strategies'
          ]
        }
      ]
    },
    {
      number: 'PHASE 08',
      title: 'Testing, CI/CD and DevOps',
      level: 'Expert',
      duration: '2-3 Weeks',
      topics: [
        {
          name: 'Unit Testing',
          items: [
            'Jasmine and Karma setup',
            'Jest alternative setup',
            'TestBed and component testing',
            'Mocking services and HTTP tests',
            'Testing NgRx store and effects'
          ]
        },
        {
          name: 'E2E Testing',
          items: [
            'Cypress or Playwright',
            'Page Object Model pattern',
            'API mocking',
            'Visual regression testing'
          ]
        },
        {
          name: 'CI/CD and Tooling',
          items: [
            'GitHub Actions or GitLab CI',
            'ESLint Angular rules',
            'Prettier and Husky hooks',
            'Docker containerization',
            'Cloud deployment (AWS/Azure/GCP)'
          ]
        },
        {
          name: 'Observability',
          items: [
            'Global error handling',
            'Monitoring with Sentry or Datadog',
            'Performance budgets',
            'Lighthouse CI integration'
          ]
        }
      ]
    }
  ];

  tagClass(level: Phase['level']): string {
    switch (level) {
      case 'Foundation':
        return 'tag-foundation';
      case 'Intermediate':
        return 'tag-intermediate';
      case 'Advanced':
        return 'tag-advanced';
      default:
        return 'tag-expert';
    }
  }
}
