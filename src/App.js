import { Lightning, Router, Utils } from "@lightningjs/sdk";
import colors from "./lib/colors";
import routes from "./routes";

export default class App extends Router.App {
  _setup() {
    console.log("STARTING ROUTER")
    Router.startRouter(routes);
  }
  static _template() {
    return {
      ...super._template(),
      w: 1920,
      h: 1080,
      color: 0xff333333,
      rect: true,
    };
  }

  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static colors() {
    return colors;
  }


}