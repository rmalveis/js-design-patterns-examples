
var Correios = function () {
    this.calculate = function (package) {
        // calculations...
        return "$45.95";
    }
};

var Transportadora = function () {
    this.calculate = function (package) {
        // calculations...
        return "$39.40";
    }
};

var PickUpStore = function () {
    this.calculate = function(package) {
        return 'free';
    }
}

var CarrierFactory = function () {
    this.create = function (brand) {
        if (brand === 'correios') {
            return new Correios();
        } else if (brand === 'transportadora') {
            return new Transportadora();
        } else {
            return new PickUpStore();
        }
    }
}

var Shipping = function () {
    this.carrierFactory = new CarrierFactory();
    this.calculate = function (carrier, package) {
        var c = this.carrierFactory.create(carrier);
        return c.calculate(package)
    }
};

Shipping.prototype = {
    calculate: function (carrier, package) {
        return this.carrierFactory.create(carrier).calculate(package);
    }
};


(function () {
    var package = {from: "76712", to: "10012", weigth: "lkg"};

    var shipping = new Shipping();
    var output = [];

    output.push("Correios Strategy: " + shipping.calculate('correios', package));
    output.push("Transportadora Strategy: " + shipping.calculate('transportadora', package));
    output.push("PickUp Store Strategy: " + shipping.calculate(null, package));

    console.log(output.join('\n'));
}());