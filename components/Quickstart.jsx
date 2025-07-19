export default function Quickstart() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-4">Installation & Quickstart</h2>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded mb-4">
        <code>npm install -g vivalavida</code>
      </pre>
      <pre className="bg-gray-800 text-gray-100 p-4 rounded">
        <code>vivalavida tunnel --port 8080
# Opens a secure tunnel to localhost:8080</code>
      </pre>
    </section>
  );
}