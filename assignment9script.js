class Animals{
    constructor (name, age, gender, species){
        this.name = name;
        this.age = age; 
        this.gender = gender;
        this.species = species;
    }


    ShowMsg(){
        document.getElementById("showMsg").innerHTML = (`${this.name} is ${this.gender}, and s/he is ${this.age} years old`)
        this.ShowImg();
    }

    ShowImg(){
        if(this.name == "Rabbit")
            document.getElementById("ShowImg").src="image/rabbit.jpg";
        if(this.name == "Cat")
            document.getElementById("ShowImg").src="image/cat.jpg";
        if(this.name == "Dog")
            document.getElementById("ShowImg").src="image/dog.jpg";
    }
}

let Rabbit = new Animals ("Rabbit", "5", "Male", "The Mammal");
let Cat = new Animals ("Cat", "5", "Male", "domesticated");
let Dog = new Animals ("Dog", "11", "Male", "C. familiaris");
