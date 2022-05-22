import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/changgyeonggung-palace-551221_1920.jpg';
import {Link} from 'react-router-dom';

export default function Content2() {
    return (
        <>
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-80 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                <Button color="lightBlue" ripple="light">
                                    Conntect
                                </Button>
                            </div> */}
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">삼천동 골목길</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울특별시 종로구 가회동 일대  
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <Icon name="work" size="xl" />
                                3호선 안국역 1번, 2번, 3번 출구 도보 10분
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="account_balance" size="xl" />
                                <Link to ="http://www.royalpalace.go.kr"> 웹 사이트로 보기</Link>
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    서울에서 가장 스타일리시한 골목, 삼청동. 언제부터인가 가난한 예술가들이 삼청동으로 찾아들었다. 거리에 예술적 향취가 묻어나기 시작했고, 지금의 삼청동 거리가 만들어졌다. 골목길 구석구석에 보물같이 예쁜 가게들이 숨어 있지만 중심 거리 양쪽으로 늘어선 색색의 쇼윈도 먼저 구경해보자. 재기발랄한 인테리어 숍이 눈을 끄는가 하면 바로 옆 가게에는 고풍스러운 전통숍이 자리 잡고 있는데 서로 훌륭한 조화를 이룬다. 거리를 거니는 사람들도 무척 다채롭다. 카페를 배경 삼아 사진을 찍는 젊은이들, 한옥 갤러리에서 작품을 감상하는 이들, 이색 박물관에서 다양한 전시품을 감상하는 가족 단위 관람객들이 모두 같은 길에서 호흡한다. 메마른 감성을 충전시키고 발길 닿는 집에 들어가 맛난 음식을 즐길 수도 있는 곳, 삼청동은 바로 그런 동네다.
                                    </LeadText>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Button
                                            color="lightBlue"
                                            buttonType="link"
                                            ripple="dark"
                                        >
                                            Show more
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
