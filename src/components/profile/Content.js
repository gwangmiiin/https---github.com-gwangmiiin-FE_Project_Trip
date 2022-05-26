import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/korea-g5e7d0a7bc_1920.jpg';

export default function Content() {
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
                            <H3 color="gray">경복궁</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                서울특별시 종로구 사직로 161
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                            <Icon name="keyboard_arrow_right" size="xl" />
                                3호선 경복궁역 4번출구 / 5호선 광화문역 2번출구
                            </div>
                            
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                    경복궁은 조선 시대에 지어진 왕궁 중 가장 큰 궁궐이었다. 조선 왕조 개국 3년인 1395년에 완공된 궁궐은 390여 칸으로 한양의 중심축에 자리했다. 개국공신 정도전은 태조로부터 첫 번째 궁궐의 이름을 지으라는 명을 받았고, 고심 끝에 '새 왕조가 큰 복을 누려 번영할 것'이라는 의미로 경복궁(景福宮)이라는 이름을 붙였다. 경복궁은 5대궁인 경희궁, 덕수궁, 창경궁, 창덕궁 중 가장 큰 궁궐로 조선 왕조의 주요 궁궐 역할을 했다.
                                      
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    국보 제223호인 근정전(勤政殿)은 경복궁의 법전으로 각종 즉위식을 거행했던 왕실의 행사장이었다. 근정전의 옆에 위치한 경회루는 1만원권 구화폐 실릴 만큼 대표적인 건축물로 사랑받아 왔다. 한국은 미래 세대를 위해 궁궐의 재건, 복원, 유지를 위해 많은 시간과 노력을 투자해 왔다. 이외에도 일제강점기에 훼손을 겪었다가 2010년에 완전히 복원된 광화문, 고종과 명성황후가 머물던 건천궁, 경복궁의 후원인 향원정 등이 자리하고 있다. 경복궁을 방문할 때 국립 고궁 박물관과 국립 민속 박물관 또한 함께 방문하기 좋다.
                                    </LeadText>
                                    <LeadText color="blueGray">
                                    경복궁은 조선 왕조 최고의 궁궐인 만큼 생각보다 넓다. 동선은 자유롭게 조정할 수 있다. 다만 좀 더 자세한 관람을 원한다면 우리궁궐지킴이 해설사들의 설명과 함께하는 것이 가장 좋다.   
                                    </LeadText>
                                    <a
                                    
                                    href="http://www.royalpalace.go.kr"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    <Button
                                        color="lightBlue"
                                        buttonType="link"
                                        ripple="dark"
                                    >
                                        웹 사이트로 보기
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
