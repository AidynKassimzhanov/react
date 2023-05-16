import { DISCOVER_GAME_ROUTE, LOGIN_ROUTE, REDUX_ROUTE } from "./utils/consts";
import DiscoverGames from "./pages/DiscoverGames";
import Auth from "./pages/Auth";
import ReduxComponent from "./pages/ReduxComponent";


export const publicRoutes = [
    
    {
        path: DISCOVER_GAME_ROUTE,
        Component: DiscoverGames
    },
    {
        path: REDUX_ROUTE,
        Component: ReduxComponent
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // },

]