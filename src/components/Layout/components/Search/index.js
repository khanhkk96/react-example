import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountItem from '~/components/AccountItem';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '~/components/Icons';
import { userDebounce } from '~/hooks';
import * as request from '~/utils/request';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = userDebounce(searchValue, 500);

    const searchInputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debouncedValue)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
        request
            .get(`/users/search`, {
                params: {
                    q: debouncedValue,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        searchInputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ') && searchValue.trim()) {
            setSearchValue(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={searchInputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchValue}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                    // onBlur={() => setSearchResult(false)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    <SearchIcon width="2.4rem" height="2.4rem" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
