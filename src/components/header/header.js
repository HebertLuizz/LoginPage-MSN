import styled from "styled-components";
import logo from '../../images/userLogo.png'

const IconUserConatainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
  border-radius: 20px;
  width: 180px;
  height: 180px;
  border: 3px solid lightskyblue;
  margin-top: 20px;
  text-align: center;
  position: fixed;
  top: 10%;
  left: 50%;
  max-width: 100%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    top: 0;
  }
`

const IconUserBackground  = styled.section`
  background-color: lightgray;
  background-image: linear-gradient(180deg, lightgray 0%, lightgray 40%, DarkGray 100%);
  border: 1px solid black;
  width: 155px;
  height: 155px;
  position: absolute;
  top:  50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`

const IconUser = styled.img`
    filter: grayscale(100%);
    width: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    max-width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 90px;
    }
`

function UserHeader() {

    return (
        <IconUserConatainer>
            <IconUserBackground />
            <IconUser src={logo} alt="image"/>
        </IconUserConatainer>
    )
}

export default UserHeader