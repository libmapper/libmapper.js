import("stdfaust.lib");

vol = hslider("volume [unit:dB]", 0, -96, 0, 0.1) : ba.db2linear : si.smoo ;
freq = hslider("freq [unit:Hz]", 220, 0, 880, 1);
gate = button("Gate");
process = vgroup("Oscillator", os.osci(freq) * vol * gate) <: _,_;

