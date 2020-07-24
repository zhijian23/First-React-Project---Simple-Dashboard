import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Avatar from "./Avatar";
import Main from "../main";
import { Link } from "react-router-dom";
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

function PageDesign() {
    const year = new Date().getFullYear()
    return (
        <div className="demo-big-content" style={{ height: "500px" }}>
            <Layout>
                <Header title="VALENCA.CO" scroll>
                    <Navigation>
                        <Link to="">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <Avatar imgURL="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" />
                    </Navigation>
                </Header>
                <Drawer title="VALENCA.CO">
                    <Navigation>
                        <Link to="">Home</Link>
                        <Link to="/profile">Profile</Link>
                        <a href="/">Task</a>
                        <Link to="/support">Support</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>

                <Footer size="mini">
                    <FooterSection type="middle" logo="VALENCA.CO" scroll>
                        <FooterLinkList>
                            <Link to="/support">Support</Link>
                            <a href="/">Copyright {year}</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>

        </div>
    );
}

export default PageDesign