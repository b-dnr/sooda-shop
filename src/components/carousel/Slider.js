
import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Button } from 'reactstrap';

function Slider() {
    return (
        <Carousel className="mb-5">
            <Carousel.Item style={{ 'height': '730px' }}>
                <img
                    className="d-block w-100"
                    src="https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-9/117807025_3392693587460684_7101926439197349130_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e3f864&_nc_ohc=tpD1wdvZU2sAX_LDgA3&_nc_ht=scontent.ffru9-1.fna&oh=6bc7b1d810ee780f78abac8d35a74962&oe=60381380"
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
            <Carousel.Item style={{ 'height': '730px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-9/73504798_2717924051604311_130644405404041216_o.jpg?_nc_cat=104&ccb=2&_nc_sid=e3f864&_nc_ohc=mFIyM61ThRcAX_6GqFl&_nc_ht=scontent.ffru9-1.fna&oh=7bfca85b1e077b90997c40ee0f6d5eae&oe=60370B4F'
                    alt="Second slide"
                />
                <Carousel.Caption>
                <Button color='primary' style={{
                        margin: '30px', border: 'none', padding: '20px', backgroundColor:'#BFBFBF'
                    }}>
                        <h5 className='text-primary'>По стопам предков</h5>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '730px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t31.0-8/1093796_569516883111716_1802022950_o.jpg?_nc_cat=106&ccb=2&_nc_sid=19026a&_nc_ohc=3eoTbsEY_QMAX9GZ7Em&_nc_ht=scontent.ffru9-1.fna&oh=8bde0e2be32177cb3bfc2ae42739e060&oe=60387942'
                    alt="Third slide"
                />
                <Carousel.Caption>
                <Button color='primary' style={{
                        margin: '30px', border: 'none', padding: '20px', backgroundColor:'#BFBFBF'
                    }}>
                        <h5 className='text-primary'>По стопам предков</h5>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '730px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-9/102311786_3189330501130328_8612922966365175808_o.jpg?_nc_cat=102&ccb=2&_nc_sid=cdbe9c&_nc_ohc=ovV6syWERrEAX_zXsmG&_nc_ht=scontent.ffru9-1.fna&oh=de20bfaf9d6816864dfa213d4f462aae&oe=603948B8'
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                <Button color='primary' style={{
                        margin: '30px', border: 'none', padding: '20px', backgroundColor:'#BFBFBF'
                    }}>
                        <h5 className='text-primary'>По стопам предков</h5>
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '730px' }}>
                <img
                    className="d-block w-100"
                    src='https://scontent.ffru9-1.fna.fbcdn.net/v/t1.0-9/74632534_3270221989707845_2718253326240227679_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=h-TalJ8aEsEAX8Zsv23&_nc_ht=scontent.ffru9-1.fna&oh=2acfb2a42406116286a92e0062e60978&oe=6037A6B0'
                    alt="Fifth slide"
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
