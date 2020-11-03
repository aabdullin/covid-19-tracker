import React from 'react'


class ConfirmedCard extends React.Component {
    render() {
        return (
            <div id="cases_confirmed">
                <button onClick={refetch}>refetch</button>
                <a>Confirmed:</a>
                <pre>{JSON.stringify(confirmed, null, 2)}</pre>
            </div>
        )
    }
}


export default ConfirmedCard;