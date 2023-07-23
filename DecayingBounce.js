freq = 1.0; 
amp = 90; 
decay = .5; 
posCos = Math.abs(Math.cos(freq * time * 2*Math.PI)); 
y = amp * posCos/Math.exp(decay * time); 
position - [0,y]


freq = 1.0;
squashFreq = 4.0;
decay = 5.0;
masterDecay = 0.4;
amplitude = 25;

delay = 1/(freq*4);
if (time > delay){
  bounce = Math.sin(squashFreq*time*2*Math.PI);
  bounceDecay = Math.exp(decay*((time - delay)%(freq/2)));
  overallDecay = Math.exp(masterDecay*(time - delay));
  x = scale[0] + amplitude*bounce/bounceDecay/overallDecay;
  y = scale[0]*scale[1]/x;
  [x,y]
}else{
  scale
}
