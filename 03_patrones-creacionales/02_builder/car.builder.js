class Car {
  constructor(
    engineType,
    engineBrand,
    engineModel,
    suspensionType,
    doorsCount,
    sitsCounts,
    hasAirbags,
    airbagsCount,
    airbagsBrand,
    airbagsMaterial,
    hasSpareTire,
    spareTireBrand
  ) {
    //...
  }
}

export default class CarBuilder {
  engine(type, brand, model) {
    this.engineType = type;
    this.engineBrand = brand;
    this.engineModel = model;
    return this
  }

  suspension(type) {
    this.suspensionType = type;
    return this
  }

  doors(count) {
    this.doorsCount = count;
    return this
  }

  sits(count) {
    this.sitsCounts = count;
    return this
  }

  withAirbags(count, brand, material) {
    this.hasAirbags = true;
    this.airbagsCount = count;
    this.airbagsBrand = brand;
    this.airbagsMaterial = material;
    return this;
  }

  withSpareTire(brand) {
    this.hasSpareTire = true;
    this.spareTireBrand = brand;
    return this;
  }

  chassisColor(color) {
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
      sitsCounts: this.sitsCounts,
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

const mySedanCar = new CarBuilder()
  .engine('in line', 'mercedez', 'MXZ2024')
  .suspension('hybrid')
  .doors(4)
  .sits(5)
  .withAirbags(6, 'mercedez', 'nylon')
  .withSpareTire('firestone')
  .chassisColor('gray')
  .build();