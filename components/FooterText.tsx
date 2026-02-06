'use client'

export default function FooterText() {
  return (
    <footer className="relative py-12 bg-black border-t border-hotPink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
            <a href="/terms" className="text-gray-light hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-light hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/accessibility" className="text-gray-light hover:text-white transition-colors">
              Accessibility
            </a>
            <a href="/2257" className="text-gray-light hover:text-white transition-colors">
              18 U.S.C. 2257
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-medium">
            Copyright © Eros AI 2023 - 2026. All rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

