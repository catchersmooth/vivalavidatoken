export default function DocumentationLinks() {
  const docs = [
    { title: 'API Reference', href: '#' },
    { title: 'User Guide', href: '#' },
    { title: 'CLI Docs', href: '#' }
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8">Documentation</h2>
      <div className="flex justify-center space-x-6">
        {docs.map((doc) => (
          <a
            key={doc.title}
            href={doc.href}
            className="px-5 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            {doc.title}
          </a>
        ))}
      </div>
    </section>
  );
}