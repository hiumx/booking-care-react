import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { LANGUAGES } from '../../utils';
import { adminMenu, doctorMenu } from './menuApp';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.scss';

function Header({ processLogout, changeLanguagesAppRedux, language, userInfo }) {

    const [menu, setMenu] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if(userInfo.roleId === 'R1') {
            setMenu(adminMenu);
        } else if (userInfo.roleId === 'R2') {
            setMenu(doctorMenu);
        } else {
            setMenu([]);
            history.push('/home');
        }
    }, [userInfo]);

    const handleChangeLanguage = (language) => {
        changeLanguagesAppRedux(language)
    }


    return (
        <div className="header-container">
            
            <div className="header-tabs-container">
                <Navigator menus={menu} />
            </div>

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
