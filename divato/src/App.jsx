import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import OrderCard from './components/OrderCard';
import OrderModal from './components/OrderModal';
import StatsCards from './components/StatsCards';
import { initialOrders, statusConfig } from './data/initialOrders';

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateOrderStatus = (orderId) => {
    setOrders(orders.map(order => {
      if (order.id === orderId) {
        const nextStatus = statusConfig[order.status].nextStatus;
        if (nextStatus) {
          return { ...order, status: nextStatus };
        }
      }
      return order;
    }));
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const deleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <StatsCards orders={orders} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
              onOpenModal={openModal}
              onDelete={deleteOrder}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <OrderModal
          order={selectedOrder}
          onUpdate={updateOrderStatus}
          onClose={closeModal}
        />
      )}
    </div>
  );
}