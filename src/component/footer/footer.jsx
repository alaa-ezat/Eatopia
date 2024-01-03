import React from "react";
import './footer.css'


const Footer = () =>{
    return(
        <footer>
                    <div className="container">
                        <div className="row">
                            <div className="HOURS">
                            <h2>HOURS :</h2>
                                <p>
                                DINING & TAKEOUT/DELIVERY<br/>
                                MONDAY  - THURSDAY 4:00 - 9:00<br/>
                                FRIDAY - SATURDAY 11:30 - 10:00<br/>
                                SUNDAY 11:30 - 9:00<br/>
                                </p>

                            </div>
                            <div className="VISIT">
                            <h2>VISIT US :</h2>
                                <p>
                                1381 Boylston Street
                                New York, MA  02215
                                </p>

                            </div>
                            
                        </div>
                            
                    </div>
                    <p className="copyrights">© 2023| All Rights Reserved</p>
        </footer>

    )
}
export default Footer