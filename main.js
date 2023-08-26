class moto {
    constructor(name, position, weight, speed, price, enginetype){
        this.name = name;
        this.position = position;
        this.weight = weight;
        this.speed = speed;
        this.price = price;
        this.enginetype = enginetype;
    }
    getInfo(){
        console.log(this.name + ' ' + this.price);
    }
}

let camaro = new moto('camaro', 1, '1800 kg', 360, '45.000 $', 'benzin');

let Gentra = new moto('Gentra', 3, '1246 kg', 200, '19.000 $', 'benzin');

let Nexia = new moto('Nexia', 3, '1500 kg', 200, '15.000 $', 'benzin');

let Cobalt = new moto('Cobalt', 3, '2000 kg', 200, '16.000 $', 'benzin');

let Malibu2 = new moto('Malibu2', 3, '1800 kg', 260, '40.000 $', 'benzin');

let Spark = new moto('Spark', 2, '1000 kg', 180, '7000 $', 'benzin');

let Damas = new moto('Damas', 2, '1400 kg', 140, '13.000 $', 'benzin');

let Matiz = new moto('Matiz', 2, '730 kg', 160, '5000$', 'benzin');