export default class KeystrokeListener {
  constructor(window) {
    this.window = window || document.window;
    
    this.lastEvent = new Date();

    this.memory = 30;
    this.keys = [];

    this.listeners = {};

    this.window.addEventListener('keydown', e => {
      let elapsed = new Date() - this.lastEvent;

      this.keys.push(e.key);
      this.keys = this.keys.slice(0, this.memory);

      let endSeq = this.keys.join('+_+').toLowerCase();
      
      Object.entries(this.listeners).forEach(([seq, ev]) => {
        if (seq.endsWith(endSeq))
          return ev();
      })
    })
  }

  addListener(keystrokeChain, event) {
    if (!Array.isArray(keystrokeChain)) 
      keystrokeChain = [keystrokeChain];
    
    this.listeners[keystrokeChain.join('+_+').toLowerCase()] = event;
  }
}