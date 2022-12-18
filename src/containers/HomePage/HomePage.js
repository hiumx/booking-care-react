import HeaderHome from "./components/header/HeaderHome";
import Banner from "./components/Section/Banner";
import About from "./components/Section/About";
import FooterHome from "./components/FooterHome";
import InfoContact from "./components/Section/InfoContact";
import { CarouselOutstandingDoctor } from '../../containers/HomePage/components/Section/Carousel'

// import { dataSpecialty, outstandingMedical, outstandingDoctor, handbook, doctorsAndMedicalFacilities } from '../../containers/HomePage/components/Section/Carousel/carousel-data'
function HomePage() {
    return (
        <>
            <HeaderHome />
            <Banner />
            <CarouselOutstandingDoctor />
            {/* <Carousel data={dataSpecialty} />
            <Carousel data={outstandingMedical} />
            <Carousel data={outstandingDoctor} />
            <Carousel data={handbook} /> */}
            <About />
            {/* <Carousel data={doctorsAndMedicalFacilities} /> */}
            <InfoContact />
            <FooterHome />
        </>
    );
}

export default HomePage;