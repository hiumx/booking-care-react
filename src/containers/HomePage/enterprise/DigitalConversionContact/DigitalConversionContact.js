import FooterHome from "../../components/FooterHome";
import FormContact from "../../components/FormContact/FormContact";
import InfoContact from "../../components/Section/InfoContact";
import HeaderHome from "../../components/header/HeaderHome";

import './DigitalConversionContact.scss'

function DigitalConversionContact() {
    return (
        <>
            <HeaderHome />
            <FormContact title='Gói chuyển đổi số doanh nghiệp' />
            <InfoContact />
            <FooterHome />
        </>
    )
}

export default DigitalConversionContact;