import { Link } from 'react-router-dom';
import StatusCard from 'components/landing/StatusCard';

export default function ContentPlay() {
    return (
        <>
        <section className="relative py-16 bg-gray-100">
            <Link to="/course1">
                <StatusCard title="Awarded Agency">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
            </Link>

            <Link to="/course2">
                <StatusCard title="Awarded Agency">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
            </Link>

            <Link to="/course3">
                <StatusCard title="Awarded Agency">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
            </Link>    
        </section>
        </>
    );
}