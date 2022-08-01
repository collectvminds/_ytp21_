import React from 'react';
import FileResizer from 'react-image-file-resizer';

const Resize = ({ file }) => {


    new Promise((resolve) => {
        FileResizer.imageFileResizer(
            file,
            300,
            300,
            "PNG",
            30,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
        );
    });



    return (
        <div>

        </div>
    );
};

export default Resize;