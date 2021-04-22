import React, { useState } from 'react';
import { Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './student-registration.css'
import { DatePicker, Space } from 'antd';


const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const StudentRegistration = () => {

    const [register, setRegister] = useState({});
    const handleRegister = (e) => {
        setRegister({
            first_name: document.querySelector(`[name="first_name"]`).value,
            last_name: document.querySelector(`[name="last_name"]`).value,
            date_of_birth: document.querySelector(`[name="date_of_birth"]`).value,
            mobile_no: document.querySelector(`[name="mobile_no"]`).value,
            gender: document.querySelector(`[name="gender"]`).value,
            email: document.querySelector(`[name="email"]`).value,
            citizenship: document.querySelector(`[name="citizenship"]`).value,
            father_name: document.querySelector(`[name="father_name"]`).value,
            father_occupation: document.querySelector(`[name="father_occupation"]`).value,
            father_contact_no: document.querySelector(`[name="father_contact_no"]`).value,
            mother_name: document.querySelector(`[name="mother_name"]`).value,
            mother_occupation: document.querySelector(`[name="mother_occupation"]`).value,
            mother_contact_no: document.querySelector(`[name="mother_contact_no"]`).value,
            guardian_name: document.querySelector(`[name="father_name"]`).value,
            guardian_occupation: document.querySelector(`[name="guardian_occupation"]`).value,
            guardian_contact_no: document.querySelector(`[name="guardian_contact_no"]`).value,
        })
    }


    const [permanent_address, setPermanent_address] = useState({});
    const handlePermanentAddress = ()=>{
        setPermanent_address({
            address_line_1: document.querySelector(`[name="address_line_1"]`).value,
            address_line_2: document.querySelector(`[name="address_line_2"]`).value,
            State: document.querySelector(`[name="State"]`).value,
            City: document.querySelector(`[name="City"]`).value,
            area: document.querySelector(`[name="area"]`).value,
            pincode: document.querySelector(`[name="pincode"]`).value,
        })
    }


    const [temperory_address, setTemperory_address] = useState({});
    const handleTemperoryAddress = ()=>{
        setTemperory_address({
            address_line_1: document.querySelector(`[name="address_line_1"]`).value,
            address_line_2: document.querySelector(`[name="address_line_2"]`).value,
            State: document.querySelector(`[name="State"]`).value,
            City: document.querySelector(`[name="City"]`).value,
            area: document.querySelector(`[name="area"]`).value,
            pincode: document.querySelector(`[name="pincode"]`).value,
        })
    }



    const [education_qualification,setEducation_qualification] = useState([]);
    const handleEducation = () =>{
        setEducation_qualification({
            qualification: document.querySelector(`[name="qualification"]`).value,
            medium_of_study: document.querySelector(`[name="medium_of_study"]`).value,
            board_of_studies: document.querySelector(`[name="percentage"]`).value,
            percentage: document.querySelector(`[name="percentage"]`).value,
            grade: document.querySelector(`[name="grade"]`).value,


        })
    }

    const handleSubmit = () => {
        console.log(register);
        console.log(permanent_address);
        console.log(temperory_address);
        console.log(education_qualification);
    }

    // const prefixSelector = (
    //     <Form.Item name="prefix" noStyle>
    //         <Select
    //             style={{
    //                 width: 70,
    //             }}
    //         >
    //             <Option value="91">+91</Option>
    //             {/* <Option value="87">+87</Option> */}
    //         </Select>
    //     </Form.Item>
    // );
    function onChange(date, dateString) {
        console.log( dateString);
    }

    return (
        <Row className="reg-form">
            <Col span={24}>
                <h1>Student Registration</h1>
                <Form layout="vertical" >
                    <Form.Item
                        label="first name"
                        value={register.first_name}
                        onChange={handleRegister}
                        rules={[
                            {
                                type: 'text',

                            },
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input name="first_name"
                            label="first name"
                            value={register.first_name}
                            onChange={handleRegister} />
                    </Form.Item>

                    <Form.Item
                        label="last name"
                        value={register.last_name}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',
                            },
                            {
                                required: true,
                                message: 'Please input your last  name!',
                            },
                        ]}
                    >
                        <Input name="last_name"
                            label="last name"
                            value={register.last_name}
                            onChange={handleRegister} />
                    </Form.Item>


                    <Form.Item
                        label="date of birth"
                        value={register.date_of_birth}

                        rules={[

                            {
                                required: true,
                                message: 'Please input your date of birth!',
                            },
                        ]}
                    > <Space direction="vertical">
                            <DatePicker onChange={onChange} name="date_of_birth"
                                label="date of birth"
                                value={register.date_of_birth} />
                        </Space>
                    </Form.Item>


                    <Form.Item
                        label="mobile number"
                        value={register.mobile_no}
                        onChange={handleRegister}
                        rules={[
                            {
                                type: 'number',
                                required: true,


                            },
                            {
                                message: 'Please input your mobile no!',
                            },
                        ]}
                    >
                        <Input
                            name="mobile_no"
                            label="mobile number"
                            value={register.mobile_no}
                            onChange={handleRegister}
                        // addonBefore={prefixSelector}
                        // style={{
                        //     width: '100%',
                        // }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        value={register.gender}
                        onChange={handleRegister}
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Select name="gender"
                            value={register.gender}
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            <Option  value="male">male</Option>
                            <Option  value="female">female</Option>
                            <Option  value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                        value={register.email}
                        onChange={handleRegister}
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input name="email"
                            label="E-mail"
                            value={register.email}
                            onChange={handleRegister} />

                    </Form.Item>

                    <Form.Item
                        label="citizenship"
                        value={register.citizenship}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',
                            },
                            {
                                required: true,
                                message: 'Please input your citizenship!',
                            },
                        ]}
                    >
                        <Input name="citizenship"
                            label="citizenship"
                            value={register.citizenship}
                            onChange={handleRegister} />

                    </Form.Item>

                    <Form.Item
                        label="father's name"
                        value={register.father_name}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',

                            },
                            {
                                required: true,
                                message: "Please input your father's name!",
                            },
                        ]}
                    >

                        <Input name="father_name"
                            label="father's name"
                            value={register.father_name}
                            onChange={handleRegister} />
                    </Form.Item>

                    <Form.Item
                        label="occupation"
                        value={register.father_occupation}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',

                            },
                            {
                                required: true,
                                message: "Please input your father's occupation!",
                            },
                        ]}
                    >

                        <Input name="father_occupation"
                            label="occupation"
                            value={register.father_occupation}
                            onChange={handleRegister}
                        />
                    </Form.Item>


                    <Form.Item
                        label="contact no"
                        value={register.father_contact_no}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'number',
                            },
                            {
                                required: true,
                                message: "Please input your Father's contact no"
                            },
                        ]}
                    >
                        <Input name="father_contact_no"
                            label="contact no"
                            value={register.father_contact_no}
                            onChange={handleRegister} />
                    </Form.Item>

                    <Form.Item
                        label="mother's name"
                        value={register.mother_name}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',

                            },
                            {
                                required: true,
                                message: "Please input your mother's name!",
                            },
                        ]}
                    >

                        <Input name="mother_name"
                            label="mother's name"
                            value={register.mother_name}
                            onChange={handleRegister}
                        />
                    </Form.Item>


                    <Form.Item
                        label="occupation"
                        value={register.mother_occupation}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',

                            },
                            {
                                required: true,
                                message: "Please input your mother's occupation!",
                            },
                        ]}
                    >
                        <Input name="mother_occupation"
                            label="occupation"
                            value={register.mother_occupation}
                            onChange={handleRegister} />
                    </Form.Item>


                    <Form.Item
                        label="contact no"
                        value={register.mother_contact_no}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'number',
                            },
                            {
                                required: true,
                                message: "Please input your Mother's contact no"
                            },
                        ]}
                    >
                        <Input name="mother_contact_no"
                            label="contact no"
                            value={register.mother_contact_no}
                            onChange={handleRegister}
                        />
                    </Form.Item>

                    <Form.Item
                        label="guardian name"
                        value={register.guardian_name}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',
                            },
                            {
                                message: "Please input your guardian name"
                            },
                        ]}
                    >
                        <Input name="guardian_name"
                            label="guardian name"
                            value={register.guardian_name}
                            onChange={handleRegister} />
                    </Form.Item>

                    <Form.Item
                        label="occupation"
                        value={register.guardian_occupation}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'text',

                            },
                            {
                                message: "Please input your guardian's occupation!",
                            },
                        ]}
                    >
                        <Input name="guardian_occupation"
                            label="occupation"
                            value={register.guardian_occupation}
                            onChange={handleRegister} />
                    </Form.Item>


                    <Form.Item
                        label="contact no"
                        value={register.guardian_contact_no}
                        onChange={handleRegister}

                        rules={[
                            {
                                type: 'number',
                            },
                            {
                                message: "Please input your guardian's contact no"
                            },
                        ]}
                    >
                        <Input name="guardian_contact_no"
                            label="contact no"
                            value={register.guardian_contact_no}
                            onChange={handleRegister} />
                    </Form.Item>



                    <Form.Item
                        label="permanent_address"
                        type="text"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input value={permanent_address.address_line_1} onChange={handlePermanentAddress} name="address_line_1" placeholder="address_line_1" />
                        <Input value={permanent_address.address_line_2} onChange={handlePermanentAddress} name="address_line_2" placeholder="address_line_2" />
                        <Input value={permanent_address.State} onChange={handlePermanentAddress} name="State" placeholder="State" />
                        <Input value={permanent_address.City} onChange={handlePermanentAddress} name="City" placeholder="City" />
                        <Input value={permanent_address.area} onChange={handlePermanentAddress} name="area" placeholder="area" />
                        <Input value={permanent_address.pincode} onChange={handlePermanentAddress} name="pincode" placeholder="pincode" />


                    </Form.Item>

                    <Form.Item
                        label="temperory_address"
                        type="text"
                        // value={temperory_address}
                        // onChange={setTemperory_address}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input value={temperory_address.address_line_1} onChange={handleTemperoryAddress} name="address_line_1" placeholder="address_line_1" />
                        <Input value={temperory_address.address_line_2} onChange={handleTemperoryAddress} name="address_line_2" placeholder="address_line_2" />
                        <Input value={temperory_address.State} onChange={handleTemperoryAddress} name="State" placeholder="State" />
                        <Input value={temperory_address.City} onChange={handleTemperoryAddress} name="City" placeholder="City" />
                        <Input value={temperory_address.area} onChange={handleTemperoryAddress} name="area" placeholder="area" />
                        <Input value={temperory_address.pincode} onChange={handleTemperoryAddress} name="pincode" placeholder="pincode" />
                    </Form.Item>

                    <Form.Item
                        label="education_qualification"
                        type="text"
                        // value={temperory_address}
                        // onChange={setTemperory_address}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input value={education_qualification.qualification} onChange={handleEducation} name="qualification" placeholder="qualification" />
                        <Input value={education_qualification.medium_of_study} onChange={handleEducation} name="medium_of_study" placeholder="medium_of_study" />
                        <Input value={education_qualification.board_of_studies} onChange={handleEducation} name="board_of_studies" placeholder="board_of_studies" />
                        <Input value={education_qualification.percentage} onChange={handleEducation} name="percentage" placeholder="percentage" />
                        <Input value={education_qualification.grade} onChange={handleEducation} name="grade" placeholder="grade" />
                    </Form.Item>

                    {/* Last Name {index}:
              <input
                type="text"
                name={`${fieldName}.lastName`}
                ref={register}
              /> */}
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"

                        // rules={[
                        //     {
                        //         validator: (_, value) =>
                        //             value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        //     },
                        // ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Register
        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>

    );
};

export default StudentRegistration;