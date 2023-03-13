import './App.css';
import { Home, ProtectedPages, SignIn, PageNotFound } from './pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { Dashboard } from './components';
import { ThemeProvider } from './contexts/ThemeContext';
import {RoomProvider} from './contexts/RoomContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <RoomProvider>
            <Routes>
              <Route path='/' element={<Navigate to={"/home"} />} />
              <Route path='/signin' element={<SignIn />} />
              <Route element={<ProtectedPages />}>
                <Route path='/' element={<Dashboard />} >
                  <Route path='/home' element={<Home />} />
                </Route>
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </RoomProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
