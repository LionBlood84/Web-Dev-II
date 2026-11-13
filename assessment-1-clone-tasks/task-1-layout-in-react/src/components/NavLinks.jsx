// Navigation links, shared by the header and the footer
const links = [
  { label: 'Our Blog', href: '#blog' },
  { label: 'Our Artists', href: '#artists' },
  { label: 'Our Story', href: '#story' },
];

function NavLinks({ label }) {
  return (
    <nav className="nav" aria-label={label}>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
