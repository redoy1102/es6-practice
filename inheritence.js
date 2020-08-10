class parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new child("arnold");
const baby1 = new child("nold");
console.log(baby);
console.log(baby1);