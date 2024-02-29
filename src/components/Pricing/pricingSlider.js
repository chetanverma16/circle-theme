import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Default styles
import '../../styles/pricing.css';

const CustomSlider = () => (
    <Slider
        defaultValue={30}
        styles={{ track: { backgroundColor: 'red', height: 10 }, handle: { borderColor: 'blue', height: 28, width: 28, marginLeft: -14, marginTop: -9, backgroundColor: 'black' } }}
    />
);

export default CustomSlider;