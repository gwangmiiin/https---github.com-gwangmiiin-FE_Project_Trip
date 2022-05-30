import React from 'react'
//css-in-js
import styled from 'styled-components'
//import Button from 'react-bootstrap/Button'
import { ResultData } from '../assets/data/resultdata'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { DropdownItem } from '@material-tailwind/react'
// import KakaoShareButton from '../components/KakaoShareButton'

const Result = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get('mbti')
  const [resultData, setResultData] = React.useState({})

  React.useEffect(() => {
    const result = ResultData.find((s) => s.best === mbti)
    setResultData(result)
  }, [mbti])
  console.log(resultData)
  return (
    <Wrapper>
      <Header>여행지 추천</Header>
      <Contents>
        <Title>{resultData.name}</Title>
        <Title>결과 : {resultData.best}</Title>
        <LogoImage>
          <img src={resultData.image} className="rounded-circle" width={350} height={350} alt="여행지 로고" />
        </LogoImage>
        <Desc>당신과 잘어울리는 여행지는 {resultData.name}입니다. <br/> {resultData.desc}</Desc>
        <ButtonGroup>
          <DropdownItem style={{ fontFamily: "SimKyungha" }} onClick={() => navigate('/home')}>테스트 다시하기</DropdownItem>
          {/* <KakaoShareButton data = {resultData} /> */}
        </ButtonGroup>
        <ButtonGroup>
          <DropdownItem style={{ fontFamily: "SimKyungha" }} onClick={() => navigate('/')}>홈페이지로 돌아가기</DropdownItem>
        </ButtonGroup>
      </Contents>
    </Wrapper >
  )
}

export default Result

const Wrapper = styled.div`
  height: 100vh;
  font-family: "SimKyungha";
`
const Header = styled.div`
  font-size: 40pt;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Contents = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`
const LogoImage = styled.div`
  margin-top: 10px;
`
const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`
const ButtonGroup = styled.div`
  display:flex;
`