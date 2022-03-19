// const ctx = new (window.AudioContext || window.webkitAudioContext)()
// const fft = new AnalyserNode(ctx, { fftSize: 2048 })
// createWaveCanvas({ element: 'section', analyser: fft })
// const toneA4 = new OscillatorNode(ctx,
//   {
//     type: 'sine',
//     frequency: 440
//   })

// const lvlA4 = new GainNode(ctx,
//   {
//     gain: 0.00001 // scale volume down by a fourth
//   })





/*
function section(x) // will translate to height, width
{
  let keyPixelStart = windowWidth / 7;
  for(let i = 0; i <= 6; i++)
  {
    if(x <= keyPixelStart * (i + 1))
    {
      return i;
    }
  }
}

function draw()
{
  let letterPlacementHeight = windowHeight / 2;
  for(let i = 0 ; i < windowWidth; i += (windowWidth / 7))
  {
    fill('#000000');
    let xValue = (windowWidth / 7) * (i + 1);
    line(xValue, 0, xValue, windowHeight);
  }
}
*/

// lvlA4.gain.setValueAtTime(0.00001, ctx.currentTime)
// lvlA4.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 1)
// lvlA4.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2)
// toneA4.connect(lvlA4)
// lvlA4.connect(ctx.destination)
// lvlA4.connect(fft)
// toneA4.start(ctx.currentTime)
// toneA4.stop(ctx.currentTime + 2)


function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


const ctx = new (window.AudioContext || window.webkitAudioContext)()
// using defaults for all params
const tone = new OscillatorNode(ctx,
{
  type: 'sine',
  frequency: getRandom(440, 784)
})

const lvl = new GainNode(ctx,
{
  gain: 0.00001 // scale volume down by a fourth
})
const fft = new AnalyserNode(ctx)

tone.connect(lvl)
lvl.connect(ctx.destination)
lvl.connect(fft)

// fade up the gain linearly from 0.1 to 1.0 over the next 5 seconds
lvl.gain.setValueAtTime(0.1, ctx.currentTime)
lvl.gain.linearRampToValueAtTime(1.0, ctx.currentTime + 5)

// schedule specific changes to the frequency at specific times
//want a Math.random() value between 440 and 784, A4 and G5
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 1) 
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 2)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 3)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 4)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 5)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 6)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 7)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 8)
tone.frequency.setValueAtTime(getRandom(440, 784), ctx.currentTime + 9)


lvl.gain.exponentialRampToValueAtTime(1, ctx.currentTime + 10)
lvl.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 11)

tone.start(ctx.currentTime)
tone.stop(ctx.currentTime + 11)

createWaveCanvas({ element: 'section', analyser: fft })