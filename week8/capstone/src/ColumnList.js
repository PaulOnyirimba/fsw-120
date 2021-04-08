import React from 'react'
import ColumnCard from './ColumnCard.js'

class ColumnList extends React.Component {
    render() {
        const mappedCards = this.props.columnPosts.map( (card, i) => {
            return (
                <ColumnCard
                key={i}
                username={card.username}
                content={card.content}
                />
            )
        })
        return (
            <div style={{backgroundColor: 'lightgreen', padding:'5px'}}>
                { mappedCards }
            </div>
        )
    }
}

export default ColumnList