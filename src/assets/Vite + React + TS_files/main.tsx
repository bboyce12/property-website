import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.tsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5eb80bed"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/boycewan/Documents/Profolio for web dev/property-website/property-website/src/main.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5eb80bed"; const useEffect = __vite__cjsImport3_react["useEffect"];
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=5eb80bed"; const React = __vite__cjsImport4_react.__esModule ? __vite__cjsImport4_react.default : __vite__cjsImport4_react;
import __vite__cjsImport5_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=5eb80bed"; const createRoot = __vite__cjsImport5_reactDom_client["createRoot"];
import "/src/index.css";
import App from "/src/App.tsx?t=1739233967035";
import { fadeIn } from "/src/js/fadeIn.js";
const Main = () => {
  _s();
  useEffect(() => {
    fadeIn();
  }, []);
  return /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/Users/boycewan/Documents/Profolio for web dev/property-website/property-website/src/main.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
};
_s(Main, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Main;
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxDEV(React.StrictMode, { children: [
    /* @__PURE__ */ jsxDEV(Main, {}, void 0, false, {
      fileName: "/Users/boycewan/Documents/Profolio for web dev/property-website/property-website/src/main.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this),
    " "
  ] }, void 0, true, {
    fileName: "/Users/boycewan/Documents/Profolio for web dev/property-website/property-website/src/main.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this)
);
var _c;
$RefreshReg$(_c, "Main");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/boycewan/Documents/Profolio for web dev/property-website/property-website/src/main.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/boycewan/Documents/Profolio for web dev/property-website/property-website/src/main.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWVM7MkJBWlQ7QUFBcUJBLG9CQUFpQixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdDLE9BQU9DLFdBQVc7QUFDbEIsU0FBU0Msa0JBQWtCO0FBQzNCLE9BQU87QUFDUCxPQUFPQyxTQUFTO0FBQ2hCLFNBQVNDLGNBQWM7QUFFdkIsTUFBTUMsT0FBaUJBLE1BQU07QUFBQUMsS0FBQTtBQUMzQk4sWUFBVSxNQUFNO0FBQ2RJLFdBQU87QUFBQSxFQUNULEdBQUcsRUFBRTtBQUVMLFNBQU8sdUJBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUk7QUFDYjtBQUVBRSxHQVJNRCxNQUFjO0FBQUFFLEtBQWRGO0FBU04sTUFBTUcsT0FBT04sV0FBV08sU0FBU0MsZUFBZSxNQUFNLENBQUU7QUFDeERGLEtBQUtHO0FBQUFBLEVBQ0gsdUJBQUMsTUFBTSxZQUFOLEVBQ0M7QUFBQSwyQkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSztBQUFBLElBQUc7QUFBQSxPQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNGO0FBQUUsSUFBQUo7QUFBQUssYUFBQUwsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImZhZGVJbiIsIk1haW4iLCJfcyIsIl9jIiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaWN0TW9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC50c3hcIjtcbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gXCIuL2pzL2ZhZGVJblwiO1xuLy8gTmVlZCB0byB1bmRlcnN0YW5kIGhvd1xuY29uc3QgTWFpbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmFkZUluKCk7IC8vIENhbGwgZmFkZUluIG9uIGluaXRpYWwgbG9hZFxuICB9LCBbXSk7IC8vIFJ1bnMgb25jZSBvbiBtb3VudFxuXG4gIHJldHVybiA8QXBwIC8+O1xufTtcblxuLy8gUmVuZGVyIHRoZSBhcHBcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSEpO1xucm9vdC5yZW5kZXIoXG4gIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgIDxNYWluIC8+IHsvKiBVc2UgdGhlIE1haW4gY29tcG9uZW50ICovfVxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sImZpbGUiOiIvVXNlcnMvYm95Y2V3YW4vRG9jdW1lbnRzL1Byb2ZvbGlvIGZvciB3ZWIgZGV2L3Byb3BlcnR5LXdlYnNpdGUvcHJvcGVydHktd2Vic2l0ZS9zcmMvbWFpbi50c3gifQ==