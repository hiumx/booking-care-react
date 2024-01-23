import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from 'react-select';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import { LANGUAGES } from '../../utils/constant';
import * as actions from '../../store/actions';
import { useEffect, useState } from 'react';
import './ManageDoctor.scss';
import { getInfoMarkDownFromDoctorId } from '../../services/markdownService';
import { getAllCode } from '../../services/userService';
import { getInfoDoctorClinic } from '../../services/doctorService';

const mdParser = new MarkdownIt(/* Markdown-it options */);


function ManageDoctor({ getAllDoctors, saveDetailDoctorRedux, language, listDoctors }) {
    const [selectDoctor, setSelectDoctor] = useState('');
    const [nameClinic, setNameClinic] = useState('');
    const [addressClinic, setAddressClinic] = useState('');
    const [noteClinic, setNoteClinic] = useState('');
    const [province, setProvince] = useState('');
    const [price, setPrice] = useState('');
    const [methodPayment, setMethodPayment] = useState('');
    const [valueDescDoctor, setValueDescDoctor] = useState('');
    const [contentMarkdown, setContentMarkdown] = useState('');
    const [contentHTML, setContentHTML] = useState('');
    const [arrDoctors, setArrDoctors] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [prices, setPrices] = useState([]);
    const [methodPayments, setMethodPayments] = useState([]);
    const [actionSubmit, setActionSubmit] = useState('CREATE');

    useEffect(() => {
        getAllDoctors();
        const fetchAllCode = async () => {
            try {
                const resProvince = await getAllCode('PROVINCE');
                const resPrice = await getAllCode('PRICE');
                const resPayment = await getAllCode('PAYMENT');
                if (resProvince && resProvince.errorCode === 0) {
                    const arrProvinces = language === 'vi'
                        ? resProvince.data.map(prov => ({
                            label: prov.valueVi,
                            value: prov.id
                        }))
                        : resProvince.data.map(prov => ({
                            label: prov.valueEn,
                            value: prov.id
                        }));

                    setProvinces(arrProvinces);
                }
                if (resPrice && resPrice.errorCode === 0) {
                    const arrPrices = language === 'vi'
                        ? resPrice.data.map(pri => ({
                            label: pri.valueVi,
                            value: pri.id
                        }))
                        : resPrice.data.map(pri => ({
                            label: pri.valueEn,
                            value: pri.id
                        }));

                    setPrices(arrPrices);
                }
                if (resPayment && resPayment.errorCode === 0) {
                    const arrPayments = language === 'vi'
                        ? resPayment.data.map(pay => ({
                            label: pay.valueVi,
                            value: pay.id
                        }))
                        : resPayment.data.map(pay => ({
                            label: pay.valueEn,
                            value: pay.id
                        }));

                    setMethodPayments(arrPayments);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchAllCode();
    }, [language])

    useEffect(() => {
        const dataSelect = buildOptionsSelect(listDoctors)
        setArrDoctors(dataSelect)
    }, [listDoctors])

    useEffect(() => {
        const dataSelect = buildOptionsSelect(listDoctors)
        setArrDoctors(dataSelect)
    }, [language])


    const handleChangeDoctor = async (selectDoctor) => {
        setSelectDoctor(selectDoctor);
        const resMarkdown = await getInfoMarkDownFromDoctorId(selectDoctor.value);
        const resDoctorClinic = await getInfoDoctorClinic(selectDoctor.value);

        if (resMarkdown && resMarkdown.data && resDoctorClinic && resDoctorClinic.data) {
            const { priceId, provinceId, paymentId, nameClinic, addressClinic, note } = resDoctorClinic.data;

            const priceData = prices.find(price => price.value === +priceId);
            const provinceData = provinces.find(province => province.value === +provinceId);
            const paymentData = methodPayments.find(payment => payment.value === +paymentId);

            setPrice(priceData);
            setProvince(provinceData);
            setMethodPayment(paymentData);
            setNameClinic(nameClinic);
            setAddressClinic(addressClinic);
            setNoteClinic(note ? note : '');

            setContentHTML(resMarkdown.data.contentHTML);
            setContentMarkdown(resMarkdown.data.contentMarkdown);
            setValueDescDoctor(resMarkdown.data.description);
            setActionSubmit('UPDATE');
        } else if (resMarkdown && !resMarkdown.data && resDoctorClinic && !resDoctorClinic.data) {
            setActionSubmit('CREATE');
        }
    }

    const handleChangeProvince = (selectProvince) => {
        setProvince(selectProvince);
    }

    const handleChangePrice = (selectPrice) => {
        setPrice(selectPrice);
    }

    const handleChangeMethodPayment = (selectMethodPayment) => {
        setMethodPayment(selectMethodPayment);
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
            contentMarkdown,
            contentHTML,
            description: valueDescDoctor,
            provinceId: province.value,
            priceId: price.value,
            paymentId: methodPayment.value,
            addressClinic,
            nameClinic,
            noteClinic,
            doctorId: selectDoctor.value,
            actionSubmit
        });
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
                        onChange={handleChangeDoctor}
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
            <div className='row'>
                <div className='col-4 mb-3'>
                    <label htmlFor="clinic-name" className="form-label">Name of clinic</label>
                    <input
                        type="text"
                        className="form-control"
                        id="clinic-name"
                        value={nameClinic}
                        onChange={e => setNameClinic(e.target.value)}
                    />
                </div>
                <div className='col-4 mb-3'>
                    <label htmlFor="clinic-address" className="form-label">Address of clinic</label>
                    <input
                        type="text"
                        className="form-control"
                        id="clinic-address" value={addressClinic}
                        onChange={e => setAddressClinic(e.target.value)}
                    />
                </div>
                <div className='col-4 mb-3'>
                    <label htmlFor="clinic-province" className="form-label">Choose province (city)</label>
                    <Select
                        value={province}
                        placeholder='Select province'
                        onChange={handleChangeProvince}
                        options={provinces}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-4 mb-3'>
                    <label htmlFor="clinic-price" className="form-label">Choose prices</label>
                    <Select
                        value={price}
                        placeholder='Select price'
                        onChange={handleChangePrice}
                        options={prices}
                    />
                </div>
                <div className='col-4 mb-3'>
                    <label htmlFor="clinic-payment-method" className="form-label">Choose payment methods</label>
                    <Select
                        value={methodPayment}
                        placeholder='Select method payment'
                        onChange={handleChangeMethodPayment}
                        options={methodPayments}
                    />
                </div>
                <div className='col-4 mb-3'>
                    <label htmlFor="clinic-note" className="form-label">Note</label>
                    <textarea
                        className='form-control'
                        id="clinic-note"
                        onChange={e => setNoteClinic(e.target.value)}
                        value={noteClinic}
                    >
                    </textarea>
                </div>
            </div>
            <div>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={handleEditorChange}
                    value={contentMarkdown}
                />
            </div>
            <button
                type='button'
                className='btn btn-primary save-info-doctor-btn'
                onClick={handleSaveInfoDoctor}
            >
                <FormattedMessage id={actionSubmit === 'CREATE' ? 'manage-doctor.create-doctor-btn' : 'manage-doctor.update-doctor-btn'} />
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
