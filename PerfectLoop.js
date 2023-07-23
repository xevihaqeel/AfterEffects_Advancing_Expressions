freq = 1; 
amp = 360; 
loopTime = 10; 
t = time %loopTime; 
wiggle1 = wiggle(freq,amp,1,0.5,t); 
wiggle2 = wiggle(freq,amp,1,0.5,t-loopTime); 
linear(t,0,loopTime,wiggle1,wiggle2); 

//parameters//
wiggle(freq,amp,octaves = 1, amp_mult = .5, t = time)
//parameters//
//linear requires two expressions to bounce//