export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, usage-based pricing</h2>
          <p className="mt-3 text-gray-600">Start free. Scale as you grow. No hidden fees.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <h3 className="text-gray-900 font-medium">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">For early-stage projects</p>
            <p className="mt-6 text-4xl font-semibold text-gray-900">$0</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 1,000 API calls / month</li>
              <li>• Sandbox environment</li>
              <li>• Community support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center items-center w-full px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Get started</a>
          </div>

          <div className="rounded-2xl bg-white border-2 border-gray-900 p-6 scale-[1.02] shadow-lg">
            <h3 className="text-gray-900 font-medium">Growth</h3>
            <p className="mt-1 text-sm text-gray-600">For teams shipping to market</p>
            <p className="mt-6 text-4xl font-semibold text-gray-900">$49<span className="text-base font-normal">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• 100k API calls</li>
              <li>• Live mode</li>
              <li>• Priority support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center items-center w-full px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800">Start free trial</a>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <h3 className="text-gray-900 font-medium">Scale</h3>
            <p className="mt-1 text-sm text-gray-600">For regulated & enterprise</p>
            <p className="mt-6 text-4xl font-semibold text-gray-900">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Dedicated support</li>
              <li>• Custom SLAs</li>
              <li>• Volume discounts</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center items-center w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 text-sm font-medium hover:bg-gray-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
