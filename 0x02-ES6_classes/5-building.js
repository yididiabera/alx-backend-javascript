export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (
      new.target !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this._sqft += 1;
    this._sqft -= 1;
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
