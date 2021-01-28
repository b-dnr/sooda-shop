import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import Order from '../components/order/Order';


//? Auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));

//? Pages
const Main = React.lazy(() => import('../pages/main/Main'));
const AboutUs = React.lazy(() => import('../pages/aboutUs/AboutUs'));
const Form = React.lazy(()=> import('../pages/form/Form'));
const Contacts = React.lazy(()=> import('../pages/contacts/Contacts'));


//? ProductDetail
const ProductDetail = React.lazy(() => import('../pages/productDetail/ProductDetail'))

//? Profile
const Profile = React.lazy(()=> import('../components/profile/Profile'))

const PrivateRoute = ({ children, ...rest })=>{
    // const {isAuth } = {isAuth: true};
    var token = localStorage.getItem("token");  
    const isAuth = token ? true : false;
    return (
        <Route
            {...rest}
            render={
                ({location})=>{
                    return isAuth ? (children) : (
                        <Redirect 
                            to={{
                                pathname:"/auth/login",
                                state: {from:location}
                            }}
                        />
                    )
                }
            }
        />
    )
}

function Routes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component={Login}
                    />
                    <Route
                        exact
                        path="/auth/logout"
                        component={Logout}
                    />
                    <Route
                        exact
                        path="/auth/register"
                        component={Register}
                    />

                    <Route exact path="/">
                        <Layout>
                            <Main/>
                        </Layout>
                    </Route>

                    <Route exact path="/about-us">
                        <Layout>
                            <AboutUs/>
                        </Layout>
                    </Route>
                    <Route exact path="/form">
                        <Layout>
                            <Form/>
                        </Layout>
                    </Route>
                    <Route exact path="/contacts">
                        <Layout>
                            <Contacts/>
                        </Layout>
                    </Route>
                    <Route exact path="/products/:id">
                        <Layout>
                            <ProductDetail/>
                        </Layout>
                    </Route>
                    <Route exact path="/order">
                        <Layout>
                            <Order/>
                        </Layout>
                    </Route>
                    <Route exact path="/profile">
                        <Layout>
                            <Profile/>
                        </Layout>
                    </Route>


                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routes
