import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'react-feather';

import NavItems from './NavItems';
import NavLinks from './NavLinks';
import Logo from '../../images/main-logo.png';
import { State } from '../../interfaces/store';
import { loginWithToken } from '../../actions/auth';

const Navbar: React.FC = () => {
    const location = useLocation();
    const dispatch: any = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const { user } = useSelector((state: State) => state.auth);

    useEffect(() => {
        if(localStorage.getItem('bhu-1-derToken')) {
            dispatch(loginWithToken());
        }
    }, []);

    return (
        <nav className='pl-3 pr-10 py-3 bg-lightgrey'>
            <div className='flex items-center justify-between'>
                <Link to="/">
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                </Link>
                <ul className='hidden md:flex gap-4 text-darkgrey'>
                    <NavItems
                        setShowMenu={setShowMenu}
                        pathname={location.pathname}
                        user={user}
                    />
                </ul>
                <div className='hidden md:flex gap-4'>
                    <NavLinks
                        setShowMenu={setShowMenu}
                        pathname={location.pathname}
                        user={user}
                    />
                </div>
                <div onClick={() => setShowMenu(true)} className='md:hidden p-2 cursor-pointer rounded-full transition-bg duration-300 hover:bg-grey'>
                    <Menu color='#333' />
                </div>
            </div>
            <div className={`fixed top-0 left-0 z-10 w-screen bg-white shadow-medium transition-all duration-200 ${showMenu ? 'pointer-events-auto md:pointer-events-none opacity-100 md:opacity-0' : 'pointer-events-none opacity-0 -translate-y-full'}`}>
                <div className='flex items-center justify-between pl-3 pr-10 pt-3'>
                    <img className='h-60px' src={Logo} alt="bhu-1-der" />
                    <X onClick={() => setShowMenu(false)} color='#333' size={38} className='p-2 cursor-pointer rounded-full hover:bg-lightgrey' />
                </div>
                <ul className='flex flex-col gap-3 items-center text-darkgrey px-6 pb-4'>
                    <NavItems
                        setShowMenu={setShowMenu}
                        pathname={location.pathname}
                        user={user}
                    />
                    <li className='w-full flex justify-between'>
                        <NavLinks
                            setShowMenu={setShowMenu}
                            pathname={location.pathname}
                            user={user}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;