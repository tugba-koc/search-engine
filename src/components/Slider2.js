// React
import React, { useRef } from 'react';

// Styles
import styles from "./Slider2.module.scss";

const Slider2 = () => {
    let slider = [
        {
            imgUrl: "https://www.travelandleisure.com/thmb/JWO4CNVDNSR-aLDBT93jVlHV1DQ=/1800x1200/filters:fill(auto,1)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
            description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
            note: "1h ago · by Troy Corlson 1"
        },
        {
            imgUrl: "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_16x9.jpg",
            description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
            note: "1h ago · by Troy Corlson 2"
        },
        {
            imgUrl: "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
            description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
            note: "1h ago · by Troy Corlson 3"
        },
        {
            imgUrl: "https://a.cdn-hotels.com/gdcs/production101/d154/ee893f00-c31d-11e8-9739-0242ac110006.jpg",
            description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
            note: "1h ago · by Troy Corlson 4"
        },
        {
            imgUrl: "https://media.istockphoto.com/photos/the-statue-of-liberty-with-the-one-world-trade-building-center-over-picture-id1169074379?b=1&k=20&m=1169074379&s=612x612&w=0&h=NZBcZVOU3DfPFDcGlq-0GTDHRo0rYSwG8pAx4Wpevus=",
            description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
            note: "1h ago · by Troy Corlson 5"
        },
        {
            imgUrl: "https://a.cdn-hotels.com/gdcs/production148/d757/6059b2a0-8f10-11e8-a0da-0242ac11004d.jpg",
            description: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
            note: "1h ago · by Troy Corlson 6"
        }
    ]

    const sliderRef = useRef(0)
    let currentSlide = 0;
    const prev = () => {
        if (currentSlide !== 0) {
            currentSlide--
            sliderRef.current.style.transform = `translateX(-${currentSlide * 300}px)`
        }
    }
    const next = () => {
        if (currentSlide !== (slider.length % 4)) {
            currentSlide++
            sliderRef.current.style.transform = `translateX(-${currentSlide * 300}px)`
        }
    }

    return (
        <div className={styles.sliderContainer}>
            <h2 className={`primary-font-bold ${styles.title}`}>Top News</h2>
            <div className={styles.sliderInner}>
                <div ref={sliderRef} className={styles.track}>
                    {slider.map((el, index) => (
                        <div className={`${styles.slide}`} key={index}>
                            <img className={styles.img} src={el.imgUrl} alt="" />
                            <p className={`primary-font-bold ${styles.description}`}>{el.description}</p>
                            <p className={`primary-font-regular ${styles.note}`}>{el.note}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => prev()} className={`${styles.button} ${styles.prev}`} >
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.162048" y="0.5" width="48" height="48" rx="24" fill="#EEEEEE" />
                    <path d="M30.162 36.5L18.162 24.5L30.162 12.5" stroke="#8A8A8A" />
                </svg>
            </button>
            <button onClick={() => next()} className={`${styles.button} ${styles.next}`} >
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" transform="matrix(-1 0 0 1 48.5146 0.5)" fill="#EEEEEE" />
                    <path d="M18.5146 36.5L30.5146 24.5L18.5146 12.5" stroke="#8A8A8A" />
                </svg>
            </button>
        </div>
    )
}

export default Slider2