import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";
import bottomImg from "../assets/bottomimg.jpeg";
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
    console.log("countryDetails", countryDetails);

    return (
        <>
            <div className="flex w-full justify-center items-start">
                <div className="flex w-[80%] flex-col justify-center items-center">
                    <div className="flex w-full py-[25px] justify-between">
                        <div className="w-[80%]">
                            <p className="text-[#3D3D3D] text-[24px] font-bold">Countries</p>
                        </div>
                        <div className="hidden md:flex w-[20%] justify-between">
                            <div className="flex flex-col">
                                <p className="font-bold text-[16px]">All</p>
                                <div className="w-[42px] mt-[7px] h-[2px] bg-[#3E3E3E] rounded"></div>
                            </div>
                            <p className="text-[#8B8B8B] text-[16px]">Asia</p>
                            <p className="text-[#8B8B8B] text-[16px]">Europe</p>
                        </div>
                        <div className="flex justify-center items-center md:hidden">
                            <HiMenu className="h-8 w-8 cursor-pointer" onClick={onMenuClick} />
                        </div>
                        {menuClick && <div className="flex md:hidden z-1 justify-center items-center gap-2 absolute w-[100px] max-h-[100px] right-[2%] top-[10%] shadow-lg flex-col">
                            <p className="text-[#3E3E3E] text-[16px]">All</p>
                            <p className="text-[#3E3E3E] text-[16px]">Asia</p>
                            <p className="text-[#3E3E3E] text-[16px]">Europe</p>
                        </div>}
                    </div>
                    <div className="flex w-full justify-center items-center md:flex-row flex-col md:h-[40px] h-auto">
                        <div className="md:w-[385px] w-full md:mt-[7px] mt-[2px] h-[2px] bg-[#3E3E3E] rounded"></div>
                        <p className="text-[#3D3D3D] ml-[10px] text-[36px] font-bold">WELCOME</p>
                        <div className="md:w-[385px] w-full md:mt-[40px] mt-[3px] md:ml-[10px] ml-[0px]  h-[2px] bg-[#3E3E3E] rounded"></div>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse w-full justify-between">
                        <div className="relative md:w-[77%] w-[100%] flex justify-center mt-4">
                            {sliderSlides.map((v) => (
                                v.id === slideIndex && (
                                    <div key={v.id} className="relative w-full border-2 border-[#3D3D3D] max-h-[350px]">

                                        <img src={v.img} className="w-full h-full object-contain rounded" />


                                        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-black font-semibold text-lg bg-white/70 px-4 py-1 rounded">
                                            {v.title}
                                        </div>


                                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">

                                            <FaArrowLeft
                                                onClick={previousFunction}
                                                className="text-black text-xl cursor-pointer hover:scale-110 transition"
                                            />


                                            <div className="flex space-x-2">
                                                {[1, 2, 3, 4].map((num) => (
                                                    <div
                                                        key={num}
                                                        onClick={() => handleDots(num)}
                                                        className={`w-3 h-3 rounded-full cursor-pointer 
                                                         ${slideIndex === num ? 'bg-black' : 'bg-gray-300'}`}
                                                    />
                                                ))}
                                            </div>


                                            <FaArrowRight
                                                onClick={nextFunction}
                                                className="text-black text-xl cursor-pointer hover:scale-110 transition"
                                            />
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="md:w-[18%] w-[100%] md:ml-[20px] ml-0 mt-4">
                            {sliderSlides.map((v) => (
                                v.id === slideIndex && (
                                    <div key={v.id} className="relative w-full border-2 border-[#3D3D3D] h-[220px] max-h-[220px] md:h-[350px] md:max-h-[350px]">

                                        <img src={v.img} className="w-full h-full object-contain rounded" />


                                        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-black font-semibold text-lg bg-white/70 px-4 py-1 rounded">
                                            {v.title}
                                        </div>



                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {!isLoading ? <>
                        <div className="grid mt-[20px] w-full gap-[10px] md:grid-cols-2 grid-cols-1">
                            {visibleCountries.map((v) => {
                                return (
                                    <div className="w-full h-[130px] border-[2px] border-[#3E3E3E] shadow-2xl">
                                        <div className="flex items-center">
                                            <img src={v.flag} className="h-28 w-28 p-[10px]" />
                                            <div className="flex flex-col">
                                                <p>{v.name}</p>
                                                <p>{v.region}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div></> :
                        <div className="flex w-full mt-[20px] justify-center items-center">Loading ....</div>}

                    <button onClick={() => dispatch(loadMore())} className="mt-4 p-2 w-[146px] h-[12%] bg-[#3D3D3D] text-white">
                        Load More
                    </button>

                    <div className="flex flex-col my-[20px] justify-center items-center">
                        <img src={bottomImg} />
                        <p className="text-[#3D3D3D] mt-[25px] font-bold text-[13px]">Example@email.com </p>
                        <p className="text-[#3D3D3D] mt-[8px] font-bold text-[13px]">Copyright © 2020 Name. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;