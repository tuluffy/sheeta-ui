/**
 * @description React component with es module
 * @email tuluffy@163.com
 * @date 2019-05-31
 */

import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".button-container {\n    padding: 10px 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: #1790ff;\n    color: #fff;\n    font-size: 14px;\n    border-radius: 4px;\n}";
styleInject(css);

function Button(props) {
  var callback = props.callback;

  var handlerClick = function handlerClick() {
    !!callback && callback();
  };

  return React.createElement("div", {
    className: "button-container",
    onClick: handlerClick
  }, "Primary");
}

export { Button };
