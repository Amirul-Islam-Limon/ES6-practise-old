class Father{
    constructor(){
        this.fatherName ="Salauddin";
    }
}

class Child extends Father{
    constructor(name){
        super();
        this.nAme = name
        
    }
}
const baby = new Child("Amirul")
const baby2 = new Child("Monirul");
console.log(baby);
console.log(baby2);
