class Car {
  constructor(carProperties) {}
  //....
}

export class CarBuilder {
  withEngine(type, brand, model) {
    this.engineType = type;
    this.engineBrand = brand;
    this.engineModel = model;
    return this;
  }

  withSuspension(type) {
    this.suspensionType = type;
    return this;
  }

  withSits(count) {
    this.sitsCount = count;
    return this;
  }

  withDoors(count) {
    this.doorsCount = count;
    return this;
  }

  withAirbags(count, brand, material) {
    this.hasAirbags = true;
    this.airbagsCount = count;
    this.airbagsBrand = brand;
    this.airbagsMaterial = material;
    return this;
  }

  withSpireTire(brand) {
    this.hasSpareTire = true;
    this.spareTireBrand = brand;
    return this;
  }

  withChassisColor(color) {
    this.chassisColor = color;
    return this;
  }

  build() {
    return new Car({
      engineType: this.engineType,
      engineBrand: this.engineBrand,
      engineModel: this.engineModel,
      suspensionType: this.suspensionType,
      doorsCount: this.doorsCount,
      sitsCount: this.sitsCount,
      hasAirbags: this.hasAirbags,
      airbagsCount: this.airbagsCount,
      airbagsBrand: this.airbagsBrand,
      airbagsMaterial: this.airbagsMaterial,
      hasSpareTire: this.hasSpareTire,
      spareTireBrand: this.spareTireBrand,
      chassisColor: this.chassisColor,
    });
  }
}

const sedan = new CarBuilder()
  .withEngine("in line", "mercedez", "MFJ465")
  .withSuspension("hybrid")
  .withSits(4)
  .withDoors(4)
  .withAirbags(6, "mercedez", "nylon")
  .withSpireTire("firestone")
  .withChassisColor("gray")
  .build();

const sport = new CarBuilder()
  .withEngine("electric", "ferrari", "FE465")
  .withSuspension("hybrid")
  .withSits(2)
  .withDoors(2)
  .withChassisColor("red")
  .build();
