import './App.css';
import Home from './pages/HomeComponents/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/Shared/NotFound/NotFound';
import ExploreProducts from './pages/ExploreComponents/ExploreProducts/ExploreProducts';
import PurchaseInfo from './pages/PurchaseComponents/PurchaseInfo/PurchaseInfo';
import Shipping from './pages/PurchaseComponents/Shipping/Shipping';
import Login from './pages/LoginRegistration/Login/Login';
import Registration from './pages/LoginRegistration/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/DashboardComponents/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
          <Route path="/shipping/:orderId" element={<PrivateRoute><Shipping></Shipping></PrivateRoute>}></Route>
          <Route path="/purchase-info/:id" element={<PrivateRoute><PurchaseInfo></PurchaseInfo></PrivateRoute>}></Route>
          <Route path="/explore" element={<ExploreProducts></ExploreProducts>}></Route>
          <Route path="/registration" element={<Registration></Registration>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
