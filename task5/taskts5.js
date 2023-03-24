var Animal = /** @class */ (function () {
    function Animal(animal) {
        this.animal = animal;
    }
    Animal.prototype.makeSound = function () {
        return "Every ".concat(this.animal, " Can Roar !!!");
    };
    Animal.prototype.makeSound2 = function () {
        return "".concat(this.animal, " sounds Meaow");
    };
    return Animal;
}());
var Tigers = new Animal('Tigers');
console.log(Tigers.makeSound());
var Cats = new Animal('Cats');
console.log(Cats.makeSound2());
