import React from 'react';
import Header from './components/Header';
import SignInForm from './components/SignInForm';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundGrid />
      <div className="relative z-10">
        <Header />
        <main className="flex items-center justify-center min-h-screen px-4 py-20">
          <SignInForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;