import React, { Component } from 'react';
import { Form, Input, Tooltip, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
// import AddQualification from '../addQualification';

const { Option } = Select;


export class StudentsRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            date_of_birth: '',
            mobile_no: '',
            gender: '',
            email: '',
            citizenship: '',
            father: {
                name: '',
                occupation: '',
                contact_no: '',
            },
            mother: {
                name: '',
                occupation: '',
                contact_no: '',
            },
            guardian: {
                name: '',
                occupation: '',
                contact_no: '',
            },
            permanent_address: {
                address_line_1: '',
                address_line_2: '',
                state: '',
                city: '',
                area: '',
                pincode: ''
            },
            temperory_address: {
                address_line_1: '',
                address_line_2: '',
                state: '',
                city: '',
                area: '',
                pincode: ''
            },
            education_qualification: [{
                qualification: '',
                medium_of_study: '',
                board_of_studies: '',
                percentage: '',
                grade: '',
            }]
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    // onFinish = values => {
    //     console.log('Received values of form:', values);
    // };
    changeFatherDetails = () => {
        this.setState({
            father: {
                name: document.getElementById("fName").value,
                occupation: document.getElementById("foccupation").value,
                contact_no: document.getElementById("fcontact_no").value,
            }

        })
    }
    changeMotherDetails = () => {
        this.setState({
            mother: {
                name: document.getElementById("mName").value,
                occupation: document.getElementById("moccupation").value,
                contact_no: document.getElementById("mcontact_no").value,
            }
        })
    }
    changeGuardianDetails = () => {
        this.setState({
            guardian: {
                name: document.getElementById("gName").value,
                occupation: document.getElementById("goccupation").value,
                contact_no: document.getElementById("gcontact_no").value,
            }
        })
    }

    changePermanentAddress = () => {
        this.setState({
            permanent_address: {
                address_line_1: document.getElementById("Paddress_line_1").value,
                address_line_2: document.getElementById("Paddress_line_2").value,
                state: document.getElementById("Pstate").value,
                city: document.getElementById("Pcity").value,
                area: document.getElementById("Parea").value,
                pincode: document.getElementById("Ppincode").value,
            }
        })
    }
    changeTemporaryAddress = () => {
        this.setState({
            temperory_address: {
                address_line_1: document.getElementById("Taddress_line_1").value,
                address_line_2: document.getElementById("Taddress_line_2").value,
                state: document.getElementById("Tstate").value,
                city: document.getElementById("Tcity").value,
                area: document.getElementById("Tarea").value,
                pincode: document.getElementById("Tpincode").value,
            }
        })
    }

    educationChange = (field, index) => {
        this.setState({
            education_qualification: [{
                qualification: document.getElementById("eduQuali").value,
                medium_of_study: document.getElementById("eduMedium").value,
                board_of_studies: document.getElementById("eduBoard").value,
                percentage: document.getElementById("eduPercentage").value,
                grade: document.getElementById("eduGrade").value,
            }]
        })
    }

    render() {
        return (
            <div>
                <Row className="reg-form">
                    <Col span={24}>
                        <h1>Student Registration</h1>
                        <Form layout="vertical" >
                            <Form.Item
                                label="first name"
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
                                    value={this.state.first_name}
                                    onChange={e => this.setState({ first_name: e.target.value })}
                                />
                            </Form.Item>

                            <Form.Item
                                label="last name"

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
                                    value={this.state.last_name}
                                    onChange={e => this.setState({ last_name: e.target.value })} />
                            </Form.Item>


                            <Form.Item
                                label="date of birth"

                                rules={[
                                    {
                                        type: 'number',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your date of birth',
                                    },
                                ]}
                            >
                                <Input name="date_of_birth"
                                    label="date of birth"
                                    value={this.state.date_of_birth}
                                    onChange={e => this.setState({ date_of_birth: e.target.value })} />
                            </Form.Item>


                            <Form.Item
                                label="mobile number"
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
                                    value={this.state.mobile_no}
                                    onChange={e => this.setState({ mobile_no: e.target.value })}

                                />
                            </Form.Item>

                            <Form.Item
                                label="gender"
                                rules={[
                                    {
                                        type: 'text',
                                        required: true,
                                    },

                                ]}
                            >
                                <Input
                                    name="gender"
                                    label="gender"
                                    value={this.state.gender}
                                    onChange={e => this.setState({ gender: e.target.value })}
                                />
                            </Form.Item>

                            <Form.Item
                                label="E-mail"

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
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value })} />

                            </Form.Item>

                            <Form.Item
                                label="citizenship"


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
                                    value={this.state.citizenship}
                                    onChange={e => this.setState({ citizenship: e.target.value })} />

                            </Form.Item>

                            <Form.Item
                                label="father"
                                name="father"
                                onChange={this.changeFatherDetails}
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
                                <Input id="fName" label="name" name="name" placeholder="name" />
                                <Input id="foccupation" label="occupation" name="occupation" placeholder="occupation" />
                                <Input id="fcontact_no" label="contact_no" name="contact_no" placeholder="contact_no" />
                            </Form.Item>
                            <Form.Item
                                label="mother"
                                name="mother"
                                onChange={this.changeMotherDetails}
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
                                <Input id="mName" label="name" name="name" placeholder="name" />
                                <Input id="moccupation" label="occupation" name="occupation" placeholder="occupation" />
                                <Input id="mcontact_no" label="contact_no" name="contact_no" placeholder="contact_no" />
                            </Form.Item>

                            <Form.Item
                                label="guardian"
                                name="guardian"
                                onChange={this.changeGuardianDetails}

                                rules={[
                                    {
                                        type: 'text',
                                    },
                                    {
                                        message: "Please input your guardian name"
                                    },
                                ]}
                            >
                                <Input id="gName" label="name" name="name" placeholder="name" />
                                <Input id="goccupation" label="occupation" name="occupation" placeholder="occupation" />
                                <Input id="gcontact_no" label="contact_no" name="contact_no" placeholder="contact_no" />
                            </Form.Item>




                            <Form.Item
                                label="permanent_address"
                                type="text"
                                name="permanent_address"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input id="Paddress_line_1" onChange={this.changePermanentAddress} name="address_line_1" placeholder="address_line_1" />
                                <Input id="Paddress_line_2" onChange={this.changePermanentAddress} name="address_line_2" placeholder="address_line_2" />
                                <Input id="Pstate" onChange={this.changePermanentAddress} name="State" placeholder="State" />
                                <Input id="Pcity" onChange={this.changePermanentAddress} name="City" placeholder="City" />
                                <Input id="Parea" onChange={this.changePermanentAddress} name="area" placeholder="area" />
                                <Input id="Ppincode" onChange={this.changePermanentAddress} name="pincode" placeholder="pincode" />


                            </Form.Item>

                            <Form.Item
                                label="temperory_address"
                                name="temperory_address"
                                type="text"
                                // value={temperory_address}
                                // onChange={setTemperory_address}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input id="Taddress_line_1" onChange={this.changeTemporaryAddress} name="address_line_1" placeholder="address_line_1" />
                                <Input id="Taddress_line_2" onChange={this.changeTemporaryAddress} name="address_line_2" placeholder="address_line_2" />
                                <Input id="Tstate" onChange={this.changeTemporaryAddress} name="State" placeholder="State" />
                                <Input id="Tcity" onChange={this.changeTemporaryAddress} name="City" placeholder="City" />
                                <Input id="Tarea" onChange={this.changeTemporaryAddress} name="area" placeholder="area" />
                                <Input id="Tpincode" onChange={this.changeTemporaryAddress} name="pincode" placeholder="pincode" />
                            </Form.Item>
                            {/* <AddQualification /> */}
                            {/* <Form onFinish={this.onFinish}> */}

                            <Form.List
                                name="education_qualification"
                            >
                                {(fields, { add, remove }, { errors }) => (
                                    <>
                                    
                                        {fields.map((field, index) => (
                                            <Form.Item
                                                onChange={this.educationChange}
                                                label={index === 0 ? 'education_qualification' : ''}
                                                required={false}
                                                key={field.key}
                                            >
                                                <Form.Item
                                                    {...field}

                                                    // noStyle
                                                >
                                                    <Input id="eduQuali" placeholder="qualification " style={{ width: '60%' }} />
                                                    <Input id="eduMedium" placeholder="medium_of_study " style={{ width: '60%' }} />
                                                    <Input id="eduBoard" placeholder="board_of_studies" style={{ width: '60%' }} />
                                                    <Input id="eduPercentage" placeholder="percentage" style={{ width: '60%' }} />
                                                    <Input id="eduGrade" placeholder="grade" style={{ width: '60%' }} />
                                                </Form.Item>
                                                {fields.length > 1 ? (
                                                    <MinusCircleOutlined
                                                        className="dynamic-delete-button"
                                                        onClick={() => remove(field.name)}
                                                    />
                                                ) : null}
                                                 <pre>{JSON.stringify(Input, null)}</pre>
                                            </Form.Item>
                                        ))}

                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                style={{ width: '60%' }}
                                                icon={<PlusOutlined />}
                                            >
                                                Add Education
                                                </Button>
                                            <Form.ErrorList errors={errors} />
                                        </Form.Item>
                                        <Form.Item
                                            name="agreement"
                                            valuePropName="checked"

                                        >
                                            <Checkbox>
                                                I have read the <a href="">agreement</a>
                                            </Checkbox>
                                        </Form.Item>
                                        <Form.Item >
                                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                                Register
                                                </Button>
                                        </Form.Item>
                                        
                                    </>
                                )}
                            </Form.List>


                            {/* </Form> */}


                        </Form>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default StudentsRegistration
