const tiers = [
  { name: 'Free', price: '$0', features: ['1 tunnel', 'Basic metrics', 'Community support'] },
  { name: 'Pro', price: '$15/mo', features: ['Unlimited tunnels', 'Advanced metrics', 'Email support'] },
  { name: 'Enterprise', price: 'Contact us', features: ['Custom SLAs', 'Dedicated support', 'On-premise options'] }
];

export default function PricingTable() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div key={tier.name} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
            <p className="text-3xl font-bold mb-4">{tier.price}</p>
            <ul className="mb-6 space-y-2">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              Select
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}