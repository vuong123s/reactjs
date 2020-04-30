import React, {Component} from 'react'

class Table extends Component{
    render(){
        return (
            <div>
                <h2>Table gallery</h2>
                <table>
                <tr>
                    <th>Image column 1</th>
                    <th>Image column 2</th>
                    <th>Image column 3</th>
                </tr>
                <tr>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200' className='r'/>
                    </td>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                    <td>
                        <img src="http://bit.ly/3ayPusa" width='200'/>
                    </td>
                </tr>
                </table>
            </div>
        )
    }
}

export default Table