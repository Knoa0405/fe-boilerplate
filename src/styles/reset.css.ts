import { globalStyle } from "@vanilla-extract/css";
import { reset } from "./layers.css";

/**
 * Remove all the styles of the "User-Agent-Stylesheet", except for the
 * 'display' property
 *
 * - The "symbol *" part is to solve Firefox SVG sprite bug
 * - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS
 *   hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
 */
globalStyle(
  "*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))",
  {
    "@layer": {
      [reset]: {
        all: "unset",
        display: "revert",
      },
    },
  }
);

globalStyle("body", {
  "@layer": {
    [reset]: {
      margin: 0,
    },
  },
});

/**
 * Preferred box-sizing value
 */

globalStyle("*, *::before, *::after", {
  "@layer": {
    [reset]: {
      boxSizing: "border-box",
    },
  },
});

/**
 * Fix mobile Safari increase font-size on landscape mode
 */
globalStyle("html", {
  "@layer": {
    [reset]: {
      MozTextSizeAdjust: "none",
      WebkitTextSizeAdjust: "none",
      textSizeAdjust: "none",
    },
  },
});

/**
 * Reapply the pointer cursor for anchor tags
 */
globalStyle("a, button", {
  "@layer": {
    [reset]: {
      cursor: "pointer",
    },
  },
});

/**
Correct the inability to style clickable types in iOS and Safari.
*/
globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  "@layer": {
    [reset]: {
      WebkitAppearance: "button",
    },
  },
});

/**
Remove the inheritance of text transform in Edge and Firefox.
*/
globalStyle("button, select", {
  "@layer": {
    [reset]: {
      textTransform: "none",
    },
  },
});

/**
 * Remove list styles (bullets/numbers)
 */
globalStyle("ol, ul, menu, summary", {
  "@layer": {
    [reset]: {
      listStyle: "none",
    },
  },
});

/**
 * For images to not be able to exceed their container
 */
globalStyle("img", {
  "@layer": {
    [reset]: {
      maxInlineSize: "100%",
      maxBlockSize: "100%",
    },
  },
});

/**
 * Removes spacing between cells in tables
 */
globalStyle("table", {
  "@layer": {
    [reset]: {
      borderCollapse: "collapse",
    },
  },
});

/**
 * Safari - solving issue when using user-select:none on the <body> text input
 * doesn't working
 */
globalStyle("input, textarea", {
  "@layer": {
    [reset]: {
      WebkitUserSelect: "auto",
    },
  },
});

/**
 * Revert the 'white-space' property for textarea elements on Safari
 */
globalStyle("textarea", {
  "@layer": {
    [reset]: {
      whiteSpace: "revert",
    },
  },
});

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/
globalStyle(
  "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button",
  {
    "@layer": {
      [reset]: {
        height: "auto",
      },
    },
  }
);

/**
 * Reset default text opacity of input placeholder
 */
globalStyle("::placeholder", {
  "@layer": {
    [reset]: {
      color: "unset",
    },
  },
});
