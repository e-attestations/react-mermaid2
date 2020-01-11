import React from "react"
import Mermaid from "./Mermaid"
import charts from "./collection"

function App() {
  
  return (
    <>
      <h1>react-mermaid2 demonstration page</h1>
      
      <div className="App">
        <h2>The &lt;Mermaid&gt; React component in action</h2>
        {charts.map((chart, index) => (
          <section key={index}>
            <h3>{`Presenting Mermaid's ${chart.name} diagram`}</h3>
            <pre className="code">{chart.body}</pre>
            <Mermaid
              name={chart.name}
              chart={chart.body}
              config={{
                theme: 'forest'
              }}
            />
          </section>
        ))}
      </div>
    </>
  )
}

export default App
