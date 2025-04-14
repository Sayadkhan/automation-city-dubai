import React from 'react';
import UAEVisaSteps from './UAEVisaSteps/UAEVisaSteps';
import UAEVisaFAQ from './UAEVisaFAQ/UAEVisaFAQ';

const Visa = () => {
    return (
        <div className=' my-10 flex md:gap-5 gap-1 flex-col md:flex-row 2xl:max-w-[1530px] max-w-full px-3 md:px-8 xl:max-w-[1280px] container mx-auto'>
            <UAEVisaFAQ></UAEVisaFAQ>
            <UAEVisaSteps></UAEVisaSteps>
        </div>
    );
};

export default Visa;