import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _enemy: SimpleFighter[] | Fighter[];
  constructor(
    player: Fighter,
    enemy: SimpleFighter[] | Fighter[],
  ) { 
    super(player);
    this._player = player;
    this._enemy = enemy;
  }
  
  fight(): number {
    this._enemy.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
    });
    return super.fight();
  }
}

export default PVE;