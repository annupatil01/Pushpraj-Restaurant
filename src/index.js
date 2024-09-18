import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import "./index.css"
import Home from './views/Home/Home';
import About from './views/About/About';
import { THEME } from './config/data';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/About',
        element: <About/>,
    }
]);
root.render(<div style={{backgroundColor:THEME.main}}><RouterProvider router={router}/></div>);