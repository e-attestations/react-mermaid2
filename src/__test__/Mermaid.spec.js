import React from 'react'
import { create } from "react-test-renderer"
import Mermaid from '../Mermaid'

describe("Mermaid component", () => {

  test("Render mermaid void diagram", () => {
    const component = create(
    <Mermaid name='char1' chart={`graph LR;
    A-->B;
    B-->C;
    B-->D[plop lanflz eknlzeknfz];`
    }/>)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  
})
