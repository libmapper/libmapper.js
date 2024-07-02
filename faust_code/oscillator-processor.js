
/*
Code generated with Faust version 2.60.1
Compilation options: -lang wasm-ib -ct 1 -cn oscillator -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONoscillator() {
	return '{"name": "oscillator","filename": "oscillator.dsp","version": "2.60.1","compile_options": "-lang wasm-ib -ct 1 -cn oscillator -es 1 -mcd 16 -single -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/platform.lib","/usr/local/share/faust/oscillators.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/home/matt/js_libmapper/faust_code"],"size": 262216,"inputs": 0,"outputs": 2,"meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/tabulateNd": "Copyright (C) 2023 Bart Brouns <bart@magnetophon.nl>" },{ "basics.lib/version": "0.10" },{ "compile_options": "-lang wasm-ib -ct 1 -cn oscillator -es 1 -mcd 16 -single -ftz 2" },{ "filename": "oscillator.dsp" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.6" },{ "name": "oscillator" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.4" },{ "platform.lib/name": "Generic Platform Library" },{ "platform.lib/version": "0.3" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.3" }],"ui": [ {"type": "vgroup","label": "Oscillator","items": [ {"type": "button","label": "Gate","shortname": "Gate","address": "/Oscillator/Gate","index": 262196},{"type": "hslider","label": "freq","shortname": "freq","address": "/Oscillator/freq","index": 262156,"meta": [{ "unit": "Hz" }],"init": 220,"min": 0,"max": 880,"step": 1},{"type": "hslider","label": "volume","shortname": "volume","address": "/Oscillator/volume","index": 262184,"meta": [{ "unit": "dB" }],"init": 0,"min": -96,"max": 0,"step": 0.1}]}]}';
}
function getBase64Codeoscillator() { return "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ZGZhdXN0LmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvcGxhdGZvcm0ubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOiBbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwiL3Vzci9zaGFyZS9mYXVzdCIsIi4iLCIvaG9tZS9tYXR0L2pzX2xpYm1hcHBlci9mYXVzdF9jb2RlIl0sInNpemUiOiAyNjIyMTYsImlucHV0cyI6IDAsIm91dHB1dHMiOiAyLCJtZXRhIjogWyB7ICJiYXNpY3MubGliL25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljcy5saWIvdGFidWxhdGVOZCI6ICJDb3B5cmlnaHQgKEMpIDIwMjMgQmFydCBCcm91bnMgPGJhcnRAbWFnbmV0b3Bob24ubmw+IiB9LHsgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIwLjEwIiB9LHsgImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWliIC1jdCAxIC1jbiBvc2NpbGxhdG9yIC1lcyAxIC1tY2QgMTYgLXNpbmdsZSAtZnR6IDIiIH0seyAiZmlsZW5hbWUiOiAib3NjaWxsYXRvci5kc3AiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuNiIgfSx7ICJuYW1lIjogIm9zY2lsbGF0b3IiIH0seyAib3NjaWxsYXRvcnMubGliL25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IiB9LHsgIm9zY2lsbGF0b3JzLmxpYi92ZXJzaW9uIjogIjAuNCIgfSx7ICJwbGF0Zm9ybS5saWIvbmFtZSI6ICJHZW5lcmljIFBsYXRmb3JtIExpYnJhcnkiIH0seyAicGxhdGZvcm0ubGliL3ZlcnNpb24iOiAiMC4zIiB9LHsgInNpZ25hbHMubGliL25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIgfSx7ICJzaWduYWxzLmxpYi92ZXJzaW9uIjogIjAuMyIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiT3NjaWxsYXRvciIsIml0ZW1zIjogWyB7InR5cGUiOiAiYnV0dG9uIiwibGFiZWwiOiAiR2F0ZSIsInNob3J0bmFtZSI6ICJHYXRlIiwiYWRkcmVzcyI6ICIvT3NjaWxsYXRvci9HYXRlIiwiaW5kZXgiOiAyNjIxOTZ9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZnJlcSIsInNob3J0bmFtZSI6ICJmcmVxIiwiYWRkcmVzcyI6ICIvT3NjaWxsYXRvci9mcmVxIiwiaW5kZXgiOiAyNjIxNTYsIm1ldGEiOiBbeyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAyMjAsIm1pbiI6IDAsIm1heCI6IDg4MCwic3RlcCI6IDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAidm9sdW1lIiwic2hvcnRuYW1lIjogInZvbHVtZSIsImFkZHJlc3MiOiAiL09zY2lsbGF0b3Ivdm9sdW1lIiwiaW5kZXgiOiAyNjIxODQsIm1ldGEiOiBbeyAidW5pdCI6ICJkQiIgfV0sImluaXQiOiAwLCJtaW4iOiAtOTYsIm1heCI6IDAsInN0ZXAiOiAwLjF9XX1dfQ=="; }

/************************************************************************
 FAUST Architecture File
 Copyright (C) 2003-2019 GRAME, Centre National de Creation Musicale
 ---------------------------------------------------------------------
 This Architecture section is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 3 of
 the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; If not, see <http://www.gnu.org/licenses/>.
 
 EXCEPTION : As a special exception, you may create a larger work
 that contains this FAUST architecture section and distribute
 that work under terms of your choice, so long as this FAUST
 architecture section is not modified.
 
 ************************************************************************
 ************************************************************************/

'use strict';

// Monophonic Faust DSP
class oscillatorProcessor extends AudioWorkletProcessor {

    // JSON parsing functions
    static parse_ui(ui, obj, callback) {
        for (var i = 0; i < ui.length; i++) {
            oscillatorProcessor.parse_group(ui[i], obj, callback);
        }
    }

    static parse_group(group, obj, callback) {
        if (group.items) {
            oscillatorProcessor.parse_items(group.items, obj, callback);
        }
    }

    static parse_items(items, obj, callback) {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }

    static parse_item1(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            oscillatorProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            obj.push({
                name: item.address,
                defaultValue: item.init,
                minValue: item.min,
                maxValue: item.max
            });
        }
    }

    static parse_item2(item, obj, callback) {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            oscillatorProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
            || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "vslider"
            || item.type === "hslider"
            || item.type === "button"
            || item.type === "checkbox"
            || item.type === "nentry") {
            // Keep inputs adresses
            obj.inputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        }
    }

    static get parameterDescriptors() {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        oscillatorProcessor.parse_ui(JSON.parse(getJSONoscillator()).ui, params, oscillatorProcessor.parse_item1);
        return params;
    }

    constructor(options) {
        super(options);
        this.running = true;

        const importObject = {
            env: {
                memoryBase: 0,
                tableBase: 0,

                // Integer version
                _abs: Math.abs,

                // Float version
                _acosf: Math.acos,
                _asinf: Math.asin,
                _atanf: Math.atan,
                _atan2f: Math.atan2,
                _ceilf: Math.ceil,
                _cosf: Math.cos,
                _expf: Math.exp,
                _floorf: Math.floor,
                _fmodf: function (x, y) { return x % y; },
                _logf: Math.log,
                _log10f: Math.log10,
                _max_f: Math.max,
                _min_f: Math.min,
                _remainderf: function (x, y) { return x - Math.round(x / y) * y; },
                _powf: Math.pow,
                _roundf: Math.fround,
                _sinf: Math.sin,
                _sqrtf: Math.sqrt,
                _tanf: Math.tan,
                _acoshf: Math.acosh,
                _asinhf: Math.asinh,
                _atanhf: Math.atanh,
                _coshf: Math.cosh,
                _sinhf: Math.sinh,
                _tanhf: Math.tanh,
                _isnanf: Number.isNaN,
                _isinff: function (x) { return !isFinite(x); },
                _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                // Double version
                _acos: Math.acos,
                _asin: Math.asin,
                _atan: Math.atan,
                _atan2: Math.atan2,
                _ceil: Math.ceil,
                _cos: Math.cos,
                _exp: Math.exp,
                _floor: Math.floor,
                _fmod: function (x, y) { return x % y; },
                _log: Math.log,
                _log10: Math.log10,
                _max_: Math.max,
                _min_: Math.min,
                _remainder: function (x, y) { return x - Math.round(x / y) * y; },
                _pow: Math.pow,
                _round: Math.fround,
                _sin: Math.sin,
                _sqrt: Math.sqrt,
                _tan: Math.tan,
                _acosh: Math.acosh,
                _asinh: Math.asinh,
                _atanh: Math.atanh,
                _cosh: Math.cosh,
                _sinh: Math.sinh,
                _tanh: Math.tanh,
                _isnan: Number.isNaN,
                _isinf: function (x) { return !isFinite(x); },
                _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
            }
        };

        this.oscillator_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
        this.json_object = JSON.parse(options.processorOptions.json);

        this.output_handler = function (path, value) { this.port.postMessage({ path: path, value: value }); };

        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;

        this.factory = this.oscillator_instance.exports;
        this.HEAP = this.oscillator_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function () {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }

        this.initAux = function () {
            var i;

            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                }

                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                }
            }

            // Parse UI
            oscillatorProcessor.parse_ui(this.json_object.ui, this, oscillatorProcessor.parse_item2);

            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.setParamValue = function (path, val) {
            this.HEAPF32[this.pathTable[path] >> 2] = val;
        }

        this.getParamValue = function (path) {
            return this.HEAPF32[this.pathTable[path] >> 2];
        }

        // Init resulting DSP
        this.initAux();
        console.log(this);
    }

    handleMessage(event) {
        var msg = event.data;
        switch (msg.type) {
            case "destroy": this.running = false; break;
        }
    }

    process(inputs, outputs, parameters) {
        var input = inputs[0];
        var output = outputs[0];

        // Check inputs
        if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
            //console.log("Process output error");
            return true;
        }

        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }

        /*
        TODO: sample accurate control change is not yet handled
        When no automation occurs, params[i][1] has a length of 1,
        otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
        */

        // Update controls
        for (const path in parameters) {
            const paramArray = parameters[path];
            this.setParamValue(path, paramArray[0]);
        }

        // Compute
        try {
            this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
        } catch (e) {
            console.log("ERROR in compute (" + e + ")");
        }

        // Update bargraph
        this.update_outputs();

        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }

        return this.running;
    }
}

// Globals
const NUM_FRAMES = 128;
try {
    registerProcessor('oscillator', oscillatorProcessor);
} catch (error) {
    console.warn(error);
}
