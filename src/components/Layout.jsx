import { Outlet } from 'react-router-dom';
import Header from '../pages/header';
import Footer from '../pages/footer';

const Layout = () => {
  return (
   <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>

  
  );
};

export default Layout;