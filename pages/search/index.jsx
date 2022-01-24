import * as React from 'react';
import searchStyle from './search.module.scss';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return <div className={searchStyle.search}>search</div>
    }
}