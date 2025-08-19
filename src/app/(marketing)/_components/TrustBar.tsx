const trustBadges = [
  'EU eIDAS & Swiss ZertES ready',
  'Audit trail included', 
  'Mobile friendly',
  'No account required for signers'
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-selise-grey font-body">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-selise-green rounded-full flex-shrink-0"></div>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
