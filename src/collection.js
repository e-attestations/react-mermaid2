export default [
  {
    name: "vertical flowchart",
    body: `graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
    `,
  },
  {
    name: "horizontal flowchart",
    body: `graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
    `
  },
  {
    name: "sequenceDiagram",
    body: `sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    rect rgb(0, 200, 0)
      loop Healthcheck
          John->>John: Fight against hypochondria
      end
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
    `,
  },
  {
    name: "Gantt",
    body: `gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram to mermaid
    excludes weekdays 2014-01-10
    
    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d
    `,
  },
  {
    name: "StateDiagram",
    body: `stateDiagram
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]`
  },
  {
    name: "pie",
    body: `pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
    `,
  },
  {
    name: 'class',
    body : `
    classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
    `
  },
  {
    name: 'Git graph',
    body: `
    gitGraph:
    options
    {
        "nodeSpacing": 150,
        "nodeRadius": 10
    }
    end
    commit
    branch newbranch
    checkout newbranch
    commit
    commit
    checkout master
    commit
    commit
    merge newbranch
  `}
]
