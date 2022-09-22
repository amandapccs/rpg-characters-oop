import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;