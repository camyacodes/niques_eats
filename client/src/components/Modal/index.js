import React from "react";
import {Button} from 'reactstrap';
import "../../styles/modal.css";

function Modal ({closemodal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
            <Button className="openModalBtn" onClick={()=> { closemodal(false)} }>X</Button> </div>
                <div className="title">Title</div>
                <div className="body">Body</div>
                <div className="footer">Footer</div> 


                
                </div>        
        </div>
    )
}

export default Modal;