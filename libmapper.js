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
  constructor(name) {
    this.wsUrl = "ws://localhost:5001/ws"
    this.name = name;
    this.signals = [];
    this.deviceId = -1;
    this.sessionId = -1;
    this.signalId = -1;
    this.ws = new WebSocket(this.wsUrl);

    this.ws.onopen = (event) => {
      // this.ws.send("[libmapper] websocket connection is open");
    };

    this.ws.onmessage = async (msg) => {
      var m = JSON.parse(msg.data);
      console.log(m);
      if (m.Op == 3) {
        this.sessionId = m.Data;
        // document.getElementById("session").innerText = m.Data;
        // create device
        await fetch("http://localhost:5001/devices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Session-ID": this.sessionId.toString(),
          },
          body: JSON.stringify({
            name: "SliderMapper",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Created device ", data.device_id);
            this.deviceId = data.device_id;
            // document.getElementById("device").innerText = data.device_id;
          });
        // create signal
        await fetch(`http://localhost:5001/devices/${this.deviceId}/signals`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Session-ID": this.sessionId.toString(),
          },
          body: JSON.stringify({
            direction: 2, // output
            name: "Slider",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Created signal ", data.signal_id);
            this.signalId = data.signal_id;
            // document.getElementById("signal").innerText = data.signal_id;
          });
      }
    };
    let _self = this
    setTimeout(() => _self.ws.send(JSON.stringify({ op: 0 })), 1000);
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
      // _self.ws.send(event.target.value);

      _self.ws.send(
        JSON.stringify({
          op: 2,
          data: {
            SignalId: _self.signalId,
            Value: parseFloat(event.target.value),
          },
        })
      );
    });

    // Initialize a signal, push to device list of signals and return
    let newSignal = new LibmapperSignal(element.id);
    this.signals.push(newSignal);
    return newSignal;
  }
}

export { LibmapperDevice, LibmapperSignal };
