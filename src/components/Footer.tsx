
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900/80 py-6 border-t border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/e9810342-de6a-4f13-9171-0077afe8c75a.png" 
              alt="Kalp Logo" 
              className="h-10 w-auto opacity-70"
            />
          </div>
          
          {/* Tech Platform Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <TechPlatformLink href="https://www.hackerrank.com" aria-label="HackerRank">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799a.9.9 0 0 0-.592.261l-2.507 2.506H9.392a.9.9 0 0 0-.9.899v2.978a.9.9 0 0 0 .9.899h1.806l2.507 2.506a.9.9 0 0 0 .631.262.9.9 0 0 0 .9-.9V7.7a.9.9 0 0 0-.894-.9l-.047-.001z"/>
              </svg>
            </TechPlatformLink>
            
            <TechPlatformLink href="https://leetcode.com" aria-label="LeetCode">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </TechPlatformLink>
            
            <TechPlatformLink href="https://github.com" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </TechPlatformLink>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-4 pt-4 border-t border-gray-800/30">
          <p className="text-gray-500 text-sm">
            © {currentYear} Copyright. All rights reserved by Kalp Senghani.
          </p>
        </div>
      </div>
    </footer>
  );
};

const TechPlatformLink = ({ 
  href, 
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-colors"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
