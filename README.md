# libmapper.js

Libmapper in the browser via websockets.

## Overview

The libmapper project currently supports a rich eco-system of custom input-controllers, bindings for commodity hardware, software inputs, synthesizers, game-engines, and other multimedia systems. With recent advances in web-technology, many creative folks are turning to the many options frontend frameworks avaliable on the web when implementing their own GUIs and projects. Because of both of these factors, supporting libmapper connectivity in the browser will provide interesting new methods for interacting with web-based multimedia components.

## API Usage

We are attempting to support as many workflows as possible. We will continue to add features to the web-API for interacting with libmapper. In the meantime, we currently offer the following options:

### Create Signal with HTML Element

In this example, a user may have an HTML element that is capable of handling user input (in this case, a default `<input>` element with an id `libmapperSlider`). In order to bind a libmapper signal to that element, simply call the `addSignal` function and pass the HTML element directly. A full example, including the instantiation of an outgoing libmapper signal is shown below.


```javascript

<script type="module">
    import { LibmapperDevice, LibmapperSignal } from "./libmapper.js";

    // HTML Element that we will bind a libmapper signal to
    let mySlider = document.getElementById("libmapperSlider");

    // Instantiate a libmapper device for the browser window 
    let libmapperDev = await LibmapperDevice.create("browserDevice");
    
    // Associate an outgoing signal with an HTML element
    let mySig = await libmapperDev.addSignal(mySlider, "OUTGOING");

</script>
```

Similiarly, to associate an HTML element with an incoming signal, the code is very similar:

```javascript
// Init an incoming signal
let span = document.getElementById("inputSigValue");
let myIncomingSig = await libmapperDev.addSignal(span, "INCOMING");
```


### Todo List

- [ ] Determine which HTML elements are supported by default, determine which need special logic
- [ ] Register libmapper devices and signals with the daemon via HTTP request
- [x] Properly route outgoing signal data to the proper websocket endpoint.
- [ ] Handle incoming data signals, update the HTML element accordingly
  - [ ] Determine how to handle for arbitrary HTML elements 
- [ ] Write some tests
