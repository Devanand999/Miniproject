import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, 
  UtensilsCrossed, 
  Receipt, 
  FileBarChart, 
  Settings,
  Pizza,
  ChevronDown,
  CircleDashedIcon,
  User2
} from 'lucide-react';

interface SubNavItem {
  path: string;
  label: string;
}

interface NavItem {
  path: string;
  label: string;
  icon: React.ElementType;
  subItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  { path: '/dashboard', label: 'Dashboard', icon: CircleDashedIcon },
  { 
    path: '/customers', 
    label: 'Customers', 
    icon: User2,
    subItems: [
      { path: '/customers/add', label: 'Add Customer' },
      { path: '/customers/manage', label: 'Manage Customers' }
    ]
  },
  { 
    path: '/food-category', 
    label: 'Food Category', 
    icon: Pizza,
    subItems: [
      { path: '/food-category/add', label: 'Add Category' },
      { path: '/food-category/manage', label: 'Manage Categories' }
    ]
  },
  { 
    path: '/food', 
    label: 'Food', 
    icon: UtensilsCrossed,
    subItems: [
      { path: '/food/add', label: 'Add Food' },
      { path: '/food/manage', label: 'Manage Food' }
    ]
  },
  { 
    path: '/invoices', 
    label: 'Invoices', 
    icon: Receipt,
    subItems: [
      { path: '/invoices/create', label: 'Create Invoice' },
      { path: '/invoices/manage', label: 'Manage Invoices' }
    ]
  },
  { path: '/reports', label: 'Reports', icon: FileBarChart },
  { path: '/settings', label: 'Settings', icon: Settings },
];

const Navbar = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="bg-white w-64 min-h-screen p-4">
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedItems.includes(item.path);

          return (
            <div key={item.path}>
              <div
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors cursor-pointer
                  ${location.pathname.startsWith(item.path) ? 'bg-gray-100 text-lime-600' : 'text-gray-400 hover:text-lime-600'}
                `}
                onClick={() => {
                  if (!item.subItems) {
                    handleNavigation(item.path); 
                  } else {
                    toggleExpand(item.path);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <Icon size={20} />
                  <span>{item.label}</span>
                </div>
                {item.subItems && (
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {item.subItems && isExpanded && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <div
                      key={subItem.path}
                      className="cursor-pointer px-4 py-2 rounded-lg transition-colors text-gray-400 hover:text-lime-600"
                      onClick={() => handleNavigation(subItem.path)} 
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
