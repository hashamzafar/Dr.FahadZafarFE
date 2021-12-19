import "./style.css"
import { Button } from "react-bootstrap"



const PatientCard = ({ history }) => {
    return (
        <>
            <div id="wrapper">

                {/* <div className="dust"><img src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg=" /></div>

                <div className="foreground"><img src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg=" /></div>

                <div className="midground"><img src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg=" /></div> */}

                <div className="background">
                    <img src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg=" />
                    <div>

                        <div className="heading">
                            HOW</div>
                        <h3 className="title">    to pick your</h3>
                        <div className="heading">PERIODONTIST</div>
                        <h6 className="title">?</h6>
                        <a href="/learn" className="learn heading">LEARN MORE</a>


                    </div>






                </div>
            </div>



        </>
    )
}

export default PatientCard