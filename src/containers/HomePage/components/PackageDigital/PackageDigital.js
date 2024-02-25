
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './PackageDigital.scss';

function PackageDigital({ color, data }) {

    const { title, cost, characteristicDesc, listFeatures } = data;

    return (
        <div className={`medical__service__wrapper border__color__${color}`}>
            <div className='package__wrapper'>
                <div className={`package__title background__${color}`}>
                    <h3>{title}</h3>
                </div>
                <div className='package__detail'>
                    <div className='package__name'>
                        <svg className={`package__name__icon fill__${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 32v128h128V32H0zm120 120H8V40h112v112zm40-120v128h128V32H160zm120 120H168V40h112v112zm40-120v128h128V32H320zm120 120H328V40h112v112zM0 192v128h128V192H0zm120 120H8V200h112v112zm40-120v128h128V192H160zm120 120H168V200h112v112zm40-120v128h128V192H320zm120 120H328V200h112v112zM0 352v128h128V352H0zm120 120H8V360h112v112zm40-120v128h128V352H160zm120 120H168V360h112v112zm40-120v128h128V352H320z" />
                        </svg>
                        <h3 className={`package__name__detail text__${color}`}>{cost}</h3>
                    </div>
                    <p className='package__characteristic__desc'>{characteristicDesc}</p>
                </div>
                <div className='package__characteristic'>
                    <ul className='package__characteristic__list'>
                        {listFeatures.map((feature, index) => 
                        <li className='package__characteristic__item'>
                            <div className='package__characteristic__icon__wrapper'>
                                <svg className={`package__characteristic__icon fill__${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg>
                            </div>
                            <p className='package__characteristic__desc'>{feature}</p>
                        </li>
                        )}
                    </ul>
                    <div className='package__contact__btn__wrapper'>
                        <button className={`package__contact__btn background__${color}`}>
                            <Link to='/' className='package__contact__btn__link'>Liên hệ</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageDigital;