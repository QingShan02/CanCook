'use client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import { useSession } from 'next-auth/react';
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
type ArticleValues = {
    title: string,
    content: string,
    categoryid: string;
    directory: Array<{
        id: string;
    }>,
    staffid:string;
}
const TextEditor = () => {
    const {data:session} = useSession();
    const [data, setData] = useState<Data>({
        category: [],
        directory: []
    });
    const [article,setArticle] = useState<ArticleValues>();
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<ArticleValues>({
        defaultValues: {
            title: null,
            content: null,
            categoryid: null,
            directory: [],
            staffid:null
        }
    });
    useEffect(() => {
        axios.get("http://localhost:3000/api/homepage").then(s => {
            setData(s.data);
        });
        axios.get("http://localhost:3000/api/staff?email="+session?.user?.email).then((s)=>{
            document.getElementById('staffid').setAttribute('value',s.data.id);
        })
        register("content", { required: {value:true,message:"Bạn không được bỏ trống"}});
        register("staffid");
    }, [session,register]);

    const onEditorStateChange = (editorState) => {
        setValue("content", editorState);
    };

    const Submit: SubmitHandler<ArticleValues> = async (data) => {
        const { title, content, categoryid, directory,staffid } = data;
        setArticle(data);
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
                ]
            ]
        };
    }, []);




    return (
        <form className="w-75 mx-auto" onSubmit={handleSubmit(Submit)}>
            <div className="form-outline">
                <h3>Title</h3>
                <Input type='hidden' id="staffid" name="staffid" />
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
                <ReactQuill theme='snow' modules={modules} onChange={onEditorStateChange} />
                <div className='text-danger mt-1'>{errors.content?.message}</div>
            </div>
            <div className="form-outline">
                <h3>Category</h3>
                {data.category.map((value, index) => (
                    <>
                        <div key={index} className="form-check form-check-inline">
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
            <button className="btn btn-success">Login</button>
        </form>
    );
}
export default TextEditor;