// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Home, Package, ShoppingCart, Users, BarChart3, Settings } from 'lucide-react';

export function Sidebar({
  activePage,
  onNavigate
}) {
  const menuItems = [{
    id: 'dashboard',
    label: '仪表盘',
    icon: Home
  }, {
    id: 'products',
    label: '商品管理',
    icon: Package
  }, {
    id: 'orders',
    label: '订单管理',
    icon: ShoppingCart
  }, {
    id: 'users',
    label: '用户管理',
    icon: Users
  }, {
    id: 'analytics',
    label: '数据分析',
    icon: BarChart3
  }, {
    id: 'settings',
    label: '系统设置',
    icon: Settings
  }];
  return <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0">
          <div className="p-6">
            <h1 className="text-xl font-bold text-white">电商后台</h1>
          </div>
          <nav className="px-4">
            {menuItems.map(item => {
        const Icon = item.icon;
        return <button key={item.id} onClick={() => onNavigate(item.id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 transition-colors ${activePage === item.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>;
      })}
          </nav>
        </div>;
}