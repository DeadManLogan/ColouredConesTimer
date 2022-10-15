import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';
import '../style/ConeNumberForm.css';

const ConeNumberForm = (props) => {
    const nextCone = props.numberToGo;

    return(
        <div className='card-container'>
            <Card className='card' sx={{ backgroundColor: '#69f0ae' }}>
                <p className='cone-number'>{nextCone}</p>
            </Card>
        </div>
    );
};

ConeNumberForm.propTypes = {
    numberToGo: PropTypes.number
};

export default ConeNumberForm;