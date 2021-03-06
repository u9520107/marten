import puppeteer from 'puppeteer';

const DEFAULT_PROPERTY = {
  configurable: false,
  enumerable: false,
  writable: false,
};

class Basic {
  constructor(options) {
    this._options = options;
  }

  get program() {
    return puppeteer;
  }

  get steps() {
    return [];
  }

  static get defaultProperty() {
    return DEFAULT_PROPERTY;
  }

  async run() {
    throw new Error(`Async 'run' function must be set first.`);
  }
}

export {
  Basic as default,
};