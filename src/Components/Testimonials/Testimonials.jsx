import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Sara Sosa</h3>
                                    <span>Santo Domingo oeste.</span>
                                </div>
                            </div>
                            <p>I am incredibly grateful for my time at Education RD. The professors are not only experts in their fields but also passionate about nurturing their students' growth. The curriculum is comprehensive and up-to-date, preparing us for the real-world challenges.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Dostin Santana</h3>
                                    <span>San Jose de Ocoa</span>
                                </div>
                            </div>
                            <p>Studying at Education RD was truly a life-changing experience. The quality of education and the support from the faculty exceeded my expectations. Thanks to their guidance, I gained invaluable knowledge and skills that have opened doors to endless opportunities in my career. I highly recommend Education RD to anyone seeking a transformative educational journey</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sarah Placencia</h3>
                                    <span>MIAMI USA</span>
                                </div>
                            </div>
                            <p>Enrolling at Education RD was one of the best decisions I've ever made. The dedication of the staff and the resources available exceeded my expectations. The hands-on learning opportunities and internships provided valuable real-world experience, giving me a competitive edge in the job market</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Rode Francisco</h3>
                                    <span>New York USA</span>
                                </div>
                            </div>
                            <p>My experience at Education RD was nothing short of fantastic. The diverse community and global perspective enriched my learning journey and broadened my horizons. The campus facilities are top-notch, creating an ideal environment for both academic and extracurricular activities.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
