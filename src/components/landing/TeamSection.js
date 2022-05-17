import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/bukchon.jpg';
import Image2 from 'assets/img/seoul-museum-of-history.jpg';
import Image3 from 'assets/img/inwang.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="이달의 추천 코스">
                    매달 서울 곳곳에서 진행하는 행사와 이벤트 등을 소개
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="한옥 문화강좌"
                        position="21일(토)부터 6월 25일(토)까지 매주 토요일(14:00~ 16:00)"
                    />
                    <TeamCard
                        img={Image2}
                        name="서울역사박물관"
                        position="4월 28일(목)부터 7월 10일(일)까지"
                    />
                    <TeamCard
                        img={Image3}
                        name="Alexa Smith"
                        position="UI/UX Designer"
                    />
                    {/* <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    /> */}
                </div>
            </div>
        </section>
    );
}
