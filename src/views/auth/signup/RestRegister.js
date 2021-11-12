import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button, Alert } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import useScriptRef from '../../../hooks/useScriptRef';
import { API_SERVER } from './../../../config/constant';

const RestRegister = ({ className, ...rest }) => {
    let history = useHistory();
    const scriptedRef = useScriptRef();

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    name: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Ingrese un email Valido').max(255).required('Ingrese un Email'),
                     name: Yup.string().required('Ingrese su nombre'),
                    password: Yup.string().max(255).required('Ingrese una contraseña'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        axios
                            .post(API_SERVER + 'users/register', {
                                username: values.username,
                                password: values.password,
                                email: values.email
                            })
                            .then(function(response) {
                                if (response.data.success) {
                                    history.push('/auth/signin');
                                } else {
                                    setStatus({ success: false });
                                    setErrors({ submit: response.data.msg });
                                    setSubmitting(false);
                                }
                            })
                            .catch(function(error) {
                                setStatus({ success: false });
                                setErrors({ submit: error.response.data.msg });
                                setSubmitting(false);
                            });
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>

                        <div className='form-group mb-3'>
                            <input
                                className='form-control'
                                error={touched.email && errors.email}
                                label='Email Address'
                                placeholder='Email Address'
                                name='email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type='email'
                                value={values.email}
                            />
                            {touched.email && errors.email &&
                            <small className='text-danger form-text'>{errors.email}</small>}
                        </div>
                        <div className='form-group mb-4'>
                            <input
                                className='form-control'
                                error={touched.password && errors.password}
                                label='Password'
                                placeholder='Password'
                                name='password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type='password'
                                value={values.password}
                            />
                            {touched.password && errors.password &&
                            <small className='text-danger form-text'>{errors.password}</small>}
                        </div>

                        <div className='form-group mb-3'>
                            <input
                                className='form-control'
                                error={touched.name && errors.name}
                                label='Nombres'
                                placeholder='Ingrese sus nombres'
                                name='name'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type='text'
                                value={values.name}
                            />
                            {touched.name && errors.name &&
                            <small className='text-danger form-text'>{errors.name}</small>}
                        </div>
                        {errors.submit && (
                            <Col sm={12}>
                                <Alert variant='danger'>{errors.submit}</Alert>
                            </Col>
                        )}

                        <div className='form-group mb-4'>
                            <select className='custom-select' name='role' onChange={handleChange} value={values.tipo_usuario}>
                                <option value=''>Seleccionar Tipo</option>
                                <option value='1'>Cliente</option>
                                <option value='2'>Paseador</option>
                            </select>

                        </div>

                        <div className='custom-control custom-checkbox  text-left mb-4 mt-2'>
                            <input type='checkbox' className='custom-control-input' id='customCheck1' />
                            <label className='custom-control-label' htmlFor='customCheck1'>
                                Guardar Datos
                            </label>
                        </div>

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className='btn-block'
                                    color='primary'
                                    disabled={isSubmitting}
                                    size='large'
                                    type='submit'
                                    variant='primary'
                                >
                                    Registrar
                                </Button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
            <hr />
        </React.Fragment>
    );
};

export default RestRegister;
