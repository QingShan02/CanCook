import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, handleChange }: any) => {
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
    return (
        <>
        <div className="form-outline">
      <input type="text" className="form-control"  value={value} onChange={handleChange}/>
    </div>
        <ReactQuill theme='snow' value={value} onChange={handleChange} modules={modules} />
        </>
    );
}
export default TextEditor;