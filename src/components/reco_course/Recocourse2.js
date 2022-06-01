import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/정보습득코스.png';
import Icon from '@material-tailwind/react/Icon';
import H2 from '@material-tailwind/react/Heading3';
export default function Recocourse1() {
    return (
        <>
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                                <div className="relative">
                                        <Image
                                            src={ProfilePicture}
                                            width="800"
                                            alt="Profile picture"
                                            raised
                                        />
                            </div>
                        </div>
                    
                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <H2 color="blue">
                                        N서울타워와 남산 케이블카
                                    </H2>
                                    <LeadText color="bluegray">
                                        산책, 레스토랑 및 전망대 등을 다양하게 즐길 수 있는 남산공원<br />
                                        남산 케이블카 - N서울타워 입구까지 케이블카로 왕복 이동가능
                                    </LeadText>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                이용방법 : 티켓 현장구매 가능 / 왕복 9,500원 
                            </div>

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
