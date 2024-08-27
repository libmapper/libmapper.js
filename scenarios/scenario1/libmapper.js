/**
 *
 ** libmapper.js, bringing the libmapper ecosystem to the browser via websockets
 *
 */

class LibmapperSignal {
  constructor(parentDev, element, signalId, direction) {
    this.element = element;
    this.name = element.id;
    this.signalId = signalId;
    this.direction = direction;

    let _self = this;
    // TODO: Consider moving this if/else block into it's own setup function for cleaner code.
    if (direction == 1) {
      // Incoming Signal
      parentDev.ws.addEventListener("message", (msg) => {
        var recv = JSON.parse(msg.data);
        _self.element.value = recv.data.value;

        // Call the oninput event handler with the received value as if the user had adjusted the element directly.
        // TODO: Determine how to handle this dynamically for other elements
        element.dispatchEvent(new Event("input", { value: recv.data.value }));
      });
    } else if (direction == 2) {
      // Outgoing Signal
      element.addEventListener("input", (event) => {
        parentDev.ws.send(
          JSON.stringify({
            op: 2,
            data: {
              signal_id: _self.signalId,
              value: parseFloat(event.target.value),
            },
          })
        );
      });
    }

    // TODO: Debug Statement
    console.log(
      "Created new Signal with name: " + this.name + " and ID:" + this.signalId
    );
  }

  static async _createSignal(
    signalName,
    min,
    max,
    deviceId,
    sessionId,
    direction,
    units = "tbd"
  ) {
    return new Promise((resolve, result) => {
      fetch(`http://localhost:5001/devices/${deviceId}/signals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Session-ID": sessionId.toString(),
        },

        body: JSON.stringify({
          direction: direction,
          name: signalName,
          min: parseFloat(min),
          max: parseFloat(max),
          units: units, // TODO: decide how we want the user (if at all) to specify units.
          vector_length: 1,
          type: 0x00000001, // Todo: Do we need a type enum? Why do we need a type?
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Todo: remove debug line
          // console.log("Creating Sig");
          // console.log(data);
          resolve(data.signal_id);
        });
    });
  }
}

class LibmapperDevice {
  constructor(ws, sessionId, deviceId, name) {
    this.MAPPER_DIR = { OUTGOING: 2, INCOMING: 1 };

    this.ws = ws;
    this.name = name;
    this.sessionId = sessionId;
    this.deviceId = deviceId;

    this.signals = [];

    // this.ws.onmessage = (msg) => {
    //   console.log(msg.data);
    // };
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
        name: name,
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
      let ws = new WebSocket("ws://localhost:5001/ws");

      ws.onopen = () => {
        ws.send(JSON.stringify({ op: 0 }));
      };

      ws.onmessage = (msg) => {
        var recv = JSON.parse(msg.data);
        console.log(msg.data);
        if (recv.op == 3) resolve({ data: recv.data, webSocket: ws });
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

  /**
   *
   * @param {HTMLElement} element
   * @returns
   */
  getRange(element) {
    /**
     * Helper function to decide what signal ranges an element should get.
     * todo: Determine if there should be different default values
     *
     */
    let min = 0;
    let max = 0;
    if (element.min) {
      min = element.min;
    }
    if (element.max) {
      max = element.max;
    }

    if (element.hasAttribute("mpr-signal-min")) {
      min = parseFloat(element.getAttribute("mpr-signal-min"));
    }
    if (element.hasAttribute("mpr-signal-max")) {
      max = parseFloat(element.getAttribute("mpr-signal-max"));
    }

    return { min: min, max: max };
  }

  async addSignal(element, signal_direction) {
    // Get the signal ID we need asynchronously

    let direction = this.MAPPER_DIR[signal_direction];
    let range = this.getRange(element);

    let signalId = await LibmapperSignal._createSignal(
      element.id,
      range.min,
      range.max,
      this.deviceId,
      this.sessionId,
      direction,
      element.getAttribute("mpr-signal-unit") || null
    );

    // Instantiate a new signal with relevant data
    let newSignal = new LibmapperSignal(this, element, signalId, direction);
    this.signals.push(newSignal);
    return newSignal;
  }
}

export { LibmapperDevice, LibmapperSignal };
