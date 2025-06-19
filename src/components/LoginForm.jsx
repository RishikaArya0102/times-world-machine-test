import girlImg from "../assets/girlImg.jpeg";
import { useNavigate } from "react-router-dom";
import socialmediaicon from "../assets/socialmediaicon.jpeg";
import '../App.css';

const LoginForm = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/home');
    }
    
    return (
        <>
            <div className="flex">
                <div className="flex w-full h-[100vh] justify-center items-center ">
                    <div className="flex max-h-[80vh] h-[80vh] md:w-[70%] xs:w-[100%] md:justify-between xs:justify-center ">
                        <div className="flex flex-col md:w-[75%] xs:w-[100%] p-[20px] justify-center md:items-start items-center">
                            <h3 className="text-[#3D3D3D] text-[32px] font-bold">Sign In</h3>
                            <p className="text-[#3D3D3D] text-[16px] font-semibold mt-[8px]">New user? <span className="text-[#587FFF] ml-1"> Create an account</span></p>
                            <input placeholder="Username or email" className="mt-[25px] placeholder-[#3E3E3E] text-[16px] border-2 px-[10px] min-h-[12%] w-[280px] 2xl:w-[475px] border-solid border-[#3D3D3D]" />
                            <input placeholder="Password" className="mt-[10px] border-2 placeholder-[#3E3E3E] text-[16px] px-[10px] min-h-[12%] w-[280px] 2xl:w-[475px] border-solid border-[#3D3D3D]" />
                            <div className="mt-[18px] w-[185px] flex justify-between items-center">
                                <input type="checkbox" className="border-2 px-[10px] h-[32px] w-[32px] border-solid text-[#F2F2F2] border-[#3D3D3D]" />
                                <p className="text-[#3D3D3D] font-semibold">Keep me signed in</p>
                            </div>
                            <button className="bg-[#3C3C3C] mt-[18px] w-[280px] 2xl:w-[475px] min-h-[12%] text-white" onClick={handleSignIn}>Sign In</button>
                            <div className="flex w-[280px] 2xl:w-[475px] px-[5px] justify-between items-center mt-[18px]">
                                <div className="border-[#CFCFCF] w-[72px] border-[2px] h-px"></div>
                                <p className="text-[#3D3D3D] font-semibold text-[13px]">Or Sign In With</p>
                                <div className="border-[#CFCFCF] w-[72px] border-[2px]"></div>
                            </div>
                            <div className="flex w-[280px] 2xl:w-[475px] px-[20px] justify-center mt-[18px]">
                                <img src={socialmediaicon} />
                            </div>
                        </div>
                        <div className="hidden md:block  w-[25%]">
                            <img src={girlImg} className="max-h-[70vh] max-w-[70vw] w-auto" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginForm;