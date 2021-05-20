const room = [];

class ElectricalAppliance {
    constructor(options) {
        this.model = options.model,
        this.company = options.company,
        this.color = options.color,
        this.power = options.power,
        this.pluggedIn = options.pluggedIn
    }

    plugInpowerOutlet() {
        this.pluggedIn = true;
    }
}

class CoffeeMaker extends ElectricalAppliance {
    constructor(options) {
        super (options)
        this.usesCapsules = options.usesCapsules
    }

    makeCoffee() {
        console.log('coffee is brewed');
    }
}

class Notebook extends ElectricalAppliance {
    constructor(options) {
        super(options)
        this.ram = options.ram
    }

    turnOnMusic() {
        console.log('music is on');
    }
}

const boschCoffeeMaker = new CoffeeMaker ({
    model: 'TKA 6A643',
    company: 'Bosch',
    color: 'black',
    power: '1100w',
    pluggedIn: false,
    usesCapsules: false
});

const nespressoCoffeeMaker = new CoffeeMaker ({
  model: 'C30 Essenza',
  company: 'Nespresso',
  color: 'white',
  power: '1310w',
  pluggedIn: false,
  usesCapsules: true
});

const philipsToaster = new ElectricalAppliance ({
  model: 'HD2581',
  company: 'Philips',
  color: 'black',
  power: '830w',
  pluggedIn: false
});

const sumsungMicrowave = new ElectricalAppliance ({
  model: 'ME88SUG',
  company: 'Samsung',
  color: 'black',
  power: '800w',
  pluggedIn: false
});

const redmondMulticooker = new ElectricalAppliance ({
  model: 'RMC-M90',
  company: 'REDMOND',
  color: 'gray',
  power: '860w',
  pluggedIn: false
});

const acerNotebook = new Notebook ({
  model: 'Swift 5 SF514-54T-56GP',
  company: 'Acer',
  color: 'white',
  power: '80w',
  ram: '8GB',
  pluggedIn: false
});

const lenovoNotebook = new Notebook ({
  model: 'IdeaPad S145-15AST',
  company: 'Lenovo',
  color: 'gray',
  power: '60w',
  ram: '4GB',
  pluggedIn: false
});

room.push(lenovoNotebook, acerNotebook, boschCoffeeMaker, nespressoCoffeeMaker, 
  redmondMulticooker, sumsungMicrowave, philipsToaster);

boschCoffeeMaker.plugInpowerOutlet();

lenovoNotebook.plugInpowerOutlet();

sumsungMicrowave.plugInpowerOutlet();

function getPowerConsumption() {
  let totalPower = 0;

  room.forEach(elem => {
    if(elem.pluggedIn === true) {
      totalPower += parseFloat(elem.power);
    }
  });
	
	return totalPower;
}

getPowerConsumption();

function getAppliance(model) {
	return room.find(elem => elem.model === model);
}

getAppliance('ME88SUG');
