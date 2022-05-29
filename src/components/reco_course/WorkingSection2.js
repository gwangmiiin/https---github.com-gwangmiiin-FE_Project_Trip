import StatusCard from 'components/landing/StatusCard';

export default function WorkingSection2() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard title="Awarded Agency">
                        Divide details about your product or agency work into
                        parts. A paragraph describing a feature will be enough.
                    </StatusCard>
                    <StatusCard title="Free Revisions" >
                        Keep you user engaged by providing meaningful
                        information. Remember that by this time, the user is
                        curious.
                    </StatusCard>
                    <StatusCard title="Verified Company" >
                        Write a few lines about each one. A paragraph describing
                        a feature will be enough. Keep you user engaged!
                    </StatusCard>
                </div>
             </div>
        </section>
    );
}
