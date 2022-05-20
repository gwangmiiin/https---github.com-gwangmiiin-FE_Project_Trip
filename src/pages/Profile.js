import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';
import Content2 from 'components/profile/Content2';
import HeaderTop from 'components/profile/HeaderTop';
import HeaderName from 'components/profile/HeaderName';

export default function Profile() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
                <HeaderTop />
                <HeaderName />
                <Content />
                <Header />
                <Content2 />
                <Header />
            </main>
            <DefaultFooter />
        </>
    );
}
