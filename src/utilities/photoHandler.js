import React from 'react';
import {PhotoProvider, PhotoView} from 'react-photo-view';

const photoHandler = (photo) => {
    return (
        <>
            <PhotoProvider>
                <PhotoView src={photo}>
                    <img src={photo} alt=".." className='border border-blue-700 hover:shadow-lg' />
                </PhotoView>
            </PhotoProvider>
        </>
    );
};

export default photoHandler;