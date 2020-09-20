
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Button } from 'reactstrap';

function Slider() {
    return (
        <Carousel className="mb-5">
            <Carousel.Item style={{ 'height': '630px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-9/94225281_3089609787769067_8017978873843023872_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=H-s43zpb430AX_r6eKd&_nc_ht=scontent.ffru9-1.fna&oh=b7c8392e8e48b51d71a5a1e055e534d0&oe=5F881031'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Button color='primary' style={{
                        margin: '30px', border: 'none', padding: '20px', backgroundColor:'#BFBFBF'
                    }}>
                        <h5 className='text-primary'>По стопам предков</h5>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '630px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-9/96151890_3125470397516339_2905171103703891968_o.jpg?_nc_cat=106&_nc_sid=cdbe9c&_nc_ohc=wisQWZ6cxTIAX-3AyEk&_nc_ht=scontent.ffru9-1.fna&oh=cb009dd1c8be87abca323ccfcdd20d85&oe=5F889266'
                    alt="First slide"
                />
                <Carousel.Caption>
                <Button color='primary' style={{
                        margin: '30px', border: 'none', padding: '20px', backgroundColor:'#BFBFBF'
                    }}>
                        <h5 className='text-primary'>По стопам предков</h5>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '630px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-0/p180x540/117807025_3392693587460684_7101926439197349130_o.jpg?_nc_cat=103&_nc_sid=e3f864&_nc_ohc=6owcrCa211cAX950fAR&_nc_ht=scontent.ffru9-1.fna&tp=6&oh=afd5e38115d8eb2d0050e97bfdae1352&oe=5F8789EE'
                    alt="First slide"
                />
                <Carousel.Caption>
                <Button color='primary' style={{
                        margin: '30px', border: 'none', padding: '20px', backgroundColor:'#BFBFBF'
                    }}>
                        <h5 className='text-primary'>По стопам предков</h5>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;
