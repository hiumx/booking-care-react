import HeaderHome from "./components/HeaderHome";
import Banner from "./components/Section/Banner";
import Carousel from "./components/Section/Carousel";
import About from "./components/Section/About";
import FooterHome from "./components/FooterHome";
import InfoContact from "./components/Section/InfoContact";
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
            <About />
            <Carousel data={doctorsAndMedicalFacilities} />
            <InfoContact />
            <FooterHome />
        </>
    );
}

export default HomePage;