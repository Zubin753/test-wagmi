import React from "react";
import '../output.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "../shared/ui/AppRouter.tsx";


const App: React.FC = () => {
    return (
        <div className='flex flex-col w-full h-full justify-center bg-gray-400'>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
