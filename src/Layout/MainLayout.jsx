import PropTypes from 'prop-types';
import Header from "../Components/Header/Header"

import { Outlet } from "react-router-dom";

const MainLayout = ({truncateText}) => {
    return (
        <div>
            <Header truncateText={truncateText}></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

MainLayout.propTypes = {
    truncateText: PropTypes.func,
};

export default MainLayout;
