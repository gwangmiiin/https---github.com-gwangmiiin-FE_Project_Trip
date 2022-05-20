import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/changgyeonggung-palace-551221_1920.jpg';

export default function ContentFood2() {
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
                            <H3 color="gray">음식2</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                ////
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <Icon name="work" size="xl" />
                               ////
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="account_balance" size="xl" />
                                //////
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                       //////
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
