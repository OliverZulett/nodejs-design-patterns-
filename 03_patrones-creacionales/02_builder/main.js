import CarBuilder from "./car.builder.js";
import UrlBuilder from "./url.builder.js";

const mySedanCar = new CarBuilder()
  .engine("in line", "mercedez", "MXZ2024")
  .suspension("hybrid")
  .doors(4)
  .sits(5)
  .withAirbags(6, "mercedez", "nylon")
  .withSpareTire("firestone")
  .chassisColor("gray")
  .build();

const url = new UrlBuilder()
  .setProtocol("https")
  .setAuthentication("user", "password")
  .setHostname("www.myhost.com")
  .build();

console.log(url.toString());
