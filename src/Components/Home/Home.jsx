import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import PropTypes from 'prop-types';



const Home = ({truncateText}) => {
    
    return (
        <div>
            <Header truncateText={truncateText}></Header>
            <Outlet></Outlet>
            
            
            
        </div>
    );
};

Home.propTypes = {
    truncateText: PropTypes.func
};

export default Home;
