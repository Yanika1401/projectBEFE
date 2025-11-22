import { Check, ChefHat, Clock, UtensilsCrossed } from 'lucide-react';
import { statusConfig } from '../data/initialOrders';

const iconMap = {
  received: Clock,
  preparing: ChefHat,
  ready: UtensilsCrossed,
  served: Check
};

export default function OrderCard({ order, onOpenModal, onDelete }) {
  const config = statusConfig[order.status];
  const StatusIcon = iconMap[order.status];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className={`${config.color} text-white py-4 px-6`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">โต๊ะ {order.tableNumber}</h3>
            <p className="text-sm opacity-90">เวลา: {order.timestamp}</p>
          </div>
          <StatusIcon size={32} />
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">รายการอาหาร:</h4>
          <ul className="space-y-1">
            {order.items.map((item, idx) => (
              <li key={idx} className="text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <span className="font-semibold text-gray-700 mr-2">สถานะ:</span>
            <span className={`${config.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {config.label}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onOpenModal(order)}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium shadow-md"
          >
            ดูรายละเอียด
          </button>
          {order.status === 'served' && (
            <button
              onClick={() => onDelete(order.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 font-medium shadow-md"
            >
              ลบ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}