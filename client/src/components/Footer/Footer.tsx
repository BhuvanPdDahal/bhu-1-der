import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, GitHub } from 'react-feather';

import Logo from '../../images/logos/main-logo.png';

const Footer: React.FC = () => {
    return (
        <motion.div
            className='flex items-center justify-between pl-3 pr-10 shadow-medium'
            initial={{ translateY: '100%', opacity: 0 }}
            whileInView={{ translateY: '0%', opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className='flex items-center'>
                <img className='h-60px pr-4 border-r border-solid border-darkgrey' src={Logo} alt="bhu-1-der" />
                <div className='mx-4 text-normal'>Copyright © 2024 bhu-1-der.com</div>
            </div>
            <div className='text-darkgrey flex gap-3'>
                <Link className='transition-color duration-200 hover:text-normal' to='https://www.facebook.com' target='_blank'>
                    <Facebook />
                </Link>
                <Link className='transition-color duration-200 hover:text-normal' to='https://www.twitter.com' target='_blank'>
                    <Twitter />
                </Link>
                <Link className='transition-color duration-200 hover:text-normal' to='https://www.github.com' target='_blank'>
                    <GitHub />
                </Link>
            </div>
        </motion.div>
    )
};

export default Footer;