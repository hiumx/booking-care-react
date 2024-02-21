
import './Loading.scss';

import ReactLoading from 'react-loading';
import _ from 'lodash';

function Loading({ data, children }) {
    return (
        <div>
            {_.isEmpty(data)
                ? <div className='loading'>
                    <ReactLoading type='spin' color='#33b0e3' height={50} width={50} />
                </div>
                : children
            }
        </div>
    )
}

export default Loading;