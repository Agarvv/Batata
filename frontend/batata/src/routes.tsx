import type { RouteObject } from "react-router-dom";
import  App from './pages/homepage/homepage';
import Game from './pages/game/game'
import Draw from './pages/draw/draw'
import Votations from './pages/votations/votations'

export const routes : RouteObject[] = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/game",
        element: <Game />
    },
    {
        path: "/draw",
        element: <Draw />
    },
    {
        path: "/votations",
        element: <Votations />
    }
]