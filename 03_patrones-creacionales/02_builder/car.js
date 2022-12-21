class Car {
  constructor(
    engineType,
    engineBrand,
    engineModel,
    suspensionType,
    doorsCount,
    sitsCount,
    hasAirbags,
    airbagsCount,
    airbagsBrand,
    airbagsMaterial,
    hasSpareTire,
    spareTireBrand
    //....
  ) {}
}

const sport = new Car(
  "electric",
  "ferrari",
  "XFD123",
  "rigid",
  2,
  2,
  true,
  4,
  "ferrari",
  "nylon",
  true,
  "good year"
);

const sedan = new Car(
  "electric",
  "toyota",
  "TRE234",
  "rigid",
  4,
  6,
  true,
  4,
  "ferrari",
  "nylon",
  true,
  "good year"
);

class Car {
  constructor(carProperties) {}
  //...
}

const sport2 = new Car({
  airbagsBrand: "ferrari",
  engineBrand: "ferrari",
  engineModel: "XFD123",
  suspensionType: "rigid",
  doorsCount: 2,
  sitsCount: 2,
  hasAirbags: true,
  airbagsCount: 4,
  airbagsMaterial: "nylon",
  hasSpareTire: true,
  spareTireBrand: "good year",
  engineType: "electric",
});
