import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="background-main bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">여행지 추천 사이트</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                                서울의 여행지를 추천해주는 사이트 입니다!
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
