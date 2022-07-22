import Game from "./pages/Game";
import Highscore from './pages/Highscore';
import MainMenu from './pages/MainMenu';

export default {
    root: "home",
    routes:[
        {
            path: "home",
            component: MainMenu
        },
        {
            path: "game",
            component: Game,
        },
        {
            path: "high_score",
            component: Highscore
        }
    ]
   
    }