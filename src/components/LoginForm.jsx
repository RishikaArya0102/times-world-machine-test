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
        <div className="d-flex w-100" style={{ height: '100vh' }}>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="d-flex flex-column flex-md-row w-100" style={{ maxHeight: '80vh', height: '80vh', justifyContent: 'space-between', paddingLeft: '15%', paddingRight: '15%' }}>
                    <div className="d-flex flex-column p-3 w-100 w-md-75 align-items-center align-items-md-start">
                        <h3 style={{ color: '#3D3D3D', fontSize: '32px', fontWeight: 'bold' }}>Sign In</h3>
                        <p className="fw-semibold mt-2" style={{ color: '#3D3D3D', fontSize: '16px' }}>New user? <span style={{ color: '#587FFF' }} className="ms-1">Create an account</span></p>
                        <input placeholder="Username or email" className="mt-4 form-control" style={{ fontSize: '16px', border: '2px solid #3D3D3D', width: '280px', maxWidth: '475px', minHeight: '12%' }} />
                        <input placeholder="Password" className="mt-2 form-control" style={{ fontSize: '16px', border: '2px solid #3D3D3D', width: '280px', maxWidth: '475px', minHeight: '12%' }} />
                        <div className="d-flex align-items-center mt-3" style={{ width: '185px', justifyContent: 'space-between' }}>
                            <input type="checkbox" className="form-check-input" style={{ height: '32px', width: '32px', border: '2px solid #3D3D3D' }} />
                            <p style={{ color: '#3D3D3D' }} className="fw-semibold mb-0">Keep me signed in</p>
                        </div>
                        <button className="btn mt-3 text-white" style={{ backgroundColor: '#3C3C3C', width: '280px', maxWidth: '475px', minHeight: '12%' }} onClick={handleSignIn}>Sign In</button>
                        <div className="d-flex align-items-center justify-content-between mt-3" style={{ width: '280px', maxWidth: '475px', padding: '0 5px' }}>
                            <div style={{ width: '72px', height: '2px', backgroundColor: '#CFCFCF' }}></div>
                            <p style={{ color: '#3D3D3D', fontSize: '13px' }} className="fw-semibold mb-0">Or Sign In With</p>
                            <div style={{ width: '72px', height: '2px', backgroundColor: '#CFCFCF' }}></div>
                        </div>
                        <div className="d-flex justify-content-center mt-3" style={{ width: '280px', maxWidth: '475px', padding: '0 20px' }}>
                            <img src={socialmediaicon} alt="socialmedia" className="img-fluid" />
                        </div>
                    </div>
                    <div className="d-none d-md-block w-25">
                        <img src={girlImg} alt="girl" className="img-fluid" style={{ maxHeight: '70vh', maxWidth: '70vw', width: 'auto' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;