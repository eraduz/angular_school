var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persoon = /** @class */ (function () {
    function Persoon(firstname, lastname, adress) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.adress = adress;
        this.firstname = firstname;
        this.lastname = lastname;
        this.adress = adress;
    }
    return Persoon;
}());
var Auteur = /** @class */ (function (_super) {
    __extends(Auteur, _super);
    function Auteur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auteur.prototype.heeftBoekGeschreven = function () {
        this.aantalGeschrevenBoeken += 1;
    };
    Auteur.prototype.persoonsInfo = function () {
        return this.firstname + " " + this.lastname + " " + this.adress;
    };
    return Auteur;
}(Persoon));
var auteur = new Auteur("Ahmed", "Jantje", "AAAA 23, 2111 KJ, Ahmedistan");
console.log(Auteur);
