/* eslint-disable import/prefer-default-export */
export function onEnter(e: KeyboardEvent) {
  if (e.key === "Enter" && document) {
    const element = document.activeElement as HTMLElement;
    element.click();
  }
}
