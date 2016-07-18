abstract class AbstractItem {
	id: string;
	name: string;
	value: number;
	stats: [string, number][];
	
	constructor(name: string, value: number, stats: [string, number][]) {
		this.name = name;
		this.value = value;
		this.stats = stats;
	}

	renderContent(): void {
		console.log('-----' + '\n');
		console.log(this.name + '\n');
		this.stats.forEach((stat) => console.log(stat[0] + ': ' + stat[1] + '\n'));
		console.log('-----' + '\n');
	}

	abstract action(): void;
};

class Weapon extends AbstractItem {
	constructor(name: string, value: number, stats: [string, number][]) {
		super(name, value, stats);
	}

	action(): void {
		console.log('Weapon ' + this.name + ' attacks with ' + this.value + ' points.');
	}
};

class Armour extends AbstractItem {
	slot: string;

	constructor(name: string, value: number, stats: [string, number][], slot: string) {
		super(name, value, stats);
		this.slot = slot;
	}

	action(): void {
		console.log('Armour ' + this.name + ' protects with ' + this.value + ' points.')
	}

	renderContent(): void {
		super.renderContent();
		console.log('=====');
		console.log('Slot: ' + this.slot + '\n');
		console.log('=====');
	}
};

let sword = new Weapon("Steel sword", 17, [["Strength", 5], ["Intelligence", 3]]);
let helmet = new Armour("Leather helmet", 10, [["Agility", 2]], "Head");

sword.renderContent();
helmet.renderContent();