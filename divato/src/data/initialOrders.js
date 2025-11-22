export const initialOrders = [
  {
    id: 1,
    tableNumber: 'A1',
    items: ['ผัดไทย', 'ต้มยำกุ้ง', 'ส้มตำ'],
    status: 'received',
    timestamp: '14:30'
  },
  {
    id: 2,
    tableNumber: 'B3',
    items: ['ข้าวผัด', 'ไก่ทอด'],
    status: 'preparing',
    timestamp: '14:35'
  },
  {
    id: 3,
    tableNumber: 'C5',
    items: ['สปาเก็ตตี้คาโบนาร่า', 'สลัดซีซาร์'],
    status: 'ready',
    timestamp: '14:25'
  },
  {
    id: 4,
    tableNumber: 'D2',
    items: ['พิซซ่าฮาวายเอี้ยน'],
    status: 'served',
    timestamp: '14:20'
  }
];

export const statusConfig = {
  received: {
    label: 'รับออเดอร์แล้ว',
    color: 'bg-blue-500',
    nextStatus: 'preparing'
  },
  preparing: {
    label: 'กำลังเตรียมอาหาร',
    color: 'bg-yellow-500',
    nextStatus: 'ready'
  },
  ready: {
    label: 'พร้อมเสิร์ฟ',
    color: 'bg-orange-500',
    nextStatus: 'served'
  },
  served: {
    label: 'เสิร์ฟแล้ว',
    color: 'bg-green-500',
    nextStatus: null
  }
};