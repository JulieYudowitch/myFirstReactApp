import './SideBar.css';
import './SideBarData';
import styled from 'styled-components';
import { FcMenu } from 'react-icons/fc';
import { Link, Router, Routes, Route, Switch } from 'react-router-dom';

const ShopNav = styled.div`
background: rgb(255, 255, 255, 0.9);
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const shopNavIcon = styled(Link)`
margin-left: 2rem;
cursor: pointer;
font-size: 2rem;
`

function SideBar() {
    return (
        <div>
            <nav>
                <shopNavIcon to='#'>
                  <FcMenu />
                </shopNavIcon >   
          </nav>
        </div>
    )
}

export default SideBar;