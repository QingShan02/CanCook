'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm, UseFormRegisterReturn } from 'react-hook-form';
import Input from '../Input';

interface Data {
    category: Array<{
        id: string;
        name: string;
    }>,
    directory: Array<{
        id: string;
        name: string;
    }>;

}
type FormValues = {
    title: string,
    content: string,
    categoryid: string;
    directory: Array<{
        id: string;
    }>;
}
const TextEditor = () => {
    const [data, setData] = useState<Data>({
        category: [],
        directory: []
    });
    const [values, setValues] = useState<FormValues>({
        title: null,
        content: null,
        categoryid: null,
        directory: []
    });
    useEffect(() => {
        axios.get("http://localhost:3000/api/homepage").then(s => {
            setData(s.data);
        });
    }, []);


    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{
                    font: [],
                }],
                [{
                    size: [],
                }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" }
                ]
            ]
        };
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            title: null,
            content: null,
            categoryid: null,
            directory: []
        }
    });
    const Submit: SubmitHandler<FormValues> = async (data) => {
        const { title, content, categoryid, directory } = data;
        console.log('Form Data:', data);

    };
    return (
        <form className="w-75 mx-auto" onSubmit={handleSubmit(Submit)}>

            <div className="form-outline">
                <h3>Title</h3>
                <Input className='form-control' type='text' name='title' register={register("title", {
                    required: {
                        value: true,
                        message: "Bạn không được bỏ trống",
                    }
                })} />
                <div className='text-danger mt-1'>{errors.title?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Content</h3>
                <ReactQuill modules={modules} register={register("content", {
                    required: {
                        value: true,
                        message: "Bạn không được bỏ trống",
                    }
                })} />
                <div className='text-danger mt-1'>{errors.content?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Category</h3>
                {data.category.map((value, index) => (
                    <>
                        <div className="form-check form-check-inline">
                            <Input register={register("categoryid", {
                                required: {
                                    value: true,
                                    message: "Bạn không được bỏ trống",
                                }
                            })}
                                className='form-check-input' type='radio' name='categoryid' value={value.id} key={index} />
                            <label className="form-check-label" >{value.name}</label>
                        </div>
                    </>
                ))}
                <div className='text-danger mt-1'>{errors.categoryid?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Directory</h3>
                {data.directory.map((value,index) => (
                    <>
                        <div className="form-check form-check-inline">
                        <Input register={register("directory", {
                                required: {
                                    value: true,
                                    message: "Bạn không được bỏ trống",
                                }
                            })}
                                className='form-check-input' type='checkbox' name='directory' value={value.id} key={index} />
                            <label className="form-check-label" >{value.name}</label>
                        </div>
                    </>
                ))}
                <div className='text-danger mt-1'>{errors.directory?.message}</div>
            </div>
            <button className="btn btn-success">Login</button>
        </form>
    );
}
export default TextEditor;