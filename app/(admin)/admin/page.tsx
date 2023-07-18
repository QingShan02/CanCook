/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react';
import React from 'react';
import TextEditor from '../../../components/TextEditor';

const admin = () => {
    const handleChange = (e: any) => setValue(e);
    const [value, setValue] = useState("");

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-12">
                        Editor
                        <TextEditor value={value} handleChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default admin;
