export default class PropertyListener {
  
  constructor(callback) {
    this.on = true;
    this.callback = callback;
  }
  
  call() {
    const args = Array.prototype.slice.call(arguments);
    this.callback(args);
  }
  
  off() {
    this.on = false;
  }
  
  on() {
    this.on = true;
  }
  
  isActive() {
    return this.on;
  }
}