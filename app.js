var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractItem = (function () {
    function AbstractItem(name, value, stats) {
        this.name = name;
        this.value = value;
        this.stats = stats;
    }
    AbstractItem.prototype.renderContent = function () {
        console.log('-----' + '\n');
        console.log(this.name + '\n');
        this.stats.forEach(function (stat) { return console.log(stat[0] + ': ' + stat[1] + '\n'); });
        console.log('-----' + '\n');
    };
    return AbstractItem;
}());
;
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, value, stats) {
        _super.call(this, name, value, stats);
    }
    Weapon.prototype.action = function () {
        console.log('Weapon ' + this.name + ' attacks with ' + this.value + ' points.');
    };
    return Weapon;
}(AbstractItem));
;
var Armour = (function (_super) {
    __extends(Armour, _super);
    function Armour(name, value, stats, slot) {
        _super.call(this, name, value, stats);
        this.slot = slot;
    }
    Armour.prototype.action = function () {
        console.log('Armour ' + this.name + ' protects with ' + this.value + ' points.');
    };
    Armour.prototype.renderContent = function () {
        _super.prototype.renderContent.call(this);
        console.log('=====');
        console.log('Slot: ' + this.slot + '\n');
        console.log('=====');
    };
    return Armour;
}(AbstractItem));
;
var sword = new Weapon("Steel sword", 17, [["Strength", 5], ["Intelligence", 3]]);
var helmet = new Armour("Leather helmet", 10, [["Agility", 2]], "Head");
sword.renderContent();
helmet.renderContent();
