import PropertyListener from 'property-listener';

export default class Model {
  
  constructor(props) {
    this.props = {};
    this.listeners = {};
    var keys = Object.keys(props);
    keys.forEach(key => this.props[key] = props[key]);
  }
  
  subscribe(prop, callback) {
    if (this.props[prop]) {
      if (!Array.isArray(this.listeners[prop])) {
        this.listeners[prop] = [];
      }
      this.listeners[prop].push(new PropertyListener(callback));
    }
  }
  
  unsubscribe(prop, callback) {
    if(Array.isArray(this.listeners[prop])) {
      this.listeners[prop].forEach(listener => {
        if (listener.callback === callback) {
          listener.off();
        }
      });
    }
  }
  
  notify(prop, value) {
    let listeners = this.listeners[prop].filter(listener => listener.isActive());
    listeners.forEach(listener => listener.call(value));
  }
  
  set(prop, value) {
    this.props[prop] = value;
    this.notify(prop, value);
  }
  
  get(prop) {
    return this.props[prop];
  }
}