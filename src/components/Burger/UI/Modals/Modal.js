import React from 'react'
import './Modal.css'
import BackDrop from '../../UI/Modals/BackDrops/BackDrop'
import Aux  from '../../../../Hoc/Auxillary/Auxillary'
const model = (props) => {
    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.cancel}></BackDrop>
            <div className="Modal"
            style={{
                transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0
            }}>
            {props.children}

        </div>
        </Aux>
     
    )
}
export default model