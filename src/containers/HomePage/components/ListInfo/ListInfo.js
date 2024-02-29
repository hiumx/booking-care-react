
import './ListInfo.scss';
import Loading from '../../../../components/Loading/Loading';
import InfoItem from '../InfoItem/InfoItem';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ListInfo({ title, listInfo, contentBtn }) {
    return (
        <div className='list__info__wrapper'>
            <h2 className='list__info__title'>{title}</h2>
            <Loading data={listInfo} >
                <ul className='list__info__list row'>
                    {listInfo.map((benefit, index) =>
                        <li className='col-md-4' key={index}>
                            <InfoItem
                                image={benefit.image}
                                title={benefit.title}
                                description={benefit.description}
                            />
                        </li>
                    )}
                </ul>
            </Loading>
            {contentBtn &&
                <div className='list__info__btn__wrapper'>
                    <button className='list__info__btn'>
                        <Link to='/cooperate-digital-conversion' className='list__info__btn--link'>{contentBtn}</Link>
                    </button>
                </div>
            }
        </div>
    )
}

export default ListInfo;