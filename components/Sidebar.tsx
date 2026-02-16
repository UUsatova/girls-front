'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, MessageSquare, LogOut } from 'lucide-react';
import { clearAuthTokens } from '@/lib/api';
import { Logo } from '@/components/Logo';
interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
export function Sidebar({
  activeTab,
  onTabChange
}: SidebarProps) {
  const router = useRouter();
  const handleSignOut = () => {
    clearAuthTokens();
    window.location.href = '/login';
  };
  const menuItems = [{
    id: 'home',
    icon: Home,
    label: 'Dashboard'
  }, {
    id: 'messages',
    icon: MessageSquare,
    label: 'Chats',
    badge: 3
  }];
  return <motion.aside initial={{
    x: -20,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-deep-900 border-r border-hotPink/20 z-50">
      {/* Logo Area */}
      <div className="p-6">
        <Logo variant="gradient" textSize="lg" className="gap-3" />
      </div>


      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => {
          onTabChange(item.id);
        }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
          isActive 
            ? 'bg-hotPink/10 text-hotPink' 
            : 'text-lavender-muted hover:bg-purple-deep hover:text-white'
        }`}>
              {isActive && <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-6 bg-hotPink rounded-r-full bloom" />}
              <item.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px] bloom' : 'stroke-2'} group-hover:bloom transition-all`} />
              <span className="text-sm font-medium font-sans">
                {item.label}
              </span>
              {item.badge && <span className="ml-auto bg-hotPink text-white text-[10px] font-bold px-2 py-0.5 rounded-full bloom">
                  {item.badge}
                </span>}
            </button>;
      })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-hotPink/20">
        <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-lavender-muted hover:bg-red-500/10 hover:text-red-400 transition-colors hover:neon-border group">
          <LogOut className="w-5 h-5 group-hover:bloom transition-all" />
          <span className="text-sm font-medium font-sans">Sign Out</span>
        </button>
      </div>
    </motion.aside>;
}
