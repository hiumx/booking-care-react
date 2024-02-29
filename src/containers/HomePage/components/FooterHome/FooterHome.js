import './FooterHome.scss';

function FooterHome() {
    return (
        <div className='footer-container'>
            <p className='footer-title'>© 2024 BookingCare.</p>
            <div className='footer-contact-icon'>
                <a href='https://www.tiktok.com/@xun.hiun17_' target='_blank'>
                    <div className='footer-tiktok-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                    </svg>
                    </div>
                </a>
                <a href='https://www.facebook.com/hiuxm.2501/' target='_blank'>
                    <div className='footer-facebook-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                    </div>
                </a>
                <a href='https://www.youtube.com/'>
                    <div className='footer-youtube-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FooterHome;