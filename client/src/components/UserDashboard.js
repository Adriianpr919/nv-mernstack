import React from 'react';

// Components All.
import UserActionBtns from './UserActionBtns';
import UserOrders from './UserOrders';
// ---------------------------------------------------
import './UserDashboard.css';

const UserDashboard = () => {
    return  (
        /********************************************** 
         * RENDERING
        **********************************************/
        <section>
            <UserActionBtns />
            <UserOrders />
        </section>
    );
};  

export default UserDashboard;
