import React, { useState } from 'react';

const Register = (): JSX.Element => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [radioGroupValue, setRadioGroupValue] = useState<string>('');
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
        security_question: '',
        answer: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (
            formData.first_name.trim() === '' ||
            formData.last_name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.password.trim() === '' ||
            formData.confirm_password.trim() === '' ||
            formData.security_question.trim() === '' ||
            formData.answer.trim() === '' ||
            formData.gender.trim() === ''
        ) {
            alert('All fields are required');
            return;
        }

        if (formData.password !== formData.confirm_password) {
            alert('Password and Confirm Password must match');
            return;
        }

        // Additional validation checks can be added based on your requirements

        // If all validation passes, you can proceed with form submission
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='flex bg-gradient-to-r from-blue-700 to-blue-400'>
            <div className='w-2/6 space-y-6 p-36'>
                <div><i class="fa fa-rocket fa-5x" aria-hidden="true"></i></div>
                <p className='text-slate text-center '>Welcome</p>
                <p className='tex-slate text-center'>You are 30 seconds away from earning your own money!</p>
                <div className='place-content-center'><button className='text-black bg-slate-200 place-items-center'>Login</button></div>
            </div>
            <div className='bg-slate-100 w-4/6 rounded-3xl'>
                <div className='p-40'>
                    <form className='space-y-16 bg-slate-100' onSubmit={handleSubmit}>
                        <div className='space-x-16 flex'>
                            <input
                                className='outline outline-1 outline-slate-300 bg-white text-black'
                                placeholder='First name *'
                                name='first_name'
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            <input
                                className='outline outline-1 outline-slate-300 bg-white text-black'
                                placeholder='Your Email *'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='space-x-16'>
                            <input
                                className='outline outline-1 outline-slate-300 bg-white text-black'
                                placeholder='Last name *'
                                name='last_name'
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            <input
                                className='outline outline-1 outline-slate-300 bg-white text-black'
                                placeholder='Your Phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='space-x-16 flex'>
                            <div className='relative'>
                                <input
                                    className='outline outline-1 outline-slate-300 bg-white text-black'
                                    type={showPass ? 'text' : 'password'}
                                    placeholder='Password *'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <select
                                className='outline outline-1 outline-slate-300 bg-white text-black'
                                name='security_question'
                                value={formData.security_question}
                                onChange={handleChange}
                            >
                                <option value='iam'>Select your security</option>
                                <option value='where_are_you_from'>Where Are U From?</option>
                                <option value='where_'>Where </option>
                            </select>
                        </div>
                        <div className='space-x-16'>
                            <input
                                className='outline outline-1 outline-slate-300 bg-white'
                                type='password'
                                placeholder='Confirm password *'
                                name='confirm_password'
                                value={formData.confirm_password}
                                onChange={handleChange}
                            />
                            <input
                                className='outline outline-1 outline-slate-300 bg-white'
                                placeholder='Your answer *'
                                name='answer'
                                value={formData.answer}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <fieldset
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    setRadioGroupValue(e.target.value);
                                }}
                            >
                                <div className='flex space-x-5'>
                                    <div className='space-y-4 flex flex-col text-black'>
                                        <label htmlFor='male'>Male</label>
                                        <input
                                            checked={radioGroupValue === 'male'}
                                            className='w-fix-content'
                                            id='male'
                                            type='radio'
                                            value='male'
                                            name='gender'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='space-y-4 flex flex-col text-black'>
                                        <input
                                            checked={radioGroupValue === 'female'}
                                            id='female'
                                            type='radio'
                                            value='female'
                                            name='gender'
                                            onChange={handleChange}
                                        />
                                        <label htmlFor='female'>Female</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <button className='text-slate-200 bg-blue-500' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
