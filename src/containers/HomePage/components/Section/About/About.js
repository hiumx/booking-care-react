import { connect } from 'react-redux';
import './About.scss'
function About() {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <h3 className='about-title'>Thông tin nói về BookingCare</h3>
                <div className='row'>
                    <div className='col col-lg-6 about-video'>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/jEdfjuG0Fx4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className='col col-lg-6 about-media'>
                        <ul className='about-media-list'>
                            <li className='about-media-item'>
                                <a href='/'>
                                    <i className='img-media-life'></i>
                                </a>
                            </li>
                            <li className='about-media-item'>
                                <a href='/'>
                                    <i className='img-media-vtv1'></i>
                                </a>
                            </li>
                            <li className='about-media-item'>
                                <a href='/'>
                                    <i className='img-media-ictnews'></i>
                                </a>
                            </li>
                            <li className='about-media-item'>
                                <a href='/'>
                                    <i className='img-media-vn-express'></i>
                                </a>
                            </li>
                            <li className='about-media-item'>
                                <a href='/'>
                                    <i className='img-media-vtc-news'></i>
                                </a>
                            </li>
                            <li className='about-media-item'>
                                <a href='/'>
                                    <i className='img-media-ministry-health'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(About);