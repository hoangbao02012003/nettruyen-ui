import styles from './Navbar.module.scss';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faDownload, faHouse } from '@fortawesome/free-solid-svg-icons';
import CategoryNavDown from './Category';

const cx = classNames.bind(styles);

const listItems = [
    {
        href: '/',
        fontIcon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        title: 'hot ',
        href: '/hot',
    },
    {
        title: 'theo dõi',
        href: '/theo-doi',
    },
    {
        title: 'lịch sử',
        href: '/lich-su',
    },
    {
        title: 'thể loại ',
        href: '/the-loai',
        fontIcon: <FontAwesomeIcon icon={faCaretDown} />,
        list: [
            [
                {
                    title: 'Tất cả',
                    href: '/tim-truyen/tat-ca',
                },
                {
                    title: 'Action',
                    href: '/tim-truyen/action',
                },
                {
                    title: 'Adult',
                    href: '/tim-truyen/adult',
                },
                {
                    title: 'Adventure',
                    href: '/tim-truyen/adventure',
                },
                {
                    title: 'Anime',
                    href: '/tim-truyen/anime',
                },
                {
                    title: 'Chuyển sinh',
                    href: '/tim-truyen/chuyen-sinh',
                },
                {
                    title: 'Comedy',
                    href: '/tim-truyen/comedy',
                },
                {
                    title: 'Comic',
                    href: '/tim-truyen/comic',
                },
                {
                    title: 'Cooking',
                    href: '/tim-truyen/cooking',
                },
                {
                    title: 'Cổ Đại',
                    href: '/tim-truyen/co-dai',
                },
                {
                    title: 'Doujinshi',
                    href: '/tim-truyen/doujinshi',
                },
                {
                    title: 'Drama',
                    href: '/tim-truyen/drama',
                },
                {
                    title: 'Đam Mỹ',
                    href: '/tim-truyen/dam-my',
                },
            ],
            [
                {
                    title: 'Tất cả',
                    href: '/tim-truyen/tat-ca',
                },
                {
                    title: 'Action',
                    href: '/tim-truyen/action',
                },
                {
                    title: 'Adult',
                    href: '/tim-truyen/adult',
                },
                {
                    title: 'Adventure',
                    href: '/tim-truyen/adventure',
                },
                {
                    title: 'Anime',
                    href: '/tim-truyen/anime',
                },
                {
                    title: 'Chuyển sinh',
                    href: '/tim-truyen/chuyen-sinh',
                },
                {
                    title: 'Comedy',
                    href: '/tim-truyen/comedy',
                },
                {
                    title: 'Comic',
                    href: '/tim-truyen/comic',
                },
                {
                    title: 'Cooking',
                    href: '/tim-truyen/cooking',
                },
                {
                    title: 'Cổ Đại',
                    href: '/tim-truyen/co-dai',
                },
                {
                    title: 'Doujinshi',
                    href: '/tim-truyen/doujinshi',
                },
                {
                    title: 'Drama',
                    href: '/tim-truyen/drama',
                },
                {
                    title: 'Đam Mỹ',
                    href: '/tim-truyen/dam-my',
                },
            ],
            [
                {
                    title: 'Tất cả',
                    href: '/tim-truyen/tat-ca',
                },
                {
                    title: 'Action',
                    href: '/tim-truyen/action',
                },
                {
                    title: 'Adult',
                    href: '/tim-truyen/adult',
                },
                {
                    title: 'Adventure',
                    href: '/tim-truyen/adventure',
                },
                {
                    title: 'Anime',
                    href: '/tim-truyen/anime',
                },
                {
                    title: 'Chuyển sinh',
                    href: '/tim-truyen/chuyen-sinh',
                },
                {
                    title: 'Comedy',
                    href: '/tim-truyen/comedy',
                },
                {
                    title: 'Comic',
                    href: '/tim-truyen/comic',
                },
                {
                    title: 'Cooking',
                    href: '/tim-truyen/cooking',
                },
                {
                    title: 'Cổ Đại',
                    href: '/tim-truyen/co-dai',
                },
                {
                    title: 'Doujinshi',
                    href: '/tim-truyen/doujinshi',
                },
                {
                    title: 'Drama',
                    href: '/tim-truyen/drama',
                },
                {
                    title: 'Đam Mỹ',
                    href: '/tim-truyen/dam-my',
                },
            ],
            [
                {
                    title: 'Tất cả',
                    href: '/tim-truyen/tat-ca',
                },
                {
                    title: 'Action',
                    href: '/tim-truyen/action',
                },
                {
                    title: 'Adult',
                    href: '/tim-truyen/adult',
                },
                {
                    title: 'Adventure',
                    href: '/tim-truyen/adventure',
                },
                {
                    title: 'Anime',
                    href: '/tim-truyen/anime',
                },
                {
                    title: 'Chuyển sinh',
                    href: '/tim-truyen/chuyen-sinh',
                },
                {
                    title: 'Comedy',
                    href: '/tim-truyen/comedy',
                },
                {
                    title: 'Comic',
                    href: '/tim-truyen/comic',
                },
                {
                    title: 'Cooking',
                    href: '/tim-truyen/cooking',
                },
                {
                    title: 'Cổ Đại',
                    href: '/tim-truyen/co-dai',
                },
                {
                    title: 'Doujinshi',
                    href: '/tim-truyen/doujinshi',
                },
                {
                    title: 'Drama',
                    href: '/tim-truyen/drama',
                },
                {
                    title: 'Đam Mỹ',
                    href: '/tim-truyen/dam-my',
                },
            ],
        ],
    },
    {
        title: 'xếp hạng ',
        href: '/xep-hang',
        fontIcon: <FontAwesomeIcon icon={faCaretDown} />,
    },
    {
        title: 'tìm truyện',
        href: '/tim-truyen',
    },
    {
        title: 'con gái',
        href: '/con-gai',
    },
    {
        title: 'con trai',
        href: '/con-trai',
    },
    {
        title: 'tải app',
        href: '/tai-app',
    },
    {
        title: 'group',
        href: '/group',
    },
];

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('list-item')}>
                    {listItems.map((item, index) => {
                        return (
                            <>
                                <li key={index} className={cx('item')}>
                                    <div className={cx('grid')}>
                                        <a className={cx('link')} href={item.href}>
                                            {item.title}
                                            {item.fontIcon}
                                        </a>
                                        <ul className={cx('navDown')}>
                                            {item.list && <CategoryNavDown itemData={item.list} />}
                                        </ul>
                                    </div>
                                </li>
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;