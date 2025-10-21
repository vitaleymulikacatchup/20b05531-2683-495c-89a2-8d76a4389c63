import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt:', { email, password, rememberMe });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-black bg-opacity-75 p-16 rounded">
        <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="netflix-input"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="netflix-input"
              required
            />
          </div>
          
          <button type="submit" className="netflix-button">
            Sign In
          </button>
          
          <div className="text-center text-netflix-gray-300 text-sm">
            OR
          </div>
          
          <button type="button" className="netflix-button-secondary">
            Use a Sign-In Code
          </button>
          
          <div className="text-center">
            <a href="#" className="text-white hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-netflix-red bg-netflix-gray-700 border-netflix-gray-600 rounded focus:ring-netflix-red focus:ring-2"
            />
            <label htmlFor="remember" className="text-netflix-gray-300 text-sm">
              Remember me
            </label>
          </div>
          
          <div className="text-netflix-gray-300 text-sm">
            New to Netflix?{' '}
            <a href="#" className="text-white hover:underline font-medium">
              Sign up now
            </a>
            .
          </div>
          
          <div className="text-netflix-gray-400 text-xs leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;