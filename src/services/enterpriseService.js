import axios from "../axios";

const getAllBenefitsDigitalConversion = () => {
    return axios.get('/api/enterprise');
}

const getPackagesDigitalConversionByIntendedFor = intendedFor => {
    return axios.get(`/api/enterprise/${intendedFor}`);
}

export {
    getAllBenefitsDigitalConversion,
    getPackagesDigitalConversionByIntendedFor
}