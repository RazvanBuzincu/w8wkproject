
type CharacterClass = 'Rogue' | 'Paladin' | 'Hunter' | 'Mage' | 'Warrior';
type WeaponType = 'Sword' | 'Bow' | 'Staff' | 'Axe' | 'Dagger';
type ArmorType = 'Leather' | 'Plate' | 'Cloth' | 'Mail';

interface CharacterManaging<T> {
    addCharacter(param: T): void;
    removeCharacter(param: string): void; 
}

export {
    CharacterClass,
    WeaponType,
    CharacterManaging,
    ArmorType
};
