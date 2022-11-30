import React from 'react';
import { Waveform } from '@uiball/loaders'


function Loader ({size,speed,color}){
return <Waveform 
        size={size}
        lineWeight={3.5}
        speed={speed} 
        color={color} 
        />
    }

export default Loader;