
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

// Simple Navigation Item component
const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    to={href}
    className={cn(
      'relative font-medium text-volt-700 transition-colors',
      'hover:text-volt-900 after:absolute after:bottom-0 after:left-0',
      'after:h-0.5 after:w-0 after:bg-energy-500 after:transition-all',
      'hover:after:w-full'
    )}
  >
    {children}
  </Link>
);

// Navigation Items
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'Buyer\'s Guide', href: '/guide' },
  { name: 'Charging Networks', href: '/charging' },
];

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-volt-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-full bg-gradient-to-r from-volt-600 to-energy-500 p-2">
              <svg 
                className="h-6 w-6 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M11.074 2.633c.32-.844 1.531-.844 1.852 0l2.07 5.734c.145.38.514.633.926.633h5.087c.94 0 1.35 1.17.611 1.743L18 14a.968.968 0 0 0-.322 1.092L19 20.695c.322.844-.721 1.552-1.44.998l-4.25-3.059a.959.959 0 0 0-1.102 0l-4.222 3.059c-.719.554-1.762-.154-1.44-.998l1.323-5.603A.968.968 0 0 0 6 14l-3.62-3.257C1.64 10.17 2.052 9 2.99 9h5.087c.384 0 .78-.253.925-.633l2.07-5.734Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-volt-900">Volt Market</span>
          </Link>

          {/* Main Navigation - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavItem href={item.href}>{item.name}</NavItem>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden rounded-full px-4 py-2 text-sm font-medium text-volt-700 hover:bg-volt-100 md:block">
              Sign In
            </button>
            <button className="rounded-full bg-gradient-to-r from-volt-600 to-energy-500 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
              Sell Your EV
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl border border-volt-200 bg-white p-8 shadow-volt">
            <div className="mb-8 max-w-2xl">
              <h1 className="mb-3 bg-gradient-to-r from-volt-700 to-energy-600 bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
                Welcome to Volt Market
              </h1>
              <p className="text-lg text-volt-700">
                The premier marketplace for buying and selling electric vehicles with verified battery health
                data and charging compatibility information.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-volt-200 bg-volt-50 p-6 shadow-sm transition-transform hover:shadow-volt-lg hover:scale-105">
                  <div className="mb-4 rounded-full bg-gradient-to-r from-volt-500 to-energy-500 p-3 w-12 h-12 flex items-center justify-center">
                    <svg 
                      className="h-6 w-6 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-volt-900">
                    Feature {i + 1}
                  </h3>
                  <p className="text-volt-700">
                    Discover how our platform makes EV shopping transparent and reliable with verified battery health data.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-volt-200 bg-volt-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center space-x-2">
                <div className="rounded-full bg-gradient-to-r from-volt-600 to-energy-500 p-2">
                  <svg 
                    className="h-6 w-6 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M11.074 2.633c.32-.844 1.531-.844 1.852 0l2.07 5.734c.145.38.514.633.926.633h5.087c.94 0 1.35 1.17.611 1.743L18 14a.968.968 0 0 0-.322 1.092L19 20.695c.322.844-.721 1.552-1.44.998l-4.25-3.059a.959.959 0 0 0-1.102 0l-4.222 3.059c-.719.554-1.762-.154-1.44-.998l1.323-5.603A.968.968 0 0 0 6 14l-3.62-3.257C1.64 10.17 2.052 9 2.99 9h5.087c.384 0 .78-.253.925-.633l2.07-5.734Z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-volt-900">Volt Market</span>
              </Link>
              <p className="mt-4 text-sm text-volt-700">
                The premier platform for buying and selling electric vehicles with transparency and confidence.
              </p>
            </div>

            {[
              { title: 'Platform', links: ['How it works', 'Battery health', 'Charging networks', 'Pricing'] },
              { title: 'Company', links: ['About us', 'Careers', 'Press', 'Blog'] },
              { title: 'Resources', links: ['Buyer\'s guide', 'Seller FAQ', 'Contact us', 'Terms of service'] },
            ].map((group, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-display text-lg font-semibold text-volt-900">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-sm text-volt-700 hover:text-volt-900">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-volt-200 pt-6">
            <p className="text-center text-sm text-volt-600">
              &copy; {new Date().getFullYear()} Volt Market. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
  