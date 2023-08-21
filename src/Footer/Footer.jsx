import React from 'react';

const Footer = () => {
    return (
        <div className='bg-cover bg-center   bg-opacity-50'
        style={{
            backgroundImage: 'url("https://timzee-demo.myshopify.com/cdn/shop/files/Gallery2.jpg?v=1614300904&width=1500")'
        }}
        >
            <div className='py-28 text-white lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 mx-auto'>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold'>Help</h2>
                    <p>Search</p>
                    <p>Help</p>
                    <p>Information</p>
                    <p>Privacy policy</p>
                    <p>Shipping details</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold'>Information</h2>
                    <p>Search Terms</p>
                    <p>Advance Search</p>
                    <p>Help and FAq</p>
                    <p>Store Location</p>
                    <p>Orders and Returns</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold'>Support</h2>
                    <p>Contact us</p>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Refunds & Returns</p>
                    <p>Deliveries</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-3xl font-semibold'>Address</h2>
                    <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    <p>0000 - 123 - 456789</p>
                    <p>info@example.com</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;