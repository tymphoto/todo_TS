import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';


const App: React.FC = () => {

  return (
  <>
  <Navbar />
    <div className="container">
      <Routes>
        <Route 
        path="/" 
        element={<TodosPage />}
        /> 
        
        <Route 
        path="/about" 
        element={<AboutPage />}
        />

         <Route
            path="*"
            element={(
              <div>
                <h2>Ошибочка, нет такой страницы</h2>
                <img src="https://gif.cmtt.space/3/club/1f/b8/ae/ea74f32bd5e2d2.png" alt="error" />
              </div>
        )}
          />
      </Routes>
    </div>    

  </>
  )
}

export default App;
