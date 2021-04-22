import React, { Component } from 'react';
import './home.css';
import { PageHeader, Button } from 'antd';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import Login from '../login/login';
import Register from '../register/register';
import { Card, Row, Col, Anchor, BackTop } from 'antd';
import { Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Menubar from '../menubar/menubar';




const { Meta } = Card;

const { Header, Footer, Content } = Layout;


const contentStyle = {
    height: '30rem',
    color: '#fff',
    width: '100%',
    lineHeight: '20rem',
    textAlign: 'center',
    background: '#364d79',

};


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginVisible: false,
            regVisible: false,
            bounds: { left: 0, top: 0, bottom: 0, right: 0 },
        }

    }

    draggleRef = React.createRef();


    render() {
        return (
            <div className="homepage">
                <Layout>
                    <Anchor>
                        <Header className="header">
                            <a href="/"><img className="logo" src="/images/blazon.png" alt="logo" /></a>
                            <div className="avatar">
                                <a href="https://www.linkedin.com/" ><Avatar size={36} src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" /></a>
                                <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" ><Avatar size={40} src="https://www.freepnglogos.com/uploads/email-png/mail-message-email-send-image-pixabay-5.png" /></a>
                                <a href="https://www.facebook.com/" ><Avatar size={37} src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/facebook-512.png" /></a>
                            </div>
                            <Button className="login-button" type="primary" shape="round" onClick={() => this.setState({ loginVisible: true })}>login</Button>
                            <Login visible={this.state.loginVisible}
                                handleCancel={() => this.setState({ loginVisible: false })}
                                openReg={() => {
                                    this.setState({
                                        loginVisible: false,
                                        regVisible: true,
                                    })
                                }}
                            />
                            <Register visible={this.state.regVisible}
                                handleCancel={() => this.setState({ regVisible: false })}
                                openLogin={() => {
                                    this.setState({
                                        loginVisible: true,
                                        regVisible: false,
                                    })
                                }}
                            />
                        </Header>
                        <Menubar />
                    </Anchor>
                    <Layout >
                        <BackTop />
                        <Content className="layout">
                            <div>
                                <Carousel autoplay>

                                    <div>
                                        <img style={contentStyle} src="https://c1.wallpaperflare.com/preview/940/856/834/various-education-school-study.jpg" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://media.istockphoto.com/photos/opened-book-panorama-reading-education-literature-concept-picture-id1011880570?k=6&m=1011880570&s=170667a&w=0&h=5nly3zveeXfuKNwYfGnnN3ph08aPpU1y5fH36q3nMws=" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://virtuallystagingproperties.com/wp-content/uploads/2012/03/iStock-1127580796-2048x904.jpg" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://answers.syr.edu/download/attachments/54886524/1600x640%20Eggers%20070%20Student%20View.jpg?version=1&modificationDate=1570059351000&api=v2" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://thumbs.dreamstime.com/b/panorama-blurred-bookshelf-many-old-books-book-shop-library-panorama-blurred-bookshelf-many-old-books-book-shop-157752458.jpg" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://cdn.guidingtech.com/imager/assets/190706/Beautiful-HD-Birds-Wallpapers-Kingfishers_4d470f76dc99e18ad75087b1b8410ea9.jpg?1524142280" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://static.vecteezy.com/system/resources/previews/001/937/687/non_2x/digital-classroom-online-education-on-laptop-and-blank-space-background-website-social-distance-concept-vector.jpg" alt="banerimage" />
                                    </div>
                                    <div>
                                        <img style={contentStyle} src="https://thumbs.dreamstime.com/b/panorama-antique-books-shelf-panorama-antique-books-shelf-130183323.jpg" alt="banerimage" />
                                    </div>

                                </Carousel>

                            </div><br /> <br />
                            <h1>Explore Top Courses</h1>
                            <div className="cards-row">

                                <div >
                                    <Card className="card"

                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://images.unsplash.com/photo-1589595363745-d842812a9db7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJpcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <div>
                                    <Card className="card"
                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://media.newyorker.com/photos/5a95a5b13d9089123c9fdb7e/2:2/w_3289,h_3289,c_limit/Petrusich-Dont-Mess-with-the-Birds.jpg"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <div>
                                    <Card className="card"
                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <div>
                                    <Card className="card"
                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <div>
                                    <Card className="card"
                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://images.unsplash.com/photo-1550853024-fae8cd4be47f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <div>
                                    <Card className="card"
                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://www.thesprucepets.com/thmb/BNXUJs2zQGwwy5nVrWOk-8gWqOc=/3101x3101/smart/filters:no_upscale()/a-jenday-conure--aratinga-jandaya--perched-in-a-tree--also-known-as-jandaya-parakeet-is-a-small-neotropical-bird-found-in-northeastern-brazil--1271574400-b0036047517a4709ae998813fd790932.jpg"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <div>
                                    <Card className="card"
                                        hoverable={true}
                                        style={{ width: 250 }}
                                        cover={
                                            <img
                                                alt="example"
                                                src="https://scx2.b-cdn.net/gfx/news/hires/2019/uscresearche.jpg"
                                            />
                                        }
                                        actions={[
                                            <SettingOutlined key="setting" />,
                                            <EditOutlined key="edit" />,
                                            <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description" />
                                    </Card>
                                </div>
                                <br /><br />
                            </div>
                        </Content>
                    </Layout>
                    <Footer className="footer">
                        <Row>
                            <Col span={8}>
                               Social
                            </Col>
                            <Col span={8}>
                                <a href="/"><img className="logo" src="/images/blazon.png" alt="logo" /></a>
                                <h3 style={{ fontWeight: "400", color: "white" }}>24/4, SKS Building,<br/> 2nd Floor, (Above KVB),<br/>
                                MTP Road, Kavundampalayam,<br />
                                Coimbatore, Tamil Nadu,<br/>
                                India - 641 030.<br />
                                <a href="/">info@blazon.in</a><br />
                                Contact:+91 422 4206100
                                </h3>
                            </Col>
                            <Col span={8}>
                                <div class="mapouter">
                                    <div class="gmap_canvas"><iframe width="279" height="226" id="gmap_canvas" src="https://maps.google.com/maps?q=blazon%20web%20Development&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
                                        <a href="https://yt2.org/youtube-to-mp3-ALeKk00qEW0sxByTDSpzaRvl8WxdMAeMytQ1611842368056QMMlSYKLwAsWUsAfLipqwCA2ahUKEwiikKDe5L7uAhVFCuwKHUuFBoYQ8tMDegUAQCSAQCYAQCqAQdnd3Mtd2l6"></a>
                                        <br />
                                        <a href="https://google-map-generator.com">map generator</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </div>
        )
    }

}

export default Home;
