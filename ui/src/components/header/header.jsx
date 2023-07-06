import { Layout } from 'antd';
import './header.css';

const { Header } = Layout;

const HeaderComponent = ()=>{
    return (
        <Header className="header">
            <h1 className="title">Task List</h1>
        </Header>
    );
}

export default HeaderComponent;