'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Compass, MessageSquare, Heart, PlusCircle, Settings, LogOut, Zap } from 'lucide-react';
import { clearAuthTokens } from '@/lib/api';
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
    id: 'explore',
    icon: Compass,
    label: 'Discover'
  }, {
    id: 'messages',
    icon: MessageSquare,
    label: 'Chats',
    badge: 3
  }, {
    id: 'favorites',
    icon: Heart,
    label: 'My Collection'
  }, {
    id: 'create',
    icon: PlusCircle,
    label: 'Create Persona'
  }];
  const bottomItems = [{
    id: 'settings',
    icon: Settings,
    label: 'Preferences'
  }];
  return <motion.aside initial={{
    x: -20,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-deep-900 border-r border-lavender-faint z-50">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-hotPink flex items-center justify-center shadow-[0_0_15px_rgba(255,32,121,0.5)]">
          <span className="font-display font-bold text-white text-lg">E</span>
        </div>
        <span className="font-display font-bold text-2xl tracking-tight text-white">
          EROS
        </span>
      </div>

      {/* Premium Banner */}
      <div className="mx-4 mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-deep to-hotPink/20 border border-hotPink/30 relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-hotPink/5 group-hover:bg-hotPink/10 transition-colors" />
        <div className="relative z-10 flex items-center gap-3">
          <Zap className="w-5 h-5 text-hotPink fill-hotPink" />
          <div>
            <p className="text-sm font-bold text-white">eros Elite</p>
            <p className="text-xs text-lavender-muted">Unlock all features</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => {
          const routeMap: Record<string, string> = {
            home: '/',
            explore: '/discover',
            messages: '/account',
            favorites: '/favorites',
            create: '/create'
          };
          if (routeMap[item.id]) {
            router.push(routeMap[item.id]);
            return;
          }
          onTabChange(item.id);
        }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${isActive ? 'bg-hotPink/10 text-hotPink' : 'text-lavender-muted hover:bg-purple-deep hover:text-white'}`}>
              {isActive && <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-6 bg-hotPink rounded-r-full" />}
              <item.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              <span className={`text-sm font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
              {item.badge && <span className="ml-auto bg-hotPink text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>}
            </button>;
      })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-lavender-faint space-y-2">
        {bottomItems.map(item => <button key={item.id} onClick={() => {
        if (item.id === 'settings') {
          router.push('/settings');
        }
      }} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-lavender-muted hover:bg-purple-deep hover:text-white transition-colors">
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>)}
        <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-lavender-muted hover:bg-red-500/10 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </motion.aside>;
}
