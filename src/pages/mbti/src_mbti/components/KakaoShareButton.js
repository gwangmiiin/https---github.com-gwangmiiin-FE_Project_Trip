import React from 'react'
import Button from 'react-bootstrap/Button'
const { Kakao } = window

const KakaoShareButton = ({ data }) => {
  const url = "https://singular-axolotl-b5acac.netlify.app"
  const resultUrl = window.location.href
  console.log('URL', url, resultUrl)
  React.useEffect(() => {
    Kakao.cleanup()
    Kakao.init("0ddc05a1e07287c325964bcff6264d02")
    console.log(Kakao.isInitialized())
  }, [])

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '여행지 추천 결과',
        description: `당신에게 가장 잘 어울리는 여행지는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl : resultUrl
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webUrl : resultUrl
          },
        }
      ]
    });
  }
  return (
    <Button onClick={shareKakao} style={{ fontFamily: "SimKyungha", marginLeft: "20px" }}>카카오톡 공유하기</Button>
  )
}

export default KakaoShareButton