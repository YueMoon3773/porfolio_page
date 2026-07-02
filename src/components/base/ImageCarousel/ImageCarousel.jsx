import { useState, useRef } from 'react';
import { z } from 'zod';

import ValidatedComponent from '../../../utils/validateComponentProps';

import {
    PrevImgCarouselHoverIcon,
    PrevImgCarouselIcon,
    NextImgCarouselIcon,
    NextImgCarouselHoverIcon,
} from '../../../assets/svgIcons';

import './ImageCarousel.scss';

const imageCarouselSchema = z.object({
    imageList: z.array(z.looseObject({})),
});

const ImageCarousel = ({ imageList }) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [carouselBtnLeftHover, setCarouselBtnLeftHover] = useState(false);
    const [carouselBtnRightHover, setCarouselBtnRightHover] = useState(false);
    const touchStartX = useRef(0);

    const prevImgHandler = () => {
        if (imageList.length < 0) return;
        else
            setActiveImgIndex((prev) => {
                return prev === 0 ? imageList.length - 1 : prev - 1;
            });
    };

    const nextImgHandler = () => {
        if (imageList.length < 0) return;
        else
            setActiveImgIndex((prev) => {
                return prev === imageList.length ? 0 : (prev + 1) % imageList.length;
            });
    };

    return (
        <div className="carouselWrapper">
            {imageList.length > 0 && (
                <>
                    <button
                        className="carouselBtn carouselBtnLeft"
                        onMouseEnter={() => setCarouselBtnLeftHover(true)}
                        onMouseLeave={() => setCarouselBtnLeftHover(false)}
                        onClick={prevImgHandler}
                    >
                        {carouselBtnLeftHover ? (
                            <PrevImgCarouselHoverIcon></PrevImgCarouselHoverIcon>
                        ) : (
                            <PrevImgCarouselIcon></PrevImgCarouselIcon>
                        )}
                    </button>

                    <div
                        className="imagesWrapper"
                        style={{ transform: `translateX(${-activeImgIndex * 100}%)` }}
                        onTouchStart={(e) => {
                            touchStartX.current = e.touches[0].clientX;
                        }}
                        onTouchEnd={(e) => {
                            const touchDistance = e.changedTouches[0].clientX - touchStartX.current;

                            if (touchDistance < -30) nextImgHandler();
                            if (touchDistance > 30) prevImgHandler();
                        }}
                    >
                        {imageList.map((image, index) => {
                            return (
                                <img
                                    key={image.id}
                                    src={image.src}
                                    id={`${image.name}${image.id}`}
                                    className="projectImage"
                                    alt="project image"
                                />
                            );
                        })}
                    </div>

                    <button
                        className="carouselBtn carouselBtnRight"
                        onMouseEnter={() => setCarouselBtnRightHover(true)}
                        onMouseLeave={() => setCarouselBtnRightHover(false)}
                        onClick={nextImgHandler}
                    >
                        {carouselBtnRightHover ? (
                            <NextImgCarouselHoverIcon></NextImgCarouselHoverIcon>
                        ) : (
                            <NextImgCarouselIcon></NextImgCarouselIcon>
                        )}
                    </button>

                    <div className="carouselNavigationWrapper">
                        {[...Array(imageList.length)].map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`carouselNavigate ${activeImgIndex === index ? 'active' : ''}`}
                                    onClick={() => setActiveImgIndex(index)}
                                ></div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default ValidatedComponent(ImageCarousel, imageCarouselSchema);
