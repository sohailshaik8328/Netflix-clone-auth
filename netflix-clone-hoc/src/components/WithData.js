import React from 'react'

function WithData(Component, url) {
    return class EnhancedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data : []
            }
        }
    
        componentDidMount() {
            fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                data : data.items
            }))
        }
        render() {
            return (
                <Component data={this.state.data} />
            )
        }
    }
}

export default WithData
