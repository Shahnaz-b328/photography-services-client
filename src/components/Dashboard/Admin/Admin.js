import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import AddService from '../AddService/AddService';
import BookingList from '../../User/BookingList/BookingList';
import Order from './Order/Order';
import ManageServices from '../ManageServices/ManageServices';
import AddAdmin from '../AddAdmin/AddAdmin';
import { UserContext } from './../../../App';
const Admin = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('https://intense-escarpment-80921.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: logInUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (
        <Router>
            <div className="d-flex mt-5">
                <nav>
                    <ul className="list-unstyled mx-5">
                        <li>
                            <Link to="/bookList"><FontAwesomeIcon icon={faList} />Book List</Link>
                        </li>
                      { admin && <div>
                            <li>
                                <Link to="/orderList"><FontAwesomeIcon icon={faList} />Order List</Link>
                            </li>
                            <li>
                                <Link to="/addService"><FontAwesomeIcon icon={faPlus} />Add Service</Link>
                            </li>
                            <li>
                                <Link to="/addAdmin"><FontAwesomeIcon icon={faUserPlus} />New Admin</Link>
                            </li>
                            <li>
                                <Link to="/manageService"><FontAwesomeIcon icon={faBorderAll} />Manage Service</Link>
                            </li>
                        </div>}
                    </ul>
                </nav>
                <Switch>
                    <Route path="/addService">
                        <AddService />
                    </Route>
                    <Route path="/bookList">
                        <BookingList />
                    </Route>
                    <Route path="/orderList">
                        <Order />
                    </Route>
                    <Route path="/manageService">
                        <ManageServices />
                    </Route>
                    <Route path="/addAdmin">
                        <AddAdmin />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
};

export default Admin;