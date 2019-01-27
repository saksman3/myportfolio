import React from 'react';
import { Layout, Header, Navigation, Content,Drawer} from 'react-mdl';
import {Link} from 'react-router-dom'
const CustomLayout = (props) => {
    return (
        <div className="demo-big-content">
    <Layout style={{color:'white'}}>
        <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll={false} className="header-color">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">ContactMe</Link>
            </Navigation>
        </Header>
        
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
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