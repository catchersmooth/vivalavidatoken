export default function ContactForm() {
  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Stay Updated</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none"
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Subscribe
        </button>
      </form>
    </section>
  );
}