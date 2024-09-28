import React from "react";
import {MainPage} from "../pages/main-page";
import '../output.css';
const App: React.FC = () =>  {
  return (
    <div className='flex flex-col w-full h-full justify-center bg-gray-400'>
      <MainPage/>
    </div>
  );
}

export default App;
