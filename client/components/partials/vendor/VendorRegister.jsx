import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { VendorRegisteration, login } from '../../../store/auth/action.js';

import { Form, Input } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { useState } from 'react';

const VendorRegister = () => {
    const dispatch = useDispatch();

    const [formValue, setFormValues] = useState({
        mobile_num:'',
        email:'',
        gstin_num:''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(VendorRegisteration(formValue))
        // this.props.form.validateFields((err, values) => {
        //     if (!err) {
        //         this.props.dispatch(login());
        //         Router.push('/account/login');
        //     } else {
        //         console.log(err);
        //     }
        // });
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => {
            return{
                ...prevValues,
                [name]:value
            }
        })
    };

    return (
        <div className="ps-my-account">
            <div className="container">
                <Form className="ps-form--account">
                    <ul className="ps-tab-list">
                        {/* <li>
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li> */}
                        <li className="active">
                            <Link href="/vendor/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                            <h5>Register An Account</h5>
                            <div className="form-group">
                                <Form.Item
                                    name="mobile_number"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your mobile number!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="number"
                                        placeholder="Mobile Number"
                                        onChange={handleOnChange}
                                        name='mobile_num'
                                        value={formValue.mobile_num}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email address"
                                        onChange={handleOnChange}
                                        value={formValue.email}
                                        name='email'
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <Form.Item
                                    name="gstin_num"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your gstin number!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="number"
                                        placeholder="GSTIN Number"
                                        onChange={handleOnChange}
                                        name='gstin_num'
                                        value={formValue.gstin_num}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group submit">
                                <button
                                    type="button"
                                    className="ps-btn ps-btn--fullwidth"
                                    onClick={handleSubmit}>
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer">
                            {/* <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul> */}
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps)(VendorRegister);
