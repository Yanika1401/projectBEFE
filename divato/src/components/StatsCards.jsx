import { Check, ChefHat, Clock, UtensilsCrossed } from 'lucide-react';

export default function StatsCards({ orders }) {
  const stats = [
    {
      label: 'รับออเดอร์',
      count: orders.filter(o => o.status === 'received').length,
      icon: Clock,
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600',
      iconColor: 'text-blue-500'
    },
    {
      label: 'กำลังเตรียม',
      count: orders.filter(o => o.status === 'preparing').length,
      icon: ChefHat,
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-600',
      iconColor: 'text-yellow-500'
    },
    {
      label: 'พร้อมเสิร์ฟ',
      count: orders.filter(o => o.status === 'ready').length,
      icon: UtensilsCrossed,
      borderColor: 'border-orange-500',
      textColor: 'text-orange-600',
      iconColor: 'text-orange-500'
    },
    {
      label: 'เสิร์ฟแล้ว',
      count: orders.filter(o => o.status === 'served').length,
      icon: Check,
      borderColor: 'border-green-500',
      textColor: 'text-green-600',
      iconColor: 'text-green-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 border-t-4 ${stat.borderColor}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.textColor}`}>
                  {stat.count}
                </p>
              </div>
              <Icon className={stat.iconColor} size={32} />
            </div>
          </div>
        );
      })}
    </div>
  );
}