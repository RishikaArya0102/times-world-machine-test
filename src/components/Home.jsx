import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import bottomImg from "../assets/bottomimg.jpeg";
import '../App.css';
import { getCountryDetails, loadMore } from "../redux/countriesSlice";

const Home = () => {
    const dispatch = useDispatch();
    const { countryDetails, displayedCount, isLoading } = useSelector((state) => state.countrySrore);
    const [menuClick, setMenuClick] = useState(false);
    const sliderSlides = [
        { id: 1, img: slide1, title: 'Slide One' },
        { id: 2, img: slide2, title: 'Slide Two' },
        { id: 3, img: slide3, title: 'Slide Three' },
        { id: 4, img: slide4, title: 'Slide Four' }
    ];
    const [slideIndex, setSlideIndex] = useState(1);

    const previousFunction = () => {
        slideIndex > 1 && setSlideIndex((prev) => prev - 1)
    }

    const nextFunction = () => {
        slideIndex < 4 && setSlideIndex((prev) => prev + 1)
    }

    const handleDots = (v) => {
        setSlideIndex(v);
    }

    const onMenuClick = () => {
        setMenuClick(!menuClick);
    }

    useEffect(() => {
        dispatch(getCountryDetails());
    }, [dispatch]);

    const visibleCountries = countryDetails.slice(0, displayedCount);

    return (
        <>
            <div className="d-flex w-100 justify-content-center align-items-start">
                <div className="d-flex flex-column w-75 justify-content-center align-items-center">
                    <div className="d-flex w-100 py-3 justify-content-between">
                        <div className="w-75">
                            <p className="text-dark fs-4 fw-bold">Countries</p>
                        </div>
                        <div className="d-none d-md-flex w-25 justify-content-between">
                            <div className="d-flex flex-column">
                                <p className="fw-bold fs-6">All</p>
                                <div className="bg-dark mt-1" style={{ width: '42px', height: '2px', borderRadius: '2px' }}></div>
                            </div>
                            <p className="text-muted fs-6">Asia</p>
                            <p className="text-muted fs-6">Europe</p>
                        </div>
                        <div className="d-flex d-md-none justify-content-center align-items-center">
                            <HiMenu className="fs-2 cursor-pointer" onClick={onMenuClick} />
                        </div>
                        {menuClick && <div className="d-flex flex-column position-absolute bg-white shadow p-2" style={{ zIndex: 9999, right: '2%', top: '10%' }}>
                            <p className="text-dark fs-6 mb-1">All</p>
                            <p className="text-dark fs-6 mb-1">Asia</p>
                            <p className="text-dark fs-6">Europe</p>
                        </div>}
                    </div>
                    <div className="d-flex flex-column flex-md-row w-100 justify-content-center align-items-center">
                        <div className="bg-dark w-100 mt-md-custom" style={{ maxWidth: '385px', height: '2px' }}></div>
                        <p className="text-dark mx-2 fs-1 fw-bold">WELCOME</p>
                        <div className="bg-dark mt-md-5 mt-1 w-100" style={{ maxWidth: '385px', height: '2px' }}></div>
                    </div>
                    <div className="d-flex flex-column-reverse flex-md-row w-100 justify-content-between align-items-stretch">
                       
                        <div className="d-flex align-items-stretch left-section-custom-cls">
                            {sliderSlides.map((v) => (
                                v.id === slideIndex && (
                                    <div
                                        key={v.id}
                                        className="position-relative border border-dark rounded overflow-hidden w-100"
                                        style={{ height: '350px' }}
                                    >
                                        <img src={v.img} className="w-100 h-100 object-fit-contain" />
                                        <div className="position-absolute bottom-50 start-50 translate-middle text-center text-dark fw-semibold fs-5 bg-white bg-opacity-75 px-3 py-1 rounded">
                                            {v.title}
                                        </div>
                                        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex align-items-center gap-3 py-2">
                                            <FaArrowLeft onClick={previousFunction} className="text-dark fs-5 cursor-pointer" />
                                            <div className="d-flex gap-2">
                                                {[1, 2, 3, 4].map((num) => (
                                                    <div key={num} onClick={() => handleDots(num)} className="rounded-circle"
                                                        style={{
                                                            width: '12px',
                                                            height: '12px',
                                                            backgroundColor: slideIndex === num ? '#000' : '#ccc',
                                                            cursor: 'pointer',
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <FaArrowRight onClick={nextFunction} className="text-dark fs-5 cursor-pointer" />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                       
                        <div
                            className="d-flex align-items-stretch right-section-custom-cls"
                        >
                            {sliderSlides.map((v) => (
                                v.id === slideIndex && (
                                    <div
                                        key={v.id}
                                        className="position-relative border border-dark rounded overflow-hidden w-100 custom-hegh"
                                        
                                    >
                                        <img src={v.img} className="w-100 h-100 object-fit-contain" />
                                        <div className="position-absolute bottom-50 start-50 translate-middle text-center text-dark fw-semibold fs-5 bg-white bg-opacity-75 px-3 py-1 rounded">
                                            {v.title}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>



                    {!isLoading ? <>
                        <div className="row g-3 mt-3 w-100">
                            {visibleCountries.map((v, i) => {
                                return (
                                    <div className="col-12 col-md-6" key={i}>
                                        <div className="border border-dark shadow d-flex align-items-center p-2">
                                            <img src={v.flag} className="me-3" style={{ height: '100px', width: '100px', padding: '10px' }} />
                                            <div className="d-flex flex-column">
                                                <p>{v.name}</p>
                                                <p>{v.region}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div></> :
                        <div className="d-flex w-100 mt-4 justify-content-center align-items-center">Loading ....</div>}

                    <button onClick={() => dispatch(loadMore())} className="mt-4 px-4 py-2 bg-dark text-white border-0">
                        Load More
                    </button>

                    <div className="d-flex flex-column my-4 justify-content-center align-items-center">
                        <img src={bottomImg} className="img-fluid" />
                        <p className="text-dark mt-3 fw-bold small">Example@email.com</p>
                        <p className="text-dark mt-2 fw-bold small">Copyright © 2020 Name. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;
