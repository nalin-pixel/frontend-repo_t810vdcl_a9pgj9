import { ShieldCheck, CreditCard, Globe2, Cpu } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance-first',
    desc: 'SOC2, PCI, and GDPR-aligned controls are built into the platform.'
  },
  {
    icon: CreditCard,
    title: 'Issuing & Acquiring',
    desc: 'Virtual and physical cards, global acquiring, and real-time risk controls.'
  },
  {
    icon: Globe2,
    title: 'Global by default',
    desc: 'Multi-currency support, localized payment methods, and cross-border payouts.'
  },
  {
    icon: Cpu,
    title: 'Developer-centric',
    desc: 'Clean APIs, SDKs, and webhooks with world-class docs and examples.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to ship fast</h2>
          <p className="mt-3 text-gray-600">From tokenized cards to real-time fraud prevention, we cover the rails so you can focus on your product.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
