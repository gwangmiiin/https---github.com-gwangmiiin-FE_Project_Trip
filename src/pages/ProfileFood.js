import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import ContentFood from 'components/profile_food/ContentFood';


export default function ProfileFood() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <Header />
                <ContentFood />
            </main>
            <DefaultFooter />
        </>
    );
}
