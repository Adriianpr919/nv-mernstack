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
import AdminBody from './AdminBody';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getSize } from '../redux/actions/sizeActions';
import { getGold } from '../redux/actions/goldActions';
import { getStone } from '../redux/actions/stoneActions';
import { getProducts } from '../redux/actions/productActions';

const AdminDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getCategories(),
            getSize(),
            getGold(),
            getStone(),
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
            <AdminBody />
        </section>
    );
}

export default AdminDashboard;
