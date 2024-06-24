/**
 *
 ** libmapper.js, bringing the libmapper ecosystem to the browser via websockets
 *
 */

class LibmapperSignal {
  constructor(parentDev, element, signalId) {
    this.name = element.id;
    this.signalId = signalId;

    let _self = this;
    element.addEventListener("input", (event) => {
      parentDev.ws.send(
        JSON.stringify({
          op: 2,
          data: {
            SignalId: _self.signalId,
            Value: parseFloat(event.target.value),
          },
        })
      );
    });

    console.log(
      "Created new Signal with name: " + this.name + " and ID:" + this.signalId
    );

    // Todo: Emit message to ws server to initialize a signal.
  }

  static async _createSignal(signalName, min, max, deviceId, sessionId) {
    return new Promise((resolve, result) => {
      fetch(`http://localhost:5001/devices/${deviceId}/signals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Session-ID": sessionId.toString(),
        },

        // TODO: Confirm with backend API the correct way to call it & fix any bugs.
        body: JSON.stringify({
          direction: 2, // output
          name: signalName,
          min: min,
          max: max,
          type: 2,
          vector_length: 1,
          units: "steps",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          resolve(data.signal_id);
        });
    });
  }
}

class LibmapperDevice {
  constructor(ws, sessionId, deviceId, name) {
    this.ws = ws;
    this.name = name;
    this.sessionId = sessionId;
    this.deviceId = deviceId;
    // Defined
    this.signals = [];
  }

  static async _makeDevice(sessionId, name) {
    let devID = -1;

    await fetch("http://localhost:5001/devices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Session-ID": sessionId.toString(),
      },
      body: JSON.stringify({
        name: this.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        devID = data.device_id;
      });

    return devID;
  }

  static async create(name) {
    return new Promise((resolve, reject) => {
      let ws = new WebSocket("http://localhost:5001/ws");

      ws.onopen = () => {
        ws.send(JSON.stringify({ op: 0 }));
      };

      ws.onmessage = (msg) => {
        var recv = JSON.parse(msg.data);
        console.log(msg.data);
        if ((recv.op = 3)) resolve({ data: recv.data, webSocket: ws });
      };
    }).then(async (result) => {
      let id = await LibmapperDevice._makeDevice(result.data, name);

      return new LibmapperDevice(result.webSocket, result.data, id, name);
    });
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

  async addSignal(element) {
    // Get the signal ID we need asynchronously
    let signalId = await LibmapperSignal._createSignal(
      element.id,
      element.min,
      element.max,
      this.deviceId,
      this.sessionId
    );

    // Instantiate a new signal with relevant data
    let newSignal = new LibmapperSignal(this, element, signalId);
    this.signals.push(newSignal);
    return newSignal;
  }
}

export { LibmapperDevice, LibmapperSignal };
