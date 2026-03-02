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
  selector: 'app-spring-outline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spring-outline.component.html',
  styleUrl: './spring-outline.component.css'
})
export class SpringOutlineComponent {
  readonly phases: Phase[] = [
    {
      number: 'PHASE 01',
      title: 'Java and OOP Foundations',
      level: 'Foundation',
      duration: '2-3 Weeks',
      topics: [
        {
          name: 'Core Java',
          items: [
            'OOP: classes, inheritance, polymorphism, interfaces',
            'Collections: List, Map, Set, Queue',
            'Generics and type safety',
            'Exception handling patterns',
            'Java 17+ features'
          ]
        },
        {
          name: 'Functional and Modern Java',
          items: [
            'Lambda expressions and method references',
            'Streams API',
            'Optional for null safety',
            'CompletableFuture basics'
          ]
        },
        {
          name: 'Build Tools',
          items: [
            'Maven: POM, lifecycle, plugins',
            'Gradle: build.gradle, tasks',
            'Dependency management and versioning',
            'Multi-module projects'
          ]
        }
      ]
    },
    {
      number: 'PHASE 02',
      title: 'Spring Core and IoC',
      level: 'Foundation',
      duration: '2 Weeks',
      topics: [
        {
          name: 'Spring Framework',
          items: [
            'IoC container and ApplicationContext',
            'Dependency injection patterns',
            'Bean scopes',
            '@Component, @Service, @Repository, @Controller'
          ]
        },
        {
          name: 'Spring Boot Essentials',
          items: [
            'Auto-configuration and @SpringBootApplication',
            'application.properties and application.yml',
            'Profiles: dev, staging, prod',
            'Actuator and externalized configuration'
          ]
        },
        {
          name: 'Spring AOP',
          items: [
            'Aspect-oriented programming concepts',
            '@Aspect, @Before, @After, @Around',
            'Pointcut expressions',
            'Use cases: logging, auditing, transactions'
          ]
        }
      ]
    },
    {
      number: 'PHASE 03',
      title: 'REST API Development',
      level: 'Intermediate',
      duration: '2-3 Weeks',
      topics: [
        {
          name: 'Spring MVC and REST',
          items: [
            '@RestController and @RequestMapping',
            'GET, POST, PUT, PATCH, DELETE',
            'Path variables and query params',
            'ResponseEntity and status codes',
            'Content negotiation'
          ]
        },
        {
          name: 'Validation and Error Handling',
          items: [
            'Bean Validation',
            '@Valid, @NotNull, @Size, @Pattern',
            'Custom validators',
            '@ControllerAdvice and @ExceptionHandler',
            'Problem Details'
          ]
        },
        {
          name: 'API Design Best Practices',
          items: [
            'REST resource naming conventions',
            'Versioning strategies',
            'OpenAPI / Swagger docs',
            'DTO pattern and MapStruct'
          ]
        }
      ]
    },
    {
      number: 'PHASE 04',
      title: 'Data and Persistence',
      level: 'Intermediate',
      duration: '3 Weeks',
      topics: [
        {
          name: 'Spring Data JPA',
          items: [
            'JPA entities and relationships',
            'JpaRepository and CrudRepository',
            'JPQL and native queries',
            'Pagination and sorting',
            'Projections and DTO queries'
          ]
        },
        {
          name: 'Database Management',
          items: [
            'Flyway / Liquibase migrations',
            'HikariCP connection pooling',
            'Multiple datasources',
            '@Transactional management',
            'Locking strategies'
          ]
        },
        {
          name: 'NoSQL and Caching',
          items: [
            'Spring Data MongoDB',
            'Redis with Spring Cache',
            '@Cacheable, @CacheEvict, @CachePut',
            'TTL and LRU strategies'
          ]
        },
        {
          name: 'Query Optimization',
          items: [
            'N+1 problem and fetch strategies',
            '@EntityGraph',
            'Criteria API and Specifications',
            'QueryDSL'
          ]
        }
      ]
    },
    {
      number: 'PHASE 05',
      title: 'Security',
      level: 'Intermediate',
      duration: '2-3 Weeks',
      topics: [
        {
          name: 'Spring Security Core',
          items: [
            'Authentication vs authorization',
            'SecurityFilterChain configuration',
            'UserDetailsService and PasswordEncoder',
            'Method-level security',
            'CORS and CSRF configuration'
          ]
        },
        {
          name: 'JWT and OAuth2',
          items: [
            'Stateless JWT authentication',
            'OAuth2 Resource Server',
            'OAuth2 Client login flow',
            'Keycloak / Auth0 integration',
            'Token refresh and revocation'
          ]
        },
        {
          name: 'Security Best Practices',
          items: [
            'OWASP Top 10 for APIs',
            'Input sanitization and SQL injection prevention',
            'Rate limiting and brute-force protection',
            'Secrets management'
          ]
        }
      ]
    },
    {
      number: 'PHASE 06',
      title: 'Messaging and Async Processing',
      level: 'Advanced',
      duration: '2 Weeks',
      topics: [
        {
          name: 'Apache Kafka',
          items: [
            'Producers, consumers, consumer groups',
            'Spring Kafka with @KafkaListener',
            'Topics, partitions, offsets',
            'Exactly-once semantics',
            'Schema Registry and Avro'
          ]
        },
        {
          name: 'RabbitMQ',
          items: [
            'Exchanges, queues, bindings',
            'Spring AMQP and @RabbitListener',
            'Dead-letter queues',
            'Message acknowledgment strategies'
          ]
        },
        {
          name: 'Async and Scheduling',
          items: [
            '@Async and thread pool config',
            '@Scheduled and cron',
            'Spring Batch',
            'ApplicationEventPublisher'
          ]
        }
      ]
    },
    {
      number: 'PHASE 07',
      title: 'Microservices Architecture',
      level: 'Advanced',
      duration: '3 Weeks',
      topics: [
        {
          name: 'Service Communication',
          items: [
            'RestTemplate vs WebClient',
            'OpenFeign clients',
            'gRPC with Spring Boot',
            'Service discovery with Eureka',
            'Load balancing'
          ]
        },
        {
          name: 'Spring Cloud',
          items: [
            'API Gateway',
            'Config Server',
            'Resilience4j circuit breaker',
            'Distributed tracing',
            'Saga pattern'
          ]
        },
        {
          name: 'Reactive Programming',
          items: [
            'Project Reactor: Mono, Flux',
            'Spring WebFlux',
            'Reactive data with R2DBC',
            'Backpressure strategies'
          ]
        },
        {
          name: 'Design Patterns',
          items: [
            'CQRS',
            'Event Sourcing',
            'Outbox pattern',
            'Strangler Fig migration'
          ]
        }
      ]
    },
    {
      number: 'PHASE 08',
      title: 'Testing',
      level: 'Advanced',
      duration: '2 Weeks',
      topics: [
        {
          name: 'Unit Testing',
          items: [
            'JUnit 5 and AssertJ',
            'Mockito: @Mock, @InjectMocks, @Spy',
            'Parameterized tests',
            'Test slices'
          ]
        },
        {
          name: 'Integration Testing',
          items: [
            '@SpringBootTest full context',
            'Testcontainers',
            'MockMvc and WebTestClient',
            'WireMock for external APIs'
          ]
        },
        {
          name: 'Contract and Performance',
          items: [
            'Spring Cloud Contract and Pact',
            'JMeter / Gatling load testing',
            'JaCoCo coverage'
          ]
        }
      ]
    },
    {
      number: 'PHASE 09',
      title: 'DevOps, Cloud and Observability',
      level: 'Expert',
      duration: '2-3 Weeks',
      topics: [
        {
          name: 'Containerization',
          items: [
            'Docker and multi-stage builds',
            'Docker Compose',
            'Jib for images',
            'Kubernetes fundamentals',
            'Helm charts'
          ]
        },
        {
          name: 'CI/CD Pipelines',
          items: [
            'GitHub Actions / GitLab CI / Jenkins',
            'Build, test, scan, deploy stages',
            'SAST with Sonar/Snyk',
            'Blue-Green and Canary deployments'
          ]
        },
        {
          name: 'Observability',
          items: [
            'Micrometer and Prometheus',
            'Grafana dashboards',
            'Structured logging with ELK',
            'OpenTelemetry tracing',
            'Actuator health endpoints'
          ]
        },
        {
          name: 'Cloud Deployment',
          items: [
            'AWS, Azure, GCP targets',
            'Secrets management',
            'Infrastructure as code with Terraform basics'
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
