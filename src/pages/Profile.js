import React, { useState, useEffect } from 'react'
import UserBenefitCard from '../components/UserBenefitCard';
import UserBenefitModel from "../models/userBenefit";
import { Container, Row, Col } from "react-bootstrap"
import {Link} from 'react-router-dom'
// const userId = localStorage.getItem('id')

const Profile = (props) => {
  const [userBenefits, setUserBenefits] = useState([])
  const [userInfo, setUserInfo] = useState(null)
  const [userId, setUserId] = useState(null)


  const fetchUserBenData = () => {
    UserBenefitModel.all().then(data => {
      setUserBenefits(data.userBenefits[0].benefits)
      setUserInfo(data.userBenefits[0].firstName)
      setUserId(data.userBenefits[0].id)
    })
  }

  useEffect(() => {
    fetchUserBenData()
  }, [])

  const generatedUserBenList = () => {
    return userBenefits.map((userBenefit, index) => (
      <Col xs={4} key={userBenefit.id} >
        <UserBenefitCard userBenefit={userBenefit} key={userBenefit.id} />
      </Col>
    ))
  }
  
  return (
    <div>
      <Link className="teasLink editUserLink" to={`/user/${userId}`}>Edit Your Info</Link>
      <h1>Hello {userInfo}</h1>
      <h1>Here are your saved benefits!</h1>
      { userBenefits.length ?
        <Container fluid>
          <Row>
            {
              generatedUserBenList()
            }
          </Row>
        </Container>
        : "No benefits saved"}
    </div>
  )
}

export default Profile
