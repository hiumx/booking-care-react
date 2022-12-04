import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { LANGUAGES } from '../../utils';
import { adminMenu } from './menuApp';
import './Header.scss';
import { FormattedMessage } from 'react-intl'

class Header extends Component {

    render() {
        const { processLogout, changeLanguagesAppRedux, language, userInfo } = this.props;

        const handleChangeLanguage = (language) => {
            changeLanguagesAppRedux(language)
        }


        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                {/* nút logout */}
                <div className='welcome-languages-logout'>
                    <span className='text-welcome'>
                        <FormattedMessage id="header-home.welcome" />
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''}
                    </span>
                    <div className='languages'>
                        <span className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'} onClick={() => handleChangeLanguage(LANGUAGES.VI)}>VN</span>
                        <span className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'} onClick={() => handleChangeLanguage(LANGUAGES.EN)}>EN</span>
                    </div>
                    <div className="btn btn-logout" title='logout' onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguagesAppRedux: (language) => dispatch(actions.changeLanguagesApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
