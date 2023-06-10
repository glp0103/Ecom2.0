import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Forgot from '~/components/partials/account/Forgot';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';

const ForgotPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Forgot',
        },
    ];
    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Forgot">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <Forgot />
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default ForgotPage;
