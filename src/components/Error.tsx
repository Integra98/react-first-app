import React, { useState } from 'react';

interface ErrorProps{
    errorMessage: string;
}

export function Error({errorMessage}: ErrorProps){
    return(
        <p className='text-center text-red-600'>{errorMessage}</p>
    )
}