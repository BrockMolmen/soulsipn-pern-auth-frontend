import React from 'react'
import {useHistory} from 'react-router-dom'

import UserBenefitModel from '../models/userBenefit'
// import BenefitModel from '../models/benefit'
import OneBenefit from '../pages/OneBenefit'


const UserBenefitCard = (props) => {
    console.log(props.userBenefit)
    let history = useHistory()
    
    const delUserBen = () => {
        UserBenefitModel.delete(props.userBenefit.id).then(window.location.reload())
    }

    const redirctToBenTea = () => {
        history.push(`/allbenefits/${props.userBenefit.id}`)
    }

    

    
    return (
        <div className="UserBenefitCard">
        <p>{ props.userBenefit.name }</p>
        <button onClick={redirctToBenTea}>See All Teas</button> <br />
        <button onClick={delUserBen}>Remove Benefit</button>
        <OneBenefit userBenefit={props.userBenefit} />
    </div>
    )
}

export default UserBenefitCard