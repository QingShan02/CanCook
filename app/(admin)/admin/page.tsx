'use client'
import { use, useEffect, useState } from 'react';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const admin = () => {

    const modules = {
        toolbar: [
            [{
                Headers: [1, 2, 3, 4, 5, 6, false],
            }],
            [{
                font: [1, 2, 3, 4, 5, 6, false],
            }],
            [{
                size: [1, 2, 3, 4, 5, 6, false],
            }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" }
            ]
        ]
    }
    const [value, setValue] = useState("");

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='editor col-lg-6'>
                        Editor
                        <ReactQuill theme='snow' value={value} onChange={(e: any) => setValue(e)} modules={modules} />
                    </div>
                    <div className='preview col-lg-6'>{value}</div>
                </div>
            </div>
        </>
    );
}
export default admin;
