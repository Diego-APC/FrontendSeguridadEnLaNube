import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useEffect } from 'react';
import { useUserStore } from '../../store/userStore';

export const Layout = () => {
  const { token, user, fetchProfile } = useUserStore();

  useEffect(() => {
    if (token && !user) {
      fetchProfile();
    }
  }, [token, user, fetchProfile]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};