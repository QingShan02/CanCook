'use client'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation';

const TextEditor = dynamic(() => import('../../../../components/TextEditor'), {
    ssr: false
})
import { useState } from 'react';
import ListPosts from '../../../../components/ListPosts';

const Posts = () => {
    const handleChange = (e: any) => setValue(e);
    const [value, setValue] = useState("");
    const search = useSearchParams();
    const status = search.get("editPost");
    return (
        <>
            {
                status ? <div className='container'>
                    <div className='row'>
                        <div className="col-12">
                            Editor
                            <TextEditor value={value} handleChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div> : <ListPosts />
            }
        </>
    );
}
export default Posts;