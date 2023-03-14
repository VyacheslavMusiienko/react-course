import React from 'react';
import styles from './Search.module.scss';

interface IProps {
    buttonName: string;
}

interface ISearchBarState {
    searchValue: string;
}

export default class Search extends React.Component<IProps, ISearchBarState> {
    constructor(props: IProps) {
        super(props);
        const savedValue = localStorage.getItem('searchValue');
        this.state = {
            searchValue: savedValue || '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const savedValue = localStorage.getItem('searchValue');
        if (savedValue) {
            this.setState({ searchValue: savedValue });
        }
    }

    componentWillUnmount() {
        const { searchValue } = this.state;
        localStorage.setItem('searchValue', searchValue);
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchValue: event.target.value });
        localStorage.setItem('searchValue', event.target.value);
    };

    public render() {
        const { searchValue } = this.state;
        const { buttonName } = this.props;
        return (
            <div className="search">
                <input
                    type="text"
                    className={styles.search__input}
                    value={searchValue}
                    onChange={this.handleInputChange}
                />

                <button type="button" className={styles.search__button}>
                    {buttonName}
                </button>
            </div>
        );
    }
}
