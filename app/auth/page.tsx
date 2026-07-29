import AuthForm from '@/components/AuthForm'

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary px-4 py-10">
      <div className="w-full max-w-5xl rounded-3xl border border-secondary-dark bg-white p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Secure onboarding</p>
            <h1 className="text-4xl font-bold text-slate-900">Join a calmer digital community.</h1>
            <p className="max-w-xl text-lg text-gray-600">
              Create an account to access workbooks, communities, and support-focused spaces with privacy-first controls.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Private account defaults</li>
              <li>• Secure sign-in and session handling</li>
              <li>• Calm, accessible experience</li>
            </ul>
          </div>

          <AuthForm />
        </div>
      </div>
    </main>
  )
}
