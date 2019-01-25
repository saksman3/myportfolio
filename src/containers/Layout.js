import React from 'react';
import { Layout, Header, Navigation, Content,Drawer} from 'react-mdl';
import {Link} from 'react-router-dom'
const CustomLayout = (props) => {
    return (
        <div className="demo-big-content">
    <Layout>
        <Header title="Portfolio" scroll className="header-color">
            <Navigation>
                <Link to="/profile">Profile</Link>
                <Link to="/education">Education</Link>
                <Link to="/work">Previous Work</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">ContactMe</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                <Link to="/profile">Profile</Link>
                <Link to="/education">Education</Link>
                <Link to="/work">Previous Work</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">ContactMe</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            {props.children}
        </Content>
    </Layout>
</div>
    );
};

export default CustomLayout;