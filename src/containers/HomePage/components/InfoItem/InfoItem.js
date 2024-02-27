
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './InfoItem.scss';

function InfoItem({ image, title, description }) {
    return (
        <div className='info__item__wrapper'>
            <div className='info__item'>
                <LazyLoadImage className='info__item__img' src={image} alt='info__item__img' />
                <h3 className='info__item__title'>{title}</h3>
                <p className='info__item__desc'>{description}</p>
            </div>
        </div>
    )
}

export default InfoItem