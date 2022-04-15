import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';

class InfoInput extends React.Component {
    render() {
        console.log('Bocah Babi' + this.props.buto);
        return (
           <h1> {this.props.buto} </h1> 
        )
    }
}

export default InfoInput;