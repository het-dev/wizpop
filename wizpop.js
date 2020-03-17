import React from "react";
import ReactDOM from "react-dom";
import WizpopContainer from "./wizpopContainer";

/**
 * @param content - React component to show in popup container
 * @param onDismiss - Callback function which should be called before dismissed
 * @param scrollable - Enable scrolling popup container when overflowed
 * @param requireDismiss - If true, dismiss by overlay click and show popup close button
 */
export default wizpop = (
  content,
  onDismiss,
  scrollable = false,
  requireDismiss = true
) => {
  const root = document.getElementById("root");
  if (!root) {
    console.error("should have root id element to show wizpop");
    return;
  }

  let wizpop = document.getElementById("wizpop");
  if (!wizpop) {
    wizpop = document.createElement("div");
    wizpop.setAttribute("id", "wizpop");
    root.appendChild(wizpop);
  }

  const dismiss = () => {
    if (onDismiss) onDismiss();
    ReactDOM.render(null, wizpop);
  };

  if (!content) {
    dismiss();
    return;
  }

  ReactDOM.render(
    <WizpopContainer
      dismiss={requireDismiss ? dismiss : null}
      scrollable={scrollable}
    >
      {React.cloneElement(content, { dismiss })}
    </WizpopContainer>,
    wizpop
  );
};
