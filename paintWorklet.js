registerPaint('mybackground', class {
  static get inputProperties() {
      return ['--my-background'];
  }
  paint(ctx, size, properties) {
    eval(properties.get('--my-background').toString())(ctx, size, properties);
  }
})