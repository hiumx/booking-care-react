import HeaderHome from "./components/header/HeaderHome";
import Banner from "./components/Section/Banner";
import About from "./components/Section/About";
import FooterHome from "./components/FooterHome";
import InfoContact from "./components/Section/InfoContact";
import { CarouselOutstandingDoctor, CarouselSpecialty } from '../../containers/HomePage/components/Section/Carousel'
import Navigation from "./components/Navigation/Navigation";

function HomePage() {
    return (
        <>
            <HeaderHome />
            <Banner />
            <CarouselOutstandingDoctor />
             <CarouselSpecialty />
            {/*<Carousel data={outstandingMedical} />
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