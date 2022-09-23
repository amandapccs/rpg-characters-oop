import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Jinx');
const player2 = new Character('Shea');
const player3 = new Character('Raja');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp, pve };
export { runBattles };