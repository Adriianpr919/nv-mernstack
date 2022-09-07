import React from 'react';
import './AdminStyle.css';

// Components All.
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminSizeModal from './AdminSizeModal';
import AdminGoldModal from './AdminGoldModal';
import AdminStoneModal from './AdminStoneModal';
import AdminProductModal from './AdminProductModal';

const AdminDashboard = () => (
    /********************************************** 
     * RENDERING
    **********************************************/
    <section>
        <AdminHeader />
        <AdminActionBtns />
        <AdminCategoryModal />
        <AdminSizeModal />
        <AdminGoldModal />
        <AdminStoneModal />
        <AdminProductModal />
    </section>
);

export default AdminDashboard;
