import { statusConfig } from '../data/initialOrders';

export default function OrderModal({ order, onUpdate, onClose }) {
  if (!order) return null;

  const config = statusConfig[order.status];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        <div className={`${config.color} text-white py-6 px-8`}>
          <h2 className="text-2xl font-bold">รายละเอียดออเดอร์</h2>
          <p className="text-sm opacity-90 mt-1">โต๊ะ {order.tableNumber}</p>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-3 text-lg">รายการอาหาร:</h3>
            <ul className="space-y-2">
              {order.items.map((item, idx) => (
                <li key={idx} className="text-gray-600 flex items-center bg-gray-50 p-2 rounded">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
              <span className="font-semibold">เวลา:</span> {order.timestamp}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">สถานะปัจจุบัน:</span>{' '}
              <span className={`${config.color} text-white px-3 py-1 rounded-full text-sm`}>
                {config.label}
              </span>
            </p>
          </div>

          <div className="flex gap-3">
            {config.nextStatus && (
              <button
                onClick={() => onUpdate(order.id)}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium shadow-md"
              >
                อัพเดทสถานะ
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-medium shadow-md"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}