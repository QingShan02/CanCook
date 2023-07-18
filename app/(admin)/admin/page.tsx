'use client'
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('../../../components/TextEditor'), {
  ssr: false
})
import { useState } from 'react';

const Admin = () => {
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
export default Admin;
