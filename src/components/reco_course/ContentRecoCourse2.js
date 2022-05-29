import { Link } from 'react-router-dom';
import StatusCard from 'components/landing/StatusCard';

export default function ContentPlay() {
    return (
        <>
        <section className="relative py-16 bg-gray-100">
            <Link to="/course4">
                <StatusCard title="Awarded Agency">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
            </Link>

            <Link to="/course5">
                <StatusCard title="Awarded Agency">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
            </Link>

            <Link to="/course6">
                <StatusCard title="Awarded Agency">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
            </Link>    
        </section>
        </>
    );
}