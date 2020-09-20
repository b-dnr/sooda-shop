import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Card, CardBody } from "reactstrap";
import { Link} from "react-router-dom";
import FacebookSvg from '../../assets/icons/facebook.svg';
import TwitterSvg from '../../assets/icons/twitter.svg';
import InstagramSvg from '../../assets/icons/instagram.svg'


const Footer = () => {
  return (
    <div>
      
      <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-5">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold ">
                Контактная информация
              </h5>
              <Card>
                <CardBody>
                  <h6>Наш адрес:
                    <a 
                    style={{textDecoration: 'none'}}
                    href="https://2gis.kg/bishkek/search/%D1%80%D0%B0%D0%B7%D0%B7%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%20100/geo/15763234351118095/74.604685%2C42.881327?m=74.604719%2C42.881312%2F15.41">
                      {(" ")}г. Бишкек, 720040, ул. Раззакова 100
                    </a>
                  </h6>
                  <h6>Номер телефона: 0312 90 99 90/ 0312 770 660</h6>
                  <h6>Адрес электронной почты:{(" ")}
                    <Link 
                      style={{textDecoration: 'none'}}
                      to=''>wec@gmail.com/</Link>
                    <Link 
                      style={{textDecoration: 'none'}}
                      to=''>wng@gmail.com</Link>
                  </h6>
                </CardBody>
              </Card>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                О проекте
              </h5>
              <ul 
                className="list-unstyled"
              >
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="https://www.kg.undp.org/content/kyrgyzstan/ru/home.html">
                    Для чего создан проект?
                  </a>
                </li>
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="https://www.kg.undp.org/content/kyrgyzstan/ru/home.html">
                    Кто поддерживает?
                  </a>
                </li>
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="https://www.kg.undp.org/content/kyrgyzstan/ru/home.html">
                    Будущее проекта!
                  </a>
                </li>
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="https://www.kg.undp.org/content/kyrgyzstan/ru/home.html">
                    Хотите поддержать?
                  </a>
                </li>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="3">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                Покупка или продажа
            </h5>
              <ul className="list-unstyled">
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="/">Сделать покупку</a>
                </li>
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="/form">Опубликовать товар</a>
                </li>
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="/order">Оформить заказ</a>
                </li>
                <li>
                  <a 
                    style={{textDecoration: 'none'}}
                    href="/">Предложения/ жалобы</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="text-uppercase mb-4 mt-3 font-weight-bold text-center">
                следите за нами
            </h5>
              <ul className="list-unstyled d-flex justify-content-between align-items-center">
                <li>
                  <a href="https://www.facebook.com/beksultanovadi">
                    <img
                      style={{
                        width: '40px',
                        height: '40px'
                      }}
                      src={FacebookSvg} 
                      alt="https://www.facebook.com/beksultanovadi"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/be_dnr">
                    <img
                      style={{
                      width: '40px',
                      height: '40px'
                      }}
                      src={TwitterSvg}
                      alt="https://twitter.com/be_dnr" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/b.dnr/">
                    <img
                      style={{
                      width: '40px',
                      height: '40px'
                      }}
                      src={InstagramSvg}
                      alt="https://www.instagram.com/b.dnr/" 
                    />
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: 
              <a style={{textDecoration: 'none'}} href="https://www.MDBootstrap.com"> sooda.org </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;