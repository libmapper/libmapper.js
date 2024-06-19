/**
 *
 ** libmapper.js, bringing the libmapper ecosystem to the browser via websockets
 *
 */

class LibmapperSignal {
  constructor(name) {
    this.name = name;

    // Todo: Emit message to ws server to initialize a signal.
  }
}

class LibmapperDevice {
  constructor(name, wsUrl) {
    this.name = name;
    this.signals = [];

    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = (event) => {
      this.ws.send("[libmapper] websocket connection is open");
    };
  }

  printSignals() {
    console.log(this.signals);
    this.signals.forEach((signal) => console.log(signal.name));
  }

  isValidElement(element) {
    // TODO: This is a stub
    // TODO: Determine what other HTML elements we want to support & how
    if (element.nodeName == "INPUT") {
      return true;
    } else {
      return false;
    }
  }

  addSignal(element) {
    // Debugging Statement
    //   console.log(
    //     element.id,
    //     element.nodeName,
    //     element.type,
    //     element.min,
    //     element.max,
    //     element.value
    //   );

    if (!this.isValidElement(element)) {
      console.log("This is not a valid element");
      return null;
    }

    var _self = this; // Javascript wonkyness..

    element.addEventListener("input", (event) => {
      _self.ws.send(event.target.value);
    });

    // Initialize a signal, push to device list of signals and return
    let newSignal = new LibmapperSignal(element.id);
    this.signals.push(newSignal);
    return newSignal;
  }
}

export { LibmapperDevice, LibmapperSignal };
