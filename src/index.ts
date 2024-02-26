// Internal imports
import { ArmorType, CharacterClass, WeaponType } from './types';
import { Character, CharacterManager } from './CharacterManager';


let characterForm = document.getElementById('characterForm') as HTMLFormElement;


const characterManager = new CharacterManager();

characterForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    
    const nameInput = document.getElementById('characterName') as HTMLInputElement;
    const classInput = document.getElementById('characterClass') as HTMLSelectElement; 
    const weaponInput = document.getElementById('characterWeapon') as HTMLSelectElement;
    const armorInput = document.getElementById('characterArmor') as HTMLSelectElement;

let name = nameInput.value;
let characterClass = classInput.value as CharacterClass;
let weapon = weaponInput.value as WeaponType;
let armor = armorInput.value as ArmorType;

const newCharacter = new Character(name, characterClass, weapon, armor);


characterManager.addCharacter(newCharacter);

// Reset the form
characterForm.reset();
}
);