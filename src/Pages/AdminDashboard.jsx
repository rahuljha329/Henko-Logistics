

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUsers,
//   FaBox,
//   FaChartBar,
//   FaMoneyBill,
//   FaBriefcase,
//   FaSignOutAlt,
//   FaHome,
// } from "react-icons/fa";

// import Auth from "../Components/ApiServices/Auth";
// import AddGoldPrice from "../Components/AddGoldPrice/AddGoldPrice";
// import GetAllContacts from "../Components/GetAllContacts/GetAllContacts";
// import CreateCategory from "../Components/CreateCategory/CreateCategory";
// import ManageCategories from "../Components/ManageCategories/ManageCategories";
// import CreateCardByCategory from "../Components/CreateCardByCategory/CreateCardByCategory";
// import CardsTable from "../Components/CardsTable/CardsTable";
// import CategoryCardsManagement from "../Components/CategoryCardsManagement/CategoryCardsManagement";
// import PaymentApproval from "../Components/PaymentApproval/PaymentApproval";
// import CreateGoldCoin from "../Components/CreateGoldCoin/CreateGoldCoin";
// import GoldCoinManagement from "../Components/GoldCoinManagement/GoldCoinManagement";
// import GoldCoinOrders from "../Components/GoldCoinOrders/GoldCoinOrders";
// import CreateAdvertisement from "../Components/CreateAdvertisement/CreateAdvertisement";
// import AdvertisementManagement from "../Components/AdvertisementManagement/AdvertisementManagement";
// import CoinCharges from "../Components/CoinCharges/CoinCharges";
// import UpdateCoinCharge from "../Components/UpdateCoinCharge/UpdateCoinCharge";
// import PhysicalCardApproval from "../Components/PhysicalCardApproval/PhysicalCardApproval";
// import RedeemRequests from "../Components/RedeemRequests/RedeemRequests";
// import ReviewManagement from "../Components/ReviewManagement/ReviewManagement";
// import Profile from "../Components/Profile/Profile";

// const AdminDashboard = () => {
//   const [activePage, setActivePage] = useState("profile");
//   const navigate = useNavigate();

//   // Check if user is authenticated
//   useEffect(() => {
//     if (!Auth.isAuthenticated()) {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     Auth.logout();
//     navigate("/login");
//   };

//   const handleGoToWebsite = () => {
//     navigate("/");
//   };

//   // If not authenticated, don't render the dashboard
//   if (!Auth.isAuthenticated()) {
//     return null;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#0a1d37] text-white flex flex-col">
//         <div className="p-6 text-2xl font-bold border-b border-gray-700">
//           Admin Panel
//         </div>
//         <nav className="flex-1 p-4 space-y-4">
//           {/* <button
//             onClick={() => setActivePage("dashboard")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "dashboard" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaChartBar /> Dashboard
//           </button> */}
//           <button
//             onClick={() => setActivePage("profile")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "profile" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Profile
//           </button>

//            <button
//             onClick={handleGoToWebsite}
//             className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 mt-4"
//           >
//             <FaHome /> Go to Website
//           </button>

//           {/* <button
//             onClick={() => setActivePage("profile")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "profile" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Profile
//           </button> */}
          

//           <button
//             onClick={() => setActivePage("AddGoldPrice")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "AddGoldPrice" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Add Gold Price
//           </button>

//             <button
//             onClick={() => setActivePage("AddmeltingPrice")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "AddmeltingPrice" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Add Coin Charges
//           </button>

//            <button
//             onClick={() => setActivePage("UpdateCoinCharge")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "UpdateCoinCharge" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Update Coin Charges
//           </button>

//           <button
//             onClick={() => setActivePage("GetContact")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "GetContact" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Get Contact
//           </button>
           
//           <button
//             onClick={() => setActivePage("AddCategory")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "AddCategory" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Add Category 
//           </button>

//             <button
//             onClick={() => setActivePage("UpdateCategory")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "UpdateCategory" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Update Category 
//           </button>

//            <button
//             onClick={() => setActivePage("AddCards")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "AddCards" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Add Cards 
//           </button>

//             <button
//             onClick={() => setActivePage("AllCards")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "AllCards" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> All Cards 
//           </button>

//            <button
//             onClick={() => setActivePage("getCards")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "getCards" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> All Cards By Category
//           </button>


//           <button
//             onClick={() => setActivePage("getCardsstatus")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "getCardsstatus" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Approve Gift Cards 

//           </button>

//               <button
//             onClick={() => setActivePage("redeemRequests")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "redeemRequests" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Redeem Requests 
//           </button>

          
//           <button
//             onClick={() => setActivePage("createGoldcoin")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "createGoldcoin" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Create GoldCoin
//           </button>

//           <button
//             onClick={() => setActivePage("updateGoldcoin")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "updateGoldcoin" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Update GoldCoin
//           </button>

//           <button
//             onClick={() => setActivePage("GoldcoinOrder")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "GoldcoinOrder" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase />Approve GoldCoin
//           </button>

//           <button
//             onClick={() => setActivePage("createAdvertisement")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "createAdvertisement" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Create Advertisement
//           </button>

//           <button
//             onClick={() => setActivePage("updateAdvertisement")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "updateAdvertisement" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Update Advertisement
//           </button>

//             <button
//             onClick={() => setActivePage("approvephysicalcards")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "approvephysicalcards" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> Approve Physical Cards
//           </button>

//            <button
//             onClick={() => setActivePage("reviewGet")}
//             className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-md ${
//               activePage === "reviewGet" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//           >
//             <FaBriefcase /> review Managment
//           </button>
          
         

//           {/* Logout Button */}
//           <div className="pt-4 border-t border-gray-700">
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
//             >
//               <FaSignOutAlt /> Logout
//             </button>
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-[#0a1d37] capitalize">
//             {/* {activePage === "dashboard" && "Dashboard"} */}
//             {activePage === "AddGoldPrice" && "Add Gold Price"}
//             {activePage === "AddmeltingPrice" && "Add Coin Charges"}
//             {activePage === "UpdateCoinCharge" && "Update Coin Charges"}
//             {activePage === "GetContact" && "Contact List"}
//             {activePage === "AddCategory" && "Add Category"}
//             {activePage === "UpdateCategory" && "Update Category"}
//             {activePage === "AddCards" && "Add Cards"}
//             {activePage === "getCards" && "All Cards By Category"}
//             {activePage === "getCardsstatus" && "Approve Gift Cards "}
//             {activePage === "redeemRequests" && "Redeem Requests"}
//             {activePage === "createGoldcoin" && "Create Gold Coin"}
//             {activePage === "updateGoldcoin" && "Update Gold Coin"}
//             {activePage === "GoldcoinOrder" && "Approve GoldCoin"}
//             {activePage === "createAdvertisement" && "Create Advertisement"}
//             {activePage === "updateAdvertisement" && "Update Advertisement"}
//             {activePage === "approvephysicalcards" && "Approve Physical Cards"}
//             {activePage === "reviewGet" && "Review Management"}
//             {activePage === "profile" && "Profile"}
//           </h1>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-700">Welcome, Admin</span>
//             <button
//               onClick={handleGoToWebsite}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
//             >
//               <FaHome size={16} /> Visit Website
//             </button>
//           </div>
//         </header>

//         <main className="p-6 flex-1 overflow-auto">
//           {/* {activePage === "dashboard" && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
//                 <FaUsers className="text-[#0a1d37] text-3xl" />
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-700">Users</h2>
//                   <p className="text-2xl font-semibold">1,245</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
//                 <FaBox className="text-[#0a1d37] text-3xl" />
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-700">Orders</h2>
//                   <p className="text-2xl font-semibold">856</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
//                 <FaChartBar className="text-[#0a1d37] text-3xl" />
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-700">Reports</h2>
//                   <p className="text-2xl font-semibold">52</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
//                 <FaMoneyBill className="text-[#0a1d37] text-3xl" />
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-700">Revenue</h2>
//                   <p className="text-2xl font-semibold">$12,345</p>
//                 </div>
//               </div>
//             </div>
//           )} */}

//           {activePage === "AddGoldPrice" && <AddGoldPrice />}
//           {activePage === "AddmeltingPrice" && <CoinCharges />}
//           {activePage === "UpdateCoinCharge" && <UpdateCoinCharge />}
//           {activePage === "GetContact" && <GetAllContacts />}
//           {activePage === "AddCategory" && <CreateCategory />}
//           {activePage === "UpdateCategory" && <ManageCategories />}
//           {activePage === "AddCards" && <CreateCardByCategory />}
//           {activePage === "AllCards" && <CardsTable />}
//           {activePage === "getCards" && <CategoryCardsManagement />}
//           {activePage === "getCardsstatus" && <PaymentApproval />}
//           {activePage === "redeemRequests" && <RedeemRequests />}
//           {activePage === "createGoldcoin" && <CreateGoldCoin />}
//           {activePage === "updateGoldcoin" && <GoldCoinManagement />}
//           {activePage === "GoldcoinOrder" && <GoldCoinOrders />}
//           {activePage === "createAdvertisement" && <CreateAdvertisement />}
//           {activePage === "updateAdvertisement" && <AdvertisementManagement />}
//           {activePage === "approvephysicalcards" && <PhysicalCardApproval />}
//           {activePage === "reviewGet" && <ReviewManagement />}
//           {activePage === "profile" && <Profile />}


//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState } from "react";
import {
  FaUsers,
  FaBox,
  FaChartBar,
  FaMoneyBill,
  FaBriefcase,
  FaSignOutAlt,
  FaHome,
  FaTruck,
  FaClipboardList,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaShoppingCart,
  FaDollarSign,
  FaUserPlus,
  FaStar,
  FaBell,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEye,
  FaPlusCircle,
  FaBan,
  FaUserShield,
  FaCog,
  FaFileInvoice,
  FaCreditCard,
  FaPercentage,
  FaWarehouse,
  FaBoxes,
  FaExchangeAlt,
  FaHeadset,
  FaComment,
  FaChartLine,
  FaFileAlt,
  FaCar,
  FaWallet,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheck,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaAddressCard,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Mock Data
  const stats = {
    totalOrders: 1245,
    pendingOrders: 342,
    processingOrders: 156,
    shippedOrders: 89,
    deliveredOrders: 658,
    cancelledOrders: 45,
    totalRevenue: 1234567,
    pendingPayments: 234567,
    totalCustomers: 5678,
    activeDrivers: 45,
    averageRating: 4.8,
    onTimeDelivery: 94
  };

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", phone: "+91 9876543210", email: "john@example.com", address: "123 Main St, New York", status: "pending", amount: 2500, date: "2024-03-15", items: 3, driver: "Unassigned" },
    { id: "ORD-002", customer: "Jane Smith", phone: "+91 9876543211", email: "jane@example.com", address: "456 Oak Ave, Los Angeles", status: "processing", amount: 1800, date: "2024-03-14", items: 2, driver: "Mike Wilson" },
    { id: "ORD-003", customer: "Mike Johnson", phone: "+91 9876543212", email: "mike@example.com", address: "789 Pine St, Chicago", status: "shipped", amount: 3200, date: "2024-03-13", items: 4, driver: "Robert Brown" },
    { id: "ORD-004", customer: "Sarah Williams", phone: "+91 9876543213", email: "sarah@example.com", address: "321 Elm St, Houston", status: "delivered", amount: 2100, date: "2024-03-12", items: 2, driver: "John Davis" },
    { id: "ORD-005", customer: "Robert Brown", phone: "+91 9876543214", email: "robert@example.com", address: "654 Maple Dr, Phoenix", status: "cancelled", amount: 2900, date: "2024-03-11", items: 3, driver: "Unassigned" },
  ];

  const drivers = [
    { id: 1, name: "Mike Wilson", phone: "+91 9876543215", email: "mike@logistics.com", vehicle: "MH-01-AB-1234", status: "available", rating: 4.8, deliveries: 156, earnings: 45678 },
    { id: 2, name: "Robert Brown", phone: "+91 9876543216", email: "robert@logistics.com", vehicle: "MH-02-CD-5678", status: "on-delivery", rating: 4.9, deliveries: 203, earnings: 58900 },
    { id: 3, name: "John Davis", phone: "+91 9876543217", email: "john@logistics.com", vehicle: "MH-03-EF-9012", status: "offline", rating: 4.7, deliveries: 98, earnings: 28900 },
  ];

  const customers = [
    { id: 1, name: "John Doe", phone: "+91 9876543210", email: "john@example.com", orders: 12, totalSpent: 45678, status: "active" },
    { id: 2, name: "Jane Smith", phone: "+91 9876543211", email: "jane@example.com", orders: 8, totalSpent: 28900, status: "active" },
    { id: 3, name: "Mike Johnson", phone: "+91 9876543212", email: "mike@example.com", orders: 15, totalSpent: 78900, status: "active" },
  ];

  const warehouses = [
    { id: 1, name: "Mumbai Warehouse", location: "Mumbai, MH", capacity: "10,000 sq ft", stock: 5678, status: "active" },
    { id: 2, name: "Delhi Warehouse", location: "Delhi, DL", capacity: "8,000 sq ft", stock: 4234, status: "active" },
    { id: 3, name: "Bangalore Warehouse", location: "Bangalore, KA", capacity: "12,000 sq ft", stock: 7890, status: "active" },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return <FaClock className="text-yellow-500" />;
      case 'processing': return <FaBox className="text-blue-500" />;
      case 'shipped': return <FaTruck className="text-purple-500" />;
      case 'delivered': return <FaCheckCircle className="text-green-500" />;
      case 'cancelled': return <FaBan className="text-red-500" />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-[#0a1d37] to-[#0e2a4a] text-white flex flex-col transition-all duration-300 shadow-xl`}>
        <div className={`p-6 ${sidebarCollapsed ? 'px-2' : ''} border-b border-gray-700 flex items-center justify-between`}>
          {!sidebarCollapsed && <div className="text-2xl font-bold tracking-tight">🚚 Logistics</div>}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:text-gray-300"
          >
            {sidebarCollapsed ? '→' : '←'}
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavButton icon={<FaChartBar />} text="Dashboard" active={activePage === "dashboard"} onClick={() => setActivePage("dashboard")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaShoppingCart />} text="Orders" active={activePage === "orders"} onClick={() => setActivePage("orders")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaTruck />} text="Drivers" active={activePage === "drivers"} onClick={() => setActivePage("drivers")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaUsers />} text="Customers" active={activePage === "customers"} onClick={() => setActivePage("customers")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaWarehouse />} text="Warehouses" active={activePage === "warehouses"} onClick={() => setActivePage("warehouses")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaBoxes />} text="Inventory" active={activePage === "inventory"} onClick={() => setActivePage("inventory")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaMoneyBill />} text="Billing" active={activePage === "billing"} onClick={() => setActivePage("billing")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaChartLine />} text="Reports" active={activePage === "reports"} onClick={() => setActivePage("reports")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaBriefcase />} text="Profile" active={activePage === "profile"} onClick={() => setActivePage("profile")} collapsed={sidebarCollapsed} />
          <NavButton icon={<FaCog />} text="Settings" active={activePage === "settings"} onClick={() => setActivePage("settings")} collapsed={sidebarCollapsed} />
          
          <div className="pt-4 mt-4 border-t border-gray-700">
            <NavButton icon={<FaHome />} text="Go to Website" onClick={() => window.location.href = "/"} collapsed={sidebarCollapsed} />
            <NavButton icon={<FaSignOutAlt />} text="Logout" onClick={() => alert("Logout clicked")} collapsed={sidebarCollapsed} danger />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {activePage === "dashboard" && "Dashboard Overview"}
              {activePage === "orders" && "Order Management"}
              {activePage === "drivers" && "Driver Management"}
              {activePage === "customers" && "Customer Management"}
              {activePage === "warehouses" && "Warehouse Management"}
              {activePage === "inventory" && "Inventory Management"}
              {activePage === "billing" && "Billing & Payments"}
              {activePage === "reports" && "Reports & Analytics"}
              {activePage === "profile" && "Admin Profile"}
              {activePage === "settings" && "System Settings"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, Admin! Here's what's happening today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaBell className="text-gray-500 text-xl cursor-pointer hover:text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0a1d37] to-[#0e2a4a] rounded-full flex items-center justify-center text-white font-bold">
                AD
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">admin@logistics.com</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {/* Dashboard Page */}
          {activePage === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<FaShoppingCart className="text-blue-600 text-2xl" />} title="Total Orders" value={stats.totalOrders} trend="+12%" trendUp={true} bgColor="bg-blue-50" />
                <StatCard icon={<FaClock className="text-yellow-600 text-2xl" />} title="Pending Orders" value={stats.pendingOrders} trend="-5%" trendUp={false} bgColor="bg-yellow-50" />
                <StatCard icon={<FaCheckCircle className="text-green-600 text-2xl" />} title="Delivered" value={stats.deliveredOrders} trend="+23%" trendUp={true} bgColor="bg-green-50" />
                <StatCard icon={<FaDollarSign className="text-purple-600 text-2xl" />} title="Revenue" value={`₹${(stats.totalRevenue/100000).toFixed(1)}L`} trend="+18%" trendUp={true} bgColor="bg-purple-50" />
              </div>

              {/* Second Row Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<FaUsers className="text-indigo-600 text-2xl" />} title="Active Drivers" value={stats.activeDrivers} subtitle="Available for delivery" bgColor="bg-indigo-50" />
                <StatCard icon={<FaUserPlus className="text-pink-600 text-2xl" />} title="New Customers" value="+156" subtitle="This month" bgColor="bg-pink-50" />
                <StatCard icon={<FaStar className="text-orange-600 text-2xl" />} title="Rating" value={stats.averageRating} subtitle="out of 5.0" bgColor="bg-orange-50" />
                <StatCard icon={<FaTruck className="text-red-600 text-2xl" />} title="On-Time Delivery" value={`${stats.onTimeDelivery}%`} subtitle="Success rate" bgColor="bg-red-50" />
              </div>

              {/* Recent Orders Table */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                    <FaPlus /> Create Order
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{order.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(order.status)}
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                                {order.status.toUpperCase()}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-800 mr-2">
                              <FaEye />
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <FaEdit />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Orders Page */}
          {activePage === "orders" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <FaPlus /> New Order
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.phone}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{order.amount}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.items}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.driver}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(order.status)}
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-2"><FaEye /></button>
                          <button className="text-green-600 hover:text-green-800 mr-2"><FaEdit /></button>
                          <button className="text-red-600 hover:text-red-800"><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Drivers Page */}
          {activePage === "drivers" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Driver Management</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <FaPlus /> Add Driver
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drivers.map((driver) => (
                  <div key={driver.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaUserPlus className="text-blue-600 text-xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{driver.name}</h3>
                          <p className="text-sm text-gray-500">{driver.vehicle}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        driver.status === 'available' ? 'bg-green-100 text-green-800' :
                        driver.status === 'on-delivery' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {driver.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-center gap-2"><FaPhone className="text-gray-400" /> {driver.phone}</p>
                      <p className="flex items-center gap-2"><FaEnvelope className="text-gray-400" /> {driver.email}</p>
                      <p className="flex items-center gap-2"><FaStar className="text-yellow-400" /> Rating: {driver.rating}/5.0</p>
                      <p className="flex items-center gap-2"><FaTruck className="text-gray-400" /> Deliveries: {driver.deliveries}</p>
                      <p className="flex items-center gap-2"><FaMoneyBill className="text-gray-400" /> Earnings: ₹{driver.earnings.toLocaleString()}</p>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Assign Order</button>
                      <button className="px-3 py-1 border rounded hover:bg-gray-50">View Profile</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customers Page */}
          {activePage === "customers" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Customer Management</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <FaPlus /> Add Customer
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{customer.phone}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{customer.orders}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{customer.totalSpent.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">{customer.status}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-2"><FaEye /></button>
                          <button className="text-green-600 hover:text-green-800"><FaEdit /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Warehouses Page */}
          {activePage === "warehouses" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Warehouse Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {warehouses.map((warehouse) => (
                  <div key={warehouse.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{warehouse.name}</h3>
                      <FaWarehouse className="text-blue-600 text-2xl" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><FaMapMarkerAlt className="inline mr-2" /> {warehouse.location}</p>
                    <p className="text-sm text-gray-600 mb-2">Capacity: {warehouse.capacity}</p>
                    <p className="text-sm text-gray-600 mb-2">Current Stock: {warehouse.stock} units</p>
                    <p className="text-sm text-gray-600 mb-2">Status: <span className="text-green-600">{warehouse.status}</span></p>
                    <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Manage Stock</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inventory Page */}
          {activePage === "inventory" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Inventory Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Stock Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total SKUs</span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Units</span>
                      <span className="font-semibold">18,902</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Low Stock Items</span>
                      <span className="font-semibold text-red-600">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Out of Stock</span>
                      <span className="font-semibold text-red-600">5</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Recent Stock Movements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Gold Coin 1g</span>
                      <span className="text-green-600">+150 units</span>
                      <span className="text-gray-500">Today</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Silver Coin 5g</span>
                      <span className="text-red-600">-45 units</span>
                      <span className="text-gray-500">Yesterday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Page */}
          {activePage === "billing" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing & Payments</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-600">₹{stats.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Pending Payments</p>
                  <p className="text-2xl font-bold text-yellow-600">₹{stats.pendingPayments.toLocaleString()}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-blue-600">₹{Math.floor(stats.totalRevenue * 0.15).toLocaleString()}</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.slice(0, 3).map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">INV-{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{order.amount}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Paid</span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-800"><FaFileInvoice /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Reports Page */}
          {activePage === "reports" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports & Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Daily Report Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Orders Today</span>
                      <span className="font-semibold">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Today</span>
                      <span className="font-semibold text-green-600">₹1,25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivered Today</span>
                      <span className="font-semibold text-green-600">38</span>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Monthly Report</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Total Orders</span>
                      <span className="font-semibold">1,245</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Revenue</span>
                      <span className="font-semibold text-green-600">₹12,34,567</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Success Rate</span>
                      <span className="font-semibold text-green-600">94%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download Daily Report</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Download Monthly Report</button>
              </div>
            </div>
          )}

          {/* Profile Page */}
          {activePage === "profile" && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-[#0a1d37] to-[#0e2a4a] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  AD
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Admin User</h2>
                  <p className="text-gray-600">Super Administrator</p>
                  <p className="text-gray-500 text-sm">admin@logistics.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
                  <div className="border rounded-lg p-4">
                    <p><strong>Full Name:</strong> Admin User</p>
                    <p><strong>Email:</strong> admin@logistics.com</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Role:</strong> Super Admin</p>
                    <p><strong>Joined:</strong> January 1, 2024</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Account Statistics</h3>
                  <div className="border rounded-lg p-4">
                    <p><strong>Total Actions:</strong> 1,234</p>
                    <p><strong>Last Login:</strong> Today, 10:30 AM</p>
                    <p><strong>Active Sessions:</strong> 1</p>
                    <p><strong>Permissions:</strong> Full Access</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Page */}
          {activePage === "settings" && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">System Settings</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">General Settings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Site Name</span>
                      <input type="text" value="Logistics Management" className="border rounded px-3 py-1" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Time Zone</span>
                      <select className="border rounded px-3 py-1">
                        <option>IST (UTC+5:30)</option>
                        <option>EST (UTC-5:00)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Notification Settings</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked /> <span>Email Notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked /> <span>SMS Alerts</span>
                    </label>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save Settings</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Helper Components
const NavButton = ({ icon, text, active, onClick, collapsed, danger }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
      active ? 'bg-blue-600 text-white shadow-lg' : 
      danger ? 'hover:bg-red-600 text-gray-300 hover:text-white' : 
      'text-gray-300 hover:bg-gray-700 hover:text-white'
    } ${collapsed ? 'justify-center' : ''}`}
  >
    <span className="text-xl">{icon}</span>
    {!collapsed && <span className="font-medium">{text}</span>}
  </button>
);

const StatCard = ({ icon, title, value, trend, trendUp, subtitle, bgColor }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className={`${bgColor} p-3 rounded-full`}>{icon}</div>
      {trend && (
        <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    <p className="text-gray-600 text-sm mt-1">{title}</p>
    {subtitle && <p className="text-gray-400 text-xs mt-1">{subtitle}</p>}
  </div>
);

export default AdminDashboard;