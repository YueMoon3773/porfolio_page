import React from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';
import { ArrowRightIcons } from '../../../assets/svgIcons';

import './LinkBtnLike.scss';

const linkBtnSchema = z.object({
    toDestination: z.string(),
    linkBtnClassName: z.string(),
    isOpenInNewTab: z.boolean().default(false),
    isDisplayArrowIcon: z.boolean().default(false),
    children: z.unknown(),
});

const LinkBtnLike = ({ toDestination, linkBtnClassName, isOpenInNewTab, isDisplayArrowIcon, children }) => {
    return (
        <Link
            className={`linkBtnBaseStyle ${linkBtnClassName}`}
            to={toDestination}
            target={isOpenInNewTab ? '_blank' : undefined}
            rel={isOpenInNewTab ? 'noopener noreferrer' : undefined}
        >
            {isDisplayArrowIcon && (
                <div className="arrowIconWrapper left">
                    <ArrowRightIcons></ArrowRightIcons>
                </div>
            )}
            {children}
            {isDisplayArrowIcon && (
                <div className="arrowIconWrapper right">
                    <ArrowRightIcons></ArrowRightIcons>
                </div>
            )}
        </Link>
    );
};

export default ValidatedComponent(LinkBtnLike, linkBtnSchema);
