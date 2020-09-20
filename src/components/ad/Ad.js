import React from 'react'
import { Carousel } from 'react-bootstrap';
function Ad() {
    return (
        <Carousel className="mb-5">
            <Carousel.Item style={{ 'height': '200px' }}>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1552240388-3ac412fd43f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Место для рекламы вашей продукции</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '200px' }}>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1555818909-250cfdd59f64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Место для рекламы вашей продукции</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '200px' }}>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1598880940675-390f296b2ba5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Место для рекламы вашей продукции</h3>
                     
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '200px' }}>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1598535087494-5b5d68f62fff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Место для рекламы вашей продукции</h3>
                     
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '200px' }}>
                <img
                    className="d-block w-100"
                    src='https://images.unsplash.com/photo-1588767586383-3d298540087d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80'
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3>Место для рекламы вашей продукции</h3>
                     
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Ad;
