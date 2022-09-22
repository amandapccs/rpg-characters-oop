abstract class Race {
  constructor(private _name: string, private _dexterity: number) { }
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
    return 1;
  }

  abstract get maxLifePoints(): number;
}

export default Race;