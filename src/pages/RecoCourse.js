import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import WorkingSection from 'components/reco_course/WorkingSection';

export default function RecoCourse() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <WorkingSection />
            </main>
            <DefaultFooter />
        </>
    );
}
