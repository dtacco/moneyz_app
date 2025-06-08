import Link from 'next/link';

const navItems = [
  { name: 'Dashboard', href: '/' }, // Assuming dashboard is the homepage
  { name: 'Transactions', href: '/transactions' },
  { name: 'Accounts', href: '/accounts' },
  { name: 'Investments', href: '/investments' },
  { name: 'Categories', href: '/categories' },
  { name: 'Recurrings', href: '/recurrings' },
  { name: 'Income', href: '/income' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
      <h2 className="text-xl font-bold mb-4">Fandwise</h2>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="block py-2 px-3 rounded hover:bg-gray-700">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
