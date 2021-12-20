import React, { useState } from 'react';
import { fileData } from '../data.js';
import Table from './Table';
//import localForage from 'localforage';

const Main = () => {
    const [files, setFiles] = useState(fileData);

    const deleteFile = (file) => {
        console.log('delete', file)
    };

    return (
        <div>
            <Table files={files} deleteFile={deleteFile} />
        </div>
    )
};

export default Main;