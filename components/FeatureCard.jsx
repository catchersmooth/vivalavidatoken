export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
      <Icon className="w-10 h-10 mb-4 text-indigo-500" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}