import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";

import { ReactComponent as CrwnLogo} from '../../assets/crow.svg'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    COMPRAR
                </NavLink>
                {
                    currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>{' '}SAIR{' '}</NavLink>)
                        : (
                        <NavLink to='/auth'>ENTRAR</NavLink>)     
                }
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;