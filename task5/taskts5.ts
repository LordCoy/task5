class Animal {
   animal: string
   
   constructor(animal: string){
       this.animal = animal
   }
   
   makeSound (): string {
      return `Every ${this.animal} Can Roar !!!`
   }

   makeSound2 (): string {
      return `${this.animal} sounds Meaow`
   }
}

let Tigers = new Animal('Tigers')
console.log(Tigers.makeSound())
let Cats = new Animal('Cats')
console.log(Cats.makeSound2())