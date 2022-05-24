import Button from '~/components/Button';
import styles from './Seach.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Seach() {
    return (
        <div className={cx('wrapper')}>
            <input placeholder="Tìm truyện..." className={cx('input-search')} />
            <span className={cx('icon-load')}>
                <FontAwesomeIcon icon={faSpinner} />
            </span>
            <Tippy content="Tìm kiếm">
                <Button primary>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Tippy>
        </div>
    );
}

export default Seach;