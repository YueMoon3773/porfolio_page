import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { EmailIcon, GitHubBigIcon, LinkedinIcon } from '../../../assets/svgIcons';
import PageLayout from '../../layout/PageLayout/PageLayout';
import PopSpinWrapper from '../../layout/PopSpinWrapper/PopSpinWrapper';

import contactImg from '../../../assets/img/personal/contact_img.jpg';

import './ContactPage.scss';

const ContactPage = () => {
    // useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0 });
    // });

    return (
        <PageLayout pageType={'normalPage'}>
            <div className="contactPageWrapper">
                <PopSpinWrapper className={'contactPageHeadingWrapper'}>
                    <h1 className="contactPageHeading">Let's get In Touch</h1>
                </PopSpinWrapper>

                <PopSpinWrapper className={'contactSubHeadingWrapper'} delay={0.6}>
                    <p className="contactPageSubHeading">
                        I'm always open to collaborating on interesting projects with good people. Reach out — I'd
                        genuinely like to hear from you.
                    </p>
                </PopSpinWrapper>

                <PopSpinWrapper className={'contactCardWrapper'} delay={1}>
                    <div className="contactCardImgWrapper">
                        <img src={contactImg} alt="Contact image" className="contactCardImg" />
                    </div>

                    <div className="contactCardTextWrapper">
                        <p className="contactCardText">Bao Nguyen</p>
                        <p className="contactCardText">Software Engineer</p>
                    </div>

                    <div className="contactLinksWrapper">
                        <Link to="mailto:nguyenhuagiabao.98@gmail.com" className="contactLink email">
                            <EmailIcon></EmailIcon>
                        </Link>
                        <Link to="https://github.com/YueMoon3773" className="contactLink github">
                            <GitHubBigIcon></GitHubBigIcon>
                        </Link>
                        <Link to="https://www.linkedin.com/in/bao-nguyen-nhgb98" className="contactLink linkedin">
                            <LinkedinIcon></LinkedinIcon>
                        </Link>
                    </div>
                </PopSpinWrapper>
            </div>
        </PageLayout>
    );
};

export default ContactPage;
