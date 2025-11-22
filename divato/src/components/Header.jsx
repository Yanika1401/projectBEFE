
export default function Header() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">🍽️ ระบบจัดการสถานะอาหาร</h1>
        <p className="text-center mt-2 text-orange-100">
          อัพเดทสถานะรายการอาหารของลูกค้าแต่ละโต๊ะ
        </p>
      </div>
    </div>
  );
}