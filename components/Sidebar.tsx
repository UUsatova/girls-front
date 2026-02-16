'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, MessageSquare, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { clearAuthTokens } from '@/lib/api';
import { Logo } from '@/components/Logo';
interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}
export function Sidebar({
  activeTab,
  onTabChange,
  collapsed = false,
  onToggleCollapse
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
  return <motion.aside 
    initial={{ x: -20, opacity: 0 }}
    animate={{ 
      x: 0, 
      opacity: 1,
      width: collapsed ? '80px' : '256px'
    }}
    transition={{ duration: 0.3 }}
    className="hidden md:flex flex-col h-screen fixed left-0 top-0 border-r border-hotPink/20 z-50 overflow-hidden"
    style={{
      background: 'linear-gradient(135deg, #0a001f 0%, #000814 50%, #000000 100%)'
    }}
  >
      {/* Logo Area */}
      <div className="p-6 flex items-center justify-between">
        {!collapsed && <Logo variant="gradient" textSize="lg" className="gap-3" />}
        {collapsed && <Logo variant="gradient" textSize="sm" showText={false} className="gap-3" />}
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg hover:bg-deep-800 transition-colors text-lavender-muted hover:text-white"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        )}
      </div>


      {/* Main Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => {
          if (item.id === 'home') {
            router.push('/')
          } else if (item.id === 'messages') {
            router.push('/account')
          }
          onTabChange(item.id);
        }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
          isActive 
            ? 'bg-hotPink/10 text-hotPink' 
            : 'text-lavender-muted hover:bg-purple-deep hover:text-white'
        }`}>
              {isActive && <motion.div layoutId="activeNav" className="absolute left-0 w-1 h-6 bg-hotPink rounded-r-full bloom" />}
              <item.icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px] bloom' : 'stroke-2'} group-hover:bloom transition-all flex-shrink-0`} />
              {!collapsed && (
                <span className="text-sm font-medium font-sans">
                  {item.label}
                </span>
              )}
              {item.badge && !collapsed && (
                <span className="ml-auto bg-hotPink text-white text-[10px] font-bold px-2 py-0.5 rounded-full bloom">
                  {item.badge}
                </span>
              )}
              {item.badge && collapsed && (
                <span className="absolute -top-1 -right-1 bg-hotPink text-white text-[10px] font-bold w-5 h-5 rounded-full bloom flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>;
      })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-hotPink/20 min-h-[80px] flex items-center">
        <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-lavender-muted hover:bg-red-500/10 hover:text-red-400 transition-colors hover:neon-border group">
          <LogOut className="w-5 h-5 group-hover:bloom transition-all flex-shrink-0" />
          {!collapsed && (
            <span className="text-sm font-medium font-sans">Sign Out</span>
          )}
        </button>
      </div>
    </motion.aside>;
}
