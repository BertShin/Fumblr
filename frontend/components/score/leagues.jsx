import React from 'react';


class Leagues extends React.Component {
    render() {
        let isSelected = this.props.selectedTab;
        let headers = this.props.leagues.map((league, index) => {
            let title = league.title;
            let currentClass = '';
            if (index === isSelected) {
                currentClass = 'active';
            }

            return (
                <li
                    key={index}
                    className={currentClass}
                    onClick={this.props.chosenTab.bind(null, index)}>
                    {title}{' '}
                </li>
            );
        });

        return (
            <ul className='tab-header'>
                {headers}
            </ul>
        );
    }

}

export default Leagues;