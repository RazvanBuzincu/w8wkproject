import { v4 as uuidv4 } from 'uuid';
import { CharacterClass, WeaponType, CharacterManaging, ArmorType } from './types';

// Character class
export class Character {
    private _id: string;

    constructor(
        public name: string,
        public characterClass: CharacterClass,
        public weapon: WeaponType,
        public armor: ArmorType,
    ) {
        this._id = uuidv4();
    }

    get id(): string {
        return this._id;
    }   
}


// Character Manager Class
export class CharacterManager implements CharacterManaging<Character> {
    public characters: Character[] = [];

    public addCharacter(character: Character): void {
        this.characters.push(character);
        this.updateCharacterList();
    }

    public removeCharacter(characterId: string): void {
        const index = this.characters.findIndex(character => character.id === characterId);
        if (index !== -1) {
            this.characters.splice(index, 1);
        }
        this.updateCharacterList();
    }

    private updateCharacterList() {
        const container = document.getElementById('characters') as HTMLElement;
        container.innerHTML = "";

        this.characters.forEach(character => {
            const characterCard = `
                <div class="card mb-3 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${character.name}</h5>
                        <p class="card-text">Class: ${character.characterClass}</p>
                        <p class="card-text">Weapon: ${character.weapon}</p>
                        <p class="card-text">Armor: ${character.armor}</p>
                        <button type="submit" class="btn btn-danger btn-sm" data-character=${character.id}>Remove</button>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', characterCard);
        });

        let allButtons = container.querySelectorAll('.btn-danger');
        allButtons.forEach(button => {
            button.addEventListener('click', () => {
                const characterId = button.getAttribute('data-character');
                if (characterId) {
                    this.removeCharacter
                    (characterId);
                }
            });
        });
    }
}

