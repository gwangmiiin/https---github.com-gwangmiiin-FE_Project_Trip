import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/korea-g5e7d0a7bc_1920.jpg';
import {Link} from 'react-router-dom'

export default function ContentFood6() {
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
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray"> 시화담 </H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울 용산구 이태원로 254 (한남동)   
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                6호선 이태원역 2번 출구
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <Link to ="http://www.royalpalace.go.kr">웹 사이트로 보기</Link>
                             </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                <LeadText color="blueGray">
                                아주 고급스러운 분위기의 한식당. 한식의 세계화를 위해 10년을 준비하여 오픈한 곳이다. 음식 하나하나에 정성을 쏟아부어 맛과 건강은 물론이고 하나의 예술작품을 보는 듯한 음식의 아름다움까지 추구한다. 2층의 룸에서는 국악공연을 즐기며 식사를 할 수 있다. 가격은 일반인이 가기에는 부담스러운 편. 반드시 이틀 전에는 예약을 하고 가야 한다.
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
