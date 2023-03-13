import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart';
import Dashboard from './components/Dashboard';
import OverView from './components/OverView';
import Setting from './components/Setting';
import Sidebar from './components/Sidebar';
import StudentView from './components/StudentView';
import Table from './components/Table';
import Topbar from './components/Topbar';
import { UserProvider } from './UserContext';

function App() {
  return (
    <BrowserRouter>
     <UserProvider value={{username:"GuhanHari"}}>
     <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/table' element={<Table/>}/>
                <Route path='/chart' element={<Chart/>}>
                    <Route path='overview' element={<OverView/>}/>
                    <Route path='setting' element={<Setting/>}/>
                </Route>
                <Route path='/student/:id' element={<StudentView/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
     </UserProvider>
    </BrowserRouter>

  );
}

export default App;
