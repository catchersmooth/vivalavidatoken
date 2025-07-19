import { GlobeAltIcon, KeyIcon, ChartBarIcon, TerminalIcon } from '@heroicons/react/outline';
import FeatureCard from './FeatureCard';

const features = [
  { icon: GlobeAltIcon, title: 'Secure Tunnels', description: '256-bit AES encryption for all traffic.' },
  { icon: KeyIcon, title: 'Custom Domains', description: 'Use your own domain effortlessly.' },
  { icon: ChartBarIcon, title: 'Live Metrics', description: 'Real-time bandwidth and connection stats.' },
  { icon: TerminalIcon, title: 'Easy CLI Integration', description: 'Control everything from your terminal.' }
];

export default function Features() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}