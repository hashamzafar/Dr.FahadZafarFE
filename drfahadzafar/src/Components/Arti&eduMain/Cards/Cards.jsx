import "./Cards.scss"
import { Card, Button } from "react-bootstrap"




const Cards = () => {
    return (
        <>

            <div className="artboard">
                <div className="cardart">

                    <div className="cardart__side card__side--back">
                        <div className="cardart__cover">
                            <h4 className="cardart__heading">
                                <span className="cardart__heading-span">Skill Set</span>
                            </h4>
                        </div>
                        <div className="cardart__details">
                            {/* <ul>
                                <li>Advanced JS and CSS</li>
                                <li>JS/CSS Preprocessors</li>
                                <li>JS Frameworks</li>
                                <li>Advanced Animations</li>
                                <li>Deployment Pipelines</li>
                                <li>Large Apps Architectures</li>
                                <li>Naming Conventions</li>
                            </ul> */}
                        </div>
                    </div>

                    <div className="cardart__side card__side--front">
                        <div className="cardart__theme">
                            <div className="cardart__theme-box">
                                <p className="cardart__subject">Dentist</p>
                                <p className="cardart__title">perio!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>






        </>
    )
}
export default Cards