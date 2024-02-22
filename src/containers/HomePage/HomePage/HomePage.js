import HeaderHome from "../components/header/HeaderHome";
import Banner from "../components/Section/Banner";
import About from "../components/Section/About";
import FooterHome from "../components/FooterHome";
import InfoContact from "../components/Section/InfoContact";
import { CarouselOutstandingDoctor, CarouselOutstandingMedical, CarouselSpecialty } from '../components/Section/Carousel'
import Navigation from "../components/Navigation/Navigation";
import { doctorsAndMedicalFacilities } from "../components/Section/Carousel/carousel-data";
import './HomePage.scss';
import { useEffect } from "react";
import GoToTopButton from "../components/Section/GoToTopButton/GoToTopButton";

function HomePage() {

    return (
        <div className="home__page__wrapper">
            <HeaderHome />
            <Banner />
            <CarouselOutstandingDoctor />
            <CarouselSpecialty />
            <CarouselOutstandingMedical data={doctorsAndMedicalFacilities} />
            {/* <Carousel data={outstandingMedical} /> */}
            {/* <Carousel data={outstandingDoctor} />
            <Carousel data={handbook} /> */}
            <About />
            {/* <Carousel data={doctorsAndMedicalFacilities} /> */}
            <InfoContact />
            <FooterHome />

            <GoToTopButton />
        </div>
    );
}

export default HomePage;