import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center pt-28">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 sm:p-8 shadow-[0_2px_30px_rgba(0,0,0,0.06)]">
            <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-full border border-gray-200 bg-white/80 text-gray-700">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              PCI-ready fintech infrastructure
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              The clean way to launch your SaaS for payments
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Modern APIs and UI components to issue cards, accept payments, and move money globally. Built for speed, security, and scale.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                Get started
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-md border border-gray-300 bg-white text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors">
                See features
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-gray-900">99.99%</p>
                <p className="text-xs text-gray-600">Uptime</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">7 days</p>
                <p className="text-xs text-gray-600">to MVP</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">$0</p>
                <p className="text-xs text-gray-600">to start</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
    </section>
  )
}
