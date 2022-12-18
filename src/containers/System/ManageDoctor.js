import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from 'react-select';
import { LANGUAGES } from '../../utils/constant'
import * as actions from '../../store/actions'
import { useEffect, useState } from 'react';
import './ManageDoctor.scss'

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const mdParser = new MarkdownIt(/* Markdown-it options */);




function ManageDoctor({ getAllDoctors, saveDetailDoctorRedux, language, listDoctors }) {
    const [selectDoctor, setSelectDoctor] = useState('')
    const [valueDescDoctor, setValueDescDoctor] = useState('')
    const [contentMarkdown, setContentMarkdown] = useState('')
    const [contentHTML, setContentHTML] = useState('')
    const [arrDoctors, setArrDoctors] = useState([])

    useEffect(() => {
        getAllDoctors()
    }, [])

    useEffect(() => {
        const dataSelect = buildOptionsSelect(listDoctors)
        setArrDoctors(dataSelect)
    }, [listDoctors])

    useEffect(() => {
        const dataSelect = buildOptionsSelect(listDoctors)
        setArrDoctors(dataSelect)
    }, [language])


    const handleChange = (selectDoctor) => {
        setSelectDoctor(selectDoctor)
    }


    const handleEditorChange = ({ html, text }) => {
        setContentMarkdown(text)
        setContentHTML(html)
    }

    const handleChangeValueDescDoctor = (e) => {
        setValueDescDoctor(e.target.value)
    }

    const handleSaveInfoDoctor = () => {
        saveDetailDoctorRedux({
            contentMarkdown: contentMarkdown,
            contentHTML: contentHTML,
            description: valueDescDoctor,
            doctorId: selectDoctor.value
        })
    }

    const buildOptionsSelect = (arrDoctors) => {
        let result = [];
        if (arrDoctors && arrDoctors.length > 0) {
            arrDoctors.map((item, index) => {
                let object = {};
                const labelVi = `${item.lastName} ${item.firstName}`
                const labelEn = `${item.firstName} ${item.lastName}`
                object.label = language === LANGUAGES.VI ? labelVi : labelEn
                object.value = item.id;
                return result.push(object)
            })
        }
        return result
    }

    return (
        <div className='container manage-doctor-wrapper'>
            <h4 className='title manage-doctor-title'><FormattedMessage id='manage-doctor.title' /></h4>
            <div className='manage-doctor-description row'>
                <div className='manage-doctor-select-doctor col col-6'>
                    <label className='manage-doctor-select-doctor-label'><FormattedMessage id='manage-doctor.choose-doctor' /></label>
                    <Select
                        value={selectDoctor}
                        onChange={handleChange}
                        options={arrDoctors}
                    />
                </div>
                <div className='manage-doctor-description-content col col-6'>
                    <label className='manage-doctor-description-content-label'><FormattedMessage id='manage-doctor.detail-doctor' /></label>
                    <textarea
                        className='manage-doctor-description-textarea'
                        rows='4'
                        value={valueDescDoctor}
                        onChange={(e) => handleChangeValueDescDoctor(e)}
                    >
                    </textarea>
                </div>
            </div>
            <div>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
            </div>
            <button
                className='btn btn-primary save-info-doctor-btn'
                onClick={handleSaveInfoDoctor}
            >
                <FormattedMessage id='manage-doctor.save-doctor-btn' />
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listDoctors: state.doctor.allDoctors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctors: () => dispatch(actions.getAllDoctors()),
        saveDetailDoctorRedux: (data) => dispatch(actions.saveDetailDoctor(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);