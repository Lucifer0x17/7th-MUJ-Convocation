import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { FadeTransform } from 'react-animation-components'

class Home extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='container'>
                <FadeTransform in
                    transformProps={{
                        exitTransform: 'scale(0.5)'
                    }}>
                    <div className='row row-content align-items-center'>
                        <div className='col-12 col-md-5'>
                            <Card body inverse className='card-home'>
                                <CardTitle><h2 className='welcome-msg'>Welcome to 7th Annual Convocation</h2></CardTitle>
                                <p style={{ fontSize: '20px', paddingBottom: '5px', borderBottom: '1px solid white' }}>Manipal University Jaipur</p>
                                <CardText style={{ padding: '10px' }}>“You are educated. Your certification is in your degree. You may think of it as the ticket to the good life. Let me ask you to think of an alternative. Think of it as your ticket to change the world.” —Tom Brokaw</CardText>
                            </Card>
                        </div>
                        <div className='col-12 col-md-7 justify-content-center'>
                            <img src="assets/images/banner.jpg" alt="banner-img" className='banner-img' />
                        </div>
                    </div>
                </FadeTransform>
            </div>
        )
    }
}

export default Home;