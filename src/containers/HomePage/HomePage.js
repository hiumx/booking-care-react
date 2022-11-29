import HeaderHome from "./components/HeaderHome";
import Banner from "./components/Section/Banner";
import Carousel from "./components/Section/Carousel";
import { dataSpecialty, outstandingMedical, outstandingDoctor, handbook, doctorsAndMedicalFacilities } from '../../containers/HomePage/components/Section/Carousel/carousel-data'
function HomePage() {
    return (
        <>
            <HeaderHome />
            <Banner />
            <Carousel data={dataSpecialty} />
            <Carousel data={outstandingMedical} />
            <Carousel data={outstandingDoctor} />
            <Carousel data={handbook} />
            <Carousel data={doctorsAndMedicalFacilities} />
            <div style={{ width: '100px', height: '100px' }}></div>
        </>
    );
}

export default HomePage;