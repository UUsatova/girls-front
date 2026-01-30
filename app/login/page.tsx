'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api, setAccessToken, setRefreshToken } from '@/lib/api'

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (mode === 'register') {
        await api.post('/auth/register/', {
          username,
          email: email || undefined,
          password,
        })
      }

      const token = await api.post<{ access: string; refresh: string }>(
        '/auth/login/',
        {
          username,
          password,
        }
      )
      setAccessToken(token.access)
      setRefreshToken(token.refresh)
      router.push('/account')
    } catch (err) {
      setError('Authentication failed. Check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-deep-900 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-deep-800 border border-lavender-faint rounded-3xl p-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-display font-bold">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h1>
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-xs uppercase tracking-widest text-hotPink"
          >
            {mode === 'login' ? 'Register' : 'Login'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-lavender-muted">
              Username
            </label>
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              className="mt-2 w-full rounded-xl bg-deep-900 border border-lavender-faint px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hotPink"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="text-xs uppercase tracking-wider text-lavender-muted">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-xl bg-deep-900 border border-lavender-faint px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hotPink"
              />
            </div>
          )}

          <div>
            <label className="text-xs uppercase tracking-wider text-lavender-muted">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="mt-2 w-full rounded-xl bg-deep-900 border border-lavender-faint px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-hotPink"
            />
          </div>

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-hotPink text-white font-semibold hover:bg-hotPink-hover transition-colors disabled:opacity-70"
          >
            {loading ? 'Please wait…' : mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  )
}
