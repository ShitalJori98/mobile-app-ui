import React, { Component } from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Heading from './Heading';
import{ButtonContainer} from './CButton'
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <div>
            <Heading/>
           <NavWrapper className="navbar navbar-expand-sm navbar-dark">
               <PhoneAndroidIcon/>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5" style={{color:'white'}}>Products</li>
            </ul>
            <ul className="ml-auto">
            <ButtonContainer>
               <ShoppingCartIcon/>My Cart
            </ButtonContainer>
            </ul>
           </NavWrapper>
           </div>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
padding:0.1rem !important;

`