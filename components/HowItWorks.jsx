export default function HowItWorks() {
  const steps = [
    'Install the CLI with a single command',
    'Authenticate using your API key',
    'Start your secure tunnel in one line'
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
      <ol className="space-y-6 max-w-xl mx-auto">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-semibold">{i + 1}</div>
            </div>
            <p className="ml-4">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}