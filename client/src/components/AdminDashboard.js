import React, { useEffect } from 'react';
import './AdminStyle.css';

// Components All.
import AdminHeader from './AdminHeader';
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';
import AdminSizeModal from './AdminSizeModal';
import AdminGoldModal from './AdminGoldModal';
import AdminStoneModal from './AdminStoneModal';
import AdminProductModal from './AdminProductModal';
import UserOrdersViewModal from './UserOrdersViewModal';

import AdminBodyCategory from './AdminBodyCategory';
import AdminBody from './AdminBody';
import UserBodyOrders from './UserBodyOrders';
import AdminBodySize from './AdminBodySize';
import AdminBodyGold from './AdminBodyGold';
import AdminBodyStone from './AdminBodyStone';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getSizes } from '../redux/actions/sizeActions';
import { getGolds } from '../redux/actions/goldActions';
import { getStones } from '../redux/actions/stoneActions';
import { getProducts } from '../redux/actions/productActions';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getCategories(),
            getSizes(),
            getGolds(),
            getStones(),
        );
    }, [dispatch]);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
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
            <AdminBodyCategory />
            <AdminBody />
            <AdminBodySize />
            <AdminBodyGold />
            <AdminBodyStone />
            <UserBodyOrders />
            <UserOrdersViewModal />
        </section>
    );
}

export default AdminDashboard;
