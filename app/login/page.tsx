'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { api, setAccessToken, setRefreshToken } from '@/lib/api'
import { Logo } from '@/components/Logo'

export default function LoginPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{
    username?: string
    email?: string
    password?: string
  }>({})

  const validateForm = (): boolean => {
    const errors: { username?: string; email?: string; password?: string } = {}

    if (!username.trim()) {
      errors.username = 'Username is required'
    } else if (username.length < 3) {
      errors.username = 'Username must be at least 3 characters'
    }

    if (mode === 'register') {
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Please enter a valid email address'
      }
    }

    if (!password) {
      errors.password = 'Password is required'
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    setFieldErrors({})

    if (!validateForm()) {
      return
    }

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

  const handleFieldChange = (field: 'username' | 'email' | 'password', value: string) => {
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    if (field === 'username') {
      setUsername(value)
    } else if (field === 'email') {
      setEmail(value)
    } else if (field === 'password') {
      setPassword(value)
    }
  }

  return (
    <div className="login-page min-h-screen text-white flex flex-col items-center justify-center p-6 relative">
      {/* Logo at the top of the page */}
      <div className="absolute top-6 left-6 z-20">
        <Logo variant="gradient" textSize="lg" />
      </div>

      <div className="cyan-grid" />
      
      {/* Image decoration - visible on larger screens */}
      <div className="hidden md:block fixed -left-20 lg:-left-32 bottom-0 w-[600px] lg:w-[800px] h-[800px] lg:h-[1000px] z-[6] opacity-90 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/animate4.png"
            alt="Cyberpunk companion"
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 600px, 800px"
            priority
          />
          {/* Dark shadow at bottom to fade out image edges */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] lg:h-[300px] bg-gradient-to-t from-black via-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[150px] lg:h-[250px] bg-gradient-to-t from-black/90 via-black/50 to-transparent blur-xl pointer-events-none" />
          
          {/* Subtle glow effect - very weak around the girl */}
          <div className="absolute inset-0 bg-gradient-to-t from-hotPink/8 via-hotPink/5 via-cyan/4 to-hotPink/3 blur-[40px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-radial pointer-events-none" style={{ background: 'radial-gradient(circle at 40% 60%, rgba(255, 0, 102, 0.1) 0%, rgba(255, 20, 147, 0.08) 20%, rgba(138, 43, 226, 0.06) 40%, rgba(0, 255, 255, 0.05) 60%, transparent 80%)', filter: 'blur(30px)' }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-hotPink/6 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[50px] pointer-events-none" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[300px] h-[300px] bg-hotPink/4 rounded-full blur-[40px] pointer-events-none" />
        </div>
      </div>

      <div className="w-full max-w-md bg-deep-800 border border-lavender-faint rounded-3xl p-8 shadow-xl relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold rgb-shift text-flicker">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h1>
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-xs uppercase tracking-widest text-hotPink font-sans"
          >
            {mode === 'login' ? 'Register' : 'Login'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete={mode === 'register' ? 'off' : 'on'} noValidate>
          <div className="relative">
            <label className="text-xs uppercase tracking-wider text-lavender-muted font-sans">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(event) => handleFieldChange('username', event.target.value)}
              autoComplete={mode === 'register' ? 'off' : 'username'}
              className={`mt-2 w-full rounded-xl bg-deep-900 border px-4 py-3 text-sm focus:outline-none focus:ring-2 font-sans ${
                fieldErrors.username
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-lavender-faint focus:ring-hotPink'
              }`}
            />
            {fieldErrors.username && (
              <div className="login-field-error absolute top-full left-0 mt-1 text-xs text-red-400 font-sans flex items-center gap-1">
                <span>⚠</span>
                <span>{fieldErrors.username}</span>
              </div>
            )}
          </div>

          {mode === 'register' && (
            <div className="relative">
              <label className="text-xs uppercase tracking-wider text-lavender-muted font-sans">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => handleFieldChange('email', event.target.value)}
                autoComplete="off"
                className={`mt-2 w-full rounded-xl bg-deep-900 border px-4 py-3 text-sm focus:outline-none focus:ring-2 font-sans ${
                  fieldErrors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-lavender-faint focus:ring-hotPink'
                }`}
              />
              {fieldErrors.email && (
                <div className="login-field-error absolute top-full left-0 mt-1 text-xs text-red-400 font-sans flex items-center gap-1">
                  <span>⚠</span>
                  <span>{fieldErrors.email}</span>
                </div>
              )}
            </div>
          )}

          <div className="relative">
            <label className="text-xs uppercase tracking-wider text-lavender-muted font-sans">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(event) => handleFieldChange('password', event.target.value)}
              autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
              className={`mt-2 w-full rounded-xl bg-deep-900 border px-4 py-3 text-sm focus:outline-none focus:ring-2 font-sans ${
                fieldErrors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-lavender-faint focus:ring-hotPink'
              }`}
            />
            {fieldErrors.password && (
              <div className="login-field-error absolute top-full left-0 mt-1 text-xs text-red-400 font-sans flex items-center gap-1">
                <span>⚠</span>
                <span>{fieldErrors.password}</span>
              </div>
            )}
          </div>

          {error && <div className="text-sm text-red-400 font-sans">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="login-button w-full font-sans mt-6"
          >
            {loading ? 'PLEASE WAIT…' : mode === 'login' ? 'LOGIN' : 'REGISTER'}
          </button>
        </form>
      </div>
    </div>
  )
}
