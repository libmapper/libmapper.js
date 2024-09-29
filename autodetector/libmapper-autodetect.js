import { LibmapperDevice } from "../libmapper.js";
/**
 * @type {MutationObserver}
 */
let observer;

/**
 * @type {LibmapperDevice}
 */
let device;

function autoDiscover(existingDevice) {
  device = existingDevice; // Associated with existing libmapper device

  var elements = document.querySelectorAll("[mpr-signal-name]");
  elements.forEach(registerElement);
}

/**
 * @param {HTMLElement} element
 */
async function registerElement(element) {
  await device.addSignal(element, getType(element));
}

/**
 *
 * @param {HTMLElement} element
 * @returns {string}
 */
function getType(element) {
  if (element instanceof HTMLInputElement && !element.disabled) {
    return "OUTGOING";
  }
  return "INCOMING";
}

document.addEventListener("DOMContentLoaded", autoDiscover);

export { autoDiscover };
