import React from 'react'
import ColumnList from './ColumnList.js'

class ColumnForm extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: '',
            columnPosts: [
                {username: 'Madonna', content: 'Today when i woke up I was so happy.'},
                {username: 'Paul', content: 'You never learn if you never fail.'},
                {username: 'Paul', content: 'You never walk if you never crawl.'}
            ]
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name] : value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let newColumnData = {
            username: this.state.username,
            content: this.state.content
        }
        this.setState({
            columnPosts : [newColumnData, ...this.state.columnPosts],
            username: '',
            content: ''
        })
    }

    render() {
        return (
            <div style={{backgroundColor:'lightblue'}}>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <div className='postInputWrapper'>
                        <div className='postHeader'>New Post to Column</div>
                        <div className='postCell'>
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                onChange={this.handleChange}
                                value={this.state.username}
                                required={true}
                                />
                        </div>
                        <div className='postSpan'>
                            <textarea
                            name='content'
                            placeholder='what is going on?'
                            onChange={this.handleChange}
                            value={this.state.content}
                            required={true}
                            minLength='12'
                            />
                        </div>
                        <div className='postSpan' style={{textAlign:'right', paddingBottom: '10px'}}>
                            <button className='postButton'>Submit</button>
                        </div>
                    </div>
                </form>
                <br />
                <ColumnList columnPosts={this.state.columnPosts} />
            </div>
        )
    }
}

export default ColumnForm