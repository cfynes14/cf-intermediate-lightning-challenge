import { Lightning, Utils, Colors, Router } from "@lightningjs/sdk";
import Button from "../components/Button";
import fontStyles from "../lib/fontStyles";
import styles from "../lib/styles";

class MainMenu extends Lightning.Component {
  static _template() {
    console.log("MAIN MENU")
    return {
      w: 1920,
      h: 1080,
      color: Colors("black").get(),
      rect: true,

      Logo: {
        w: (w) => w,
        h: (h) => h * 0.6,

        flex: {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        },

        Icon: {
          w: 200,
          h: 130,

          texture: {
            type: Lightning.textures.ImageTexture,
            src: Utils.asset("images/snake.png"),
          },
        },

        Title: {
          text: {
            ...fontStyles.title,
            text: "Snake",
            textColor: Colors("green").get(),
            textAlign: "center",
          },
        },
      },

      Items: {
        w: (w) => w,
        h: (h) => h,
        y: (h) => h * 0.15,

        flex: {
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        },

        PlayItem: {
          type: Button,
          title: "Play",
          signals: {
            _buttonPressed: "_buttonPressed",
          }
        },

        HighscoreItem: {
          type: Button,
          title: "Highscore",
          signals: {
            _buttonPressed: "_buttonPressed",
          },
          flexItem: {
            marginTop: styles.spacing.medium,
          },
        },
      },
    };
  }

  _index = 0;

  get focusedItem() {
    return this.tag("Items").children[this._index];
  }

  _getFocused() {
    return this.tag("Items").children[this._index];
  }

  _handleDown() {
    console.log("HANDLE DOWN")
    this._index = 1;
  }

  _handleUp() {
    console.log("HANDLE UP")
    this._index = 0;
  }

  _buttonPressed() {
    const focusedItem = this.focusedItem._title
    if (focusedItem === "Play"){
      Router.navigate("game");
    } else if (focusedItem === "Highscore"){
      Router.navigate("highscore");
    }
  }
}

export default MainMenu;