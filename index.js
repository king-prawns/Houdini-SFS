CSS.registerProperty({
  name: '--pad',
  syntax: '<number>',
  inherits: false,
  initialValue: 0
})

CSS.registerProperty({
  name: '--slant',
  syntax: '<number>',
  inherits: false,
  initialValue: 0
})

CSS.registerProperty({
  name: '--multiplier',
  syntax: '<number>',
  inherits: false,
  initialValue: 0
})

CSS.paintWorklet.addModule('./paintWorklet.js');
