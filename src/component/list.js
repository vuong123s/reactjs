import React, {Component} from 'react'

class List extends Component{
    render () {
        const types = [
            {type : '1', isRender : true},
            {type : 'A'},
            {type : 'a', isRender : true},
            {type : 'I'},
            {type : 'i'}
        ]
        return (
            <div className = "list">
                <p>Use only HTML to set list type</p>
                {
                    types.map((i) => {
                        if(i.isRender === true){
                            return (
                                <div>
                                    <ol type={i.type}>
                                        <li>Item 1</li>
                                        <li>Item 2</li>
                                        <li>Item 3</li>
                                    </ol>
                                </div>
                            ) 
                        } 
                    })
                }
                
            </div>
        )
    }
}

export default List