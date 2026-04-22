import type { RouteObject } from "react-router-dom";
import  App from './pages/homepage/homepage';
import Game from './pages/game/game'

export const routes : RouteObject[] = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/game",
        element: <Game />
    }
]