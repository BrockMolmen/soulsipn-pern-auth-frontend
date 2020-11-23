import React, { useState, useEffect } from 'react'

import BenefitModel from "../models/benefit";
// import BenefitCard from "../components/BenefitCard";
// import UserBenefitModel from '../models/userBenefit';

const OneBenefit = (props) => {
  const [oneBenefit, setOneBenefit] = useState()
  // const [benefitTeas, setBenefitTeas] = useState()
  // const [currentBenefit, setCurrentBenefit] = useState(props.match.params.id)
  console.log(props)

  const fetchOneBenefit = () => {
    BenefitModel.show().then(data => {
      
    }

      // console.log(oneBenefit)
    )
  }


  return (

    <>
    <OneBenefit oneBenefit={oneBenefit} />
    <h1>Jello</h1>
    </>
  )
}

export default OneBenefit
