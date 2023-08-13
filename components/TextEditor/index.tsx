"use client"
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { useSession } from 'next-auth/react';
import { Article } from '@/common/model/Article';
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

const TextEditor = ({ Submit }) => {
    const { data: session } = useSession();
    const [data, setData] = useState<Data>({
        category: [],
        directory: []
    });
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<Article>();
    useEffect(() => {
        const now = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        try {
            axios.get("/api/homepage").then(s => {
                setData(s.data);
            });
            if (session) {
                axios.get("/api/staff?email=" + session?.user?.email).then((s) => {
                    setValue("staffId", s.data.id || 'NV01')
                })
            }
            register("content", { required: { value: true, message: "Bạn không được bỏ trống" } });
            register("image", { required: { value: true, message: "Bạn không được bỏ trống" } });
            register("createDate", { value: now })
        } catch (error) {

        }
    }, [session]);

    const onEditorStateChange = (editorState) => {
        const name = editorState.target?.files[0].name;
        // var c = document.createElement('canvas');
        // c.height = name.naturalHeight;
        // c.width = name.naturalWidth;
        // var ctx = c.getContext('2d');
        
        // ctx.drawImage(name, 0, 0, c.width, c.height);
        // var base64String = c.toDataURL();
        if (name) {
            setValue("image", name)
        }
        setValue("content", editorState);
    };



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
                ],
                ["link","image"]
            ]
        };
    }, []);
    return (
        <form className="w-75 mx-auto" onSubmit={handleSubmit(Submit)}>

            <div className="form-outline">
                <h3>Tiêu đề bài viết</h3>
                <Input className='form-control' type='text' name='title' register={register("title", {
                    required: {
                        value: true,
                        message: "Bạn không được bỏ trống",
                    }
                })} />
                <div className='text-danger mt-1'>{errors.title?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Hình ảnh</h3>
                <Input className='form-control' type='file' name='thum' onChange={onEditorStateChange} />
                <div className='text-danger mt-1'>{errors.image?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Nội dung</h3>
                <ReactQuill style={{height:"300px"}}  theme='snow' modules={modules} onChange={onEditorStateChange} />
                <div className='text-danger mt-1'>{errors.content?.message}</div>
            </div>
            <div className="form-outline mt-5">
                <h3>Loại</h3>
                {data.category.map((value, index) => (
                    <>
                        <div key={index} className="form-check form-check-inline">
                            <Input register={register("categoryid", {
                                required: {
                                    value: true,
                                    message: "Bạn không được bỏ trống",
                                }
                            })}
                                className='form-check-input' type='radio' name='categoryId' value={value.id} key={index} />
                            <label className="form-check-label" >{value.name}</label>
                        </div>
                    </>
                ))}
                <div className='text-danger mt-1'>{errors.categoryid?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Chuyên mục</h3>
                {data.directory.map((value, index) => (
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
            <button className="btn btn-success">Đăng bài</button>
        </form>
    );
}
export default TextEditor;