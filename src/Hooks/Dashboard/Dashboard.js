import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl text-bold text-purple-600'>Wellcome To Your Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            admin ? <li><Link to={'/dashboard/allitem'}>Manage Products</Link></li> : <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        }
                        {
                            admin ? <li><Link to={'/dashboard/manageallorders'}>Manage All Orders</Link></li> : <li><Link to={'/dashboard/review'}>Add A Reveiw</Link></li>
                        }
                        <li><Link to={'/dashboard/myprofile'}>My Profile</Link></li>

                        {admin && <>
                            <li><Link to={'/dashboard/addproduct'}>Add A Product</Link></li>
                            <li><Link to={'/dashboard/allusers'}>Make Admin</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;