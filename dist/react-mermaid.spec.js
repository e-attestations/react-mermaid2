"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = require("react-test-renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Mermaid component", () => {
  test("Render mermaid void diagram", () => {
    const button = (0, _reactTestRenderer.create)(_react.default.createElement(Mermaid, null));
    expect(button.toJSON()).toMatchSnapshot();
  });
});