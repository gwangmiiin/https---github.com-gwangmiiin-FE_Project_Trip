import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import { NavLink } from 'react-router-dom';

export default function StatusCard2({title, children }) {
    return (
        <div className="w-full md:w-4/12 px-4 flex justify-center text-center" onClick="location.replace('Course1.js')">
            <Card>
                    <NavLink to = './Courses2'>
                    <CardBody>
                    <div
                        className={`p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 `}
                    >
                    </div>
                    <H6 color="gray">{title}</H6>
                    <Paragraph color="blueGray">{children}</Paragraph>
                </CardBody>
                </NavLink>
            </Card>
        </div>
    );
}
