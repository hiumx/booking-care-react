import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import FooterHome from "../../components/FooterHome";
import FormContact from "../../components/FormContact/FormContact";
import InfoContact from "../../components/Section/InfoContact";
import HeaderHome from "../../components/header/HeaderHome";
import queryString from 'query-string';

import './DigitalConversionContact.scss'
import { useState } from "react";

function DigitalConversionContact() {

    const { search } = useLocation();
    const { p, s } = queryString.parse(search);
    let title = 'Gói chuyển đổi số doanh nghiệp';

    if (p === 'B1') {
        switch (+s) {
            case 0:
                title = 'Gói miễn phí dành cho cơ sở y tế';
                break;
            case 1:
                title = 'Gói cơ bản dành cho cơ sở y tế';
                break;
            case 2:
                title = 'Gói nâng cao dành cho cơ sở y tế';
                break;
            case 3:
                title = 'Gói toàn diện dành cho cơ sở y tế';
                break;
            default:
                title = 'Hợp tác cùng BookingCare';
        }
    }
    if (p === 'B2') {
        switch (+s) {
            case 0:
                title = 'Gói miễn phí dành cho doanh nghiệp';
                break;
            case 1:
                title = 'Gói cơ bản dành cho doanh nghiệp';
                break;
            case 2:
                title = 'Gói nâng cao dành cho doanh nghiệp';
                break;
            case 3:
                title = 'Gói toàn diện dành cho doanh nghiệp';
                break;
            default:
                title = 'Hợp tác cùng BookingCare';
        }
    }

        return (
            <>
                <HeaderHome />
                <FormContact title={title} />
                <InfoContact />
                <FooterHome />
            </>
        )
    }

    export default DigitalConversionContact;