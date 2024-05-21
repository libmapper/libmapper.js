// module.exports = function dev(name) {
//   console.log("Hello " + name);
// };

class LibmapperDevice extends HTMLElement {
  // Define the new web component

  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();

    console.log("Constructed", this);

    this.innerHTML =
      "<input id='libmapperSig' type='range' min='0' max='10' step='1'>";

    this.ws = new WebSocket("ws://localhost:5000/echo");

    this.ws.onopen = () => {
      this.ws.send("Bound to libmapper.js");
    };
  }

  get websocket(){
    console.log(this)
    return this.ws
  }

  updateSocket(e) {
    console.log(this)
    this.ws.send(e.target.value)
  }

  /**
   * Runs each time the element is appended to or moved in the DOM
   */
  connectedCallback() {
    console.log("connected!", this);

    // Attach a click event listener to the button
    let btn = this.querySelector("#libmapperSig");
    console.log(btn);
    btn.addEventListener("input", this.updateSocket);
  }

  /**
   * Runs when the element is removed from the DOM
   */
  disconnectedCallback() {
    console.log("disconnected", this);
  }
}

if ("customElements" in window) {
  customElements.define("libmapper-device", LibmapperDevice);
}
