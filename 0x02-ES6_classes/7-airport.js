export default class Airport {
  constructor(name, code) {
    Airport._validateString(name, 'Name');
    Airport._validateString(code, 'Code');
    this._name = name;
    this._code = code;
  }

  static _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
