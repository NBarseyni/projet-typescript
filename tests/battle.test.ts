import Battle from "../src/battle";
import Pokemon from "../src/pokemon";
import Attack from "../src/attack";

let pikachuAttacks = Array<Attack>();
let salamecheAttacks = Array<Attack>();
let carapuceAttacks = Array<Attack>();

const charge: Attack = new Attack("Charge", 50, 100, "Normal", "Physic");
const griffe: Attack = new Attack("Griffe", 40, 100, "Normal", "Physic");

pikachuAttacks.push(charge);
salamecheAttacks.push(griffe);
carapuceAttacks.push(charge);

const salameche: Pokemon = new Pokemon("Salameche", 50, 146, 114, 104, 128, salamecheAttacks);
const pikachu: Pokemon = new Pokemon("Pikachu", 50, 142, 117, 90, 156, pikachuAttacks);
const carapuce: Pokemon = new Pokemon("Carapuce", 50, 151, 110, 128, 104, carapuceAttacks);

describe('Tests Battle firstPokemonToAttack', () => {   
    test('should pick pikachu', () => {       
        expect(Battle.orderPokemonToAttack(pikachu, carapuce)).toEqual([pikachu, carapuce]);
    });

    test('should pick salameche', () => {
        expect(Battle.orderPokemonToAttack(carapuce, salameche)).toEqual([salameche, carapuce]);
    });

    test('should pick pikachu', () => {
        expect(Battle.orderPokemonToAttack(pikachu, salameche)).toEqual([pikachu, salameche]);
    });
});

describe('Tests fight', () => {
    test('Carapuce should win', async () => {
        expect(await Battle.simulateFight(salameche, carapuce)).toBe(carapuce);
    });

    test('Pikachu should win', async () => {
        expect(await Battle.simulateFight(salameche, pikachu)).toBe(pikachu);
    });
});