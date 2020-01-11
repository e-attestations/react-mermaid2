# React &lt;Mermaid&gt;

> A React 16.8+ (using Hooks) component to display [mermaid](https://github.com/knsv/mermaid) diagrams, flowcharts, gantt charts, etc.

![https://mermaid-js.github.io/mermaid/img/new-diagrams.png](https://mermaid-js.github.io/mermaid/img/new-diagrams.png)

Source : [https://mermaid-js.github.io/mermaid/#/](https://mermaid-js.github.io/mermaid/#/)

## Getting Started

- Install with [NPM](https://www.npmjs.org/)

```bash
npm install --save react-mermaid2
```

or 

```bash
yarn add react-mermaid2
```



## Usage

```javascript
import React from 'react';
import Mermaid from 'react-mermaid2';

export default MyComponentApp = () => {
  return (
      <Mermaid name="myDiagram">
        graph TD;
          A-->B;
          A-->C;
          B-->D;
          C-->D;
      </Mermaid>
  )
}
```


## Options


Property | Type     | Argument     | Default   | Description
---------|----------|--------------|-----------|------------
name     | `string` | `<optional>` | `mermaid` | The name of your mermaid diagram/flowchart/gantt etc.


## Developing

[react-mermaid2](https://github.com/e-attestations/react-mermaid2) is built using **ES6**+ with [React](https://reactjs.org/) v16.8 (with Hooks) using [babel](https://babeljs.io/) 7+.

### Install dependencies

After cloning the repo, go to the local copy, then install dependencies.

```bash
npm install
```

or 

```bash
yarn
```

### Build

Run the following task to compile from `src/` to `dist/`.

```bash
npm run build
```

or

```bash
yarn build
```

## Contributing

If you want to contribute to this project please take care to maintain the existing coding style.

Feel free to add unit tests for any new or changed functionality.


## License

Copyright (c) 2020 [e-Attestations](https://e-attestations.io)  
Licensed under the MIT license.
