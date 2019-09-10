abstract class Persoon {

    constructor(protected firstname, protected lastname, protected adress){
        this.firstname = firstname;
        this.lastname = lastname;
        this.adress = adress;
    }

    abstract persoonsInfo(): string;
}

class Auteur extends Persoon {


    private aantalGeschrevenBoeken: number;


    heeftBoekGeschreven(){
        this.aantalGeschrevenBoeken += 1;
    }


    persoonsInfo(): string {
        return this.firstname + " " + this.lastname + " " + this.adress;
    }
    
}

var auteur = new Auteur("Ahmed", "Jantje", "AAAA 23, 2111 KJ, Ahmedistan")

console.log(Auteur)