import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const footerLinks = [
    { text: 'FAQ', href: '#' },
    { text: 'Help Center', href: '#' },
    { text: 'Terms of Use', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Cookie Preferences', href: '#' },
    { text: 'Corporate Information', href: '#' },
  ];

  return (
    <footer className="bg-black bg-opacity-75 px-6 py-8 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <p className="text-netflix-gray-300 text-sm">
            Questions? Call 0800 609 226 (Toll-Free)
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-netflix-gray-300 text-sm hover:underline"
            >
              {link.text}
            </a>
          ))}
        </div>
        
        <div className="relative inline-block">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-netflix-gray-800 border border-netflix-gray-600 rounded text-white text-sm hover:bg-netflix-gray-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
            </svg>
            <span>{selectedLanguage}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {isLanguageDropdownOpen && (
            <div className="absolute bottom-full left-0 mb-1 bg-netflix-gray-800 border border-netflix-gray-600 rounded shadow-lg z-10">
              <button
                onClick={() => {
                  setSelectedLanguage('English');
                  setIsLanguageDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-white text-sm hover:bg-netflix-gray-700"
              >
                English
              </button>
              <button
                onClick={() => {
                  setSelectedLanguage('Español');
                  setIsLanguageDropdownOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-white text-sm hover:bg-netflix-gray-700"
              >
                Español
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;