import MarkdownIt from 'markdown-it';
import { useEffect, useState } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { createSpecialty } from '../../../../services/specialty.service';
import { CommonUtils } from '../../../../utils';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDoctors } from '../../../../store/actions';

const mdParser = new MarkdownIt(/* Markdown-it options */);

function CreateUpdateSpecialty() {

    const [nameSpecialty, setNameSpecialty] = useState('');
    const [descriptionHtml, setDescriptionHtml] = useState('');
    const [descriptionMarkdown, setDescriptionMarkdown] = useState('');
    const [image, setImage] = useState('');
    const [action, setAction] = useState('CREATE');
    const [listDoctor, setListDoctor] = useState([]);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname.split('/')[3] === 'create') {
            setAction('CREATE');
        } else if (location.pathname.split('/')[3] === 'update') {
            setAction('UPDATE');
        }
    }, [location.pathname.split('/')[3]]);

    const handleEditorChange = ({ html, text }) => {
        setDescriptionHtml(html);
        setDescriptionMarkdown(text);
    }

    const handleChangeImage = async e => {
        const file = e.target.files[0];
        if (file) {
            const base64Img = await CommonUtils.getBase64(file);
            console.log(base64Img);
            setImage(base64Img);
        }
    }

    const handleClickSubmit = async () => {
        if (action === 'CREATE') {
            const res = await createSpecialty({
                name: nameSpecialty,
                descriptionHtml,
                descriptionMarkdown,
                image
            });
            if (res?.code === 0) {
                toast.success(res.message);
                setNameSpecialty('');
                setDescriptionHtml('');
                setDescriptionMarkdown('');
                setImage('');
            } else if (res?.code !== 0) {
                toast.error(res.message)
            } else {
                toast.error('Create new specialty failed!')
            }
        }
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="specialty-name" className="form-label">Name specialty</label>
                    <input
                        type="text"
                        className="form-control"
                        id="specialty-name"
                        placeholder="Enter name specialty..."
                        onChange={e => setNameSpecialty(e.target.value)}
                        value={nameSpecialty}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                    <label htmlFor="specialty-image" className="form-label">Image specialty</label>
                    <input
                        type="file"
                        className="form-control"
                        id="specialty-image"
                        onChange={e => handleChangeImage(e)}
                    />
                </div>
            </div>
            <div>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={handleEditorChange}
                    value={descriptionMarkdown}
                />
            </div>
            <div className='submit__btn'>
                <button
                    type="button"
                    className="btn btn-custom btn-primary"
                    onClick={handleClickSubmit}
                >
                    {action === 'CREATE' ? 'Create' : 'Update'}
                </button>
            </div>
        </div>

    )
}

export default CreateUpdateSpecialty;