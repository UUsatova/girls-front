import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Игнорируем запросы к index.html - просто возвращаем 404
  // Next.js сам обработает маршруты правильно
  if (request.nextUrl.pathname === '/index.html') {
    return new NextResponse(null, { status: 404 })
  }

  // Для страницы логина добавляем заголовки, запрещающие кэширование
  const response = NextResponse.next()
  
  if (request.nextUrl.pathname === '/login') {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('Surrogate-Control', 'no-store')
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
