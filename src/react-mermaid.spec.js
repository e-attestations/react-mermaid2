import React from "react";
import { create } from "react-test-renderer";
describe("Mermaid component", () => {
  test("Render mermaid void diagram", () => {
    const button = create(<Mermaid />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});