registerPaint('mybackground', class {
  static get inputProperties() {
      return ['--multiplier', '--pad', '--slant'];
  }
  paint(ctx, size, properties) {
    let multiplier = properties.get('--multiplier').value;
    let red = Math.random()*255
    let green = Math.random()*255
    let blue = Math.random()*255
    const rgb = `rgb(${red},${green},${blue})`
    let pad = properties.get('--pad').value;
    let slant = properties.get('--slant').value;

    ctx.moveTo(0, 0);
    ctx.lineTo(pad + (size.width - slant - pad) * multiplier, 0);
    ctx.lineTo(pad + (size.width - slant - pad) * multiplier + slant, size.height);
    ctx.lineTo(0, size.height);
    ctx.fillStyle = rgb;
    ctx.fill();
    // eval(properties.get('--my-background').toString())(ctx, size, properties);
  }
})