import React, { useState } from "react"
import mermaid, { mermaidAPI } from "mermaid"

export default Mermaid = ({ name, children }) => {
  const [diagram, setDiagram] = useState("Loading diagram...")
  mermaidAPI.render(name, children.toString(), html => setDiagram(html))
  return (
    <div
      className={mermaid}
      dangerouslySetInnerHTML={{ __html: diagram }}
    ></div>
  )
}
