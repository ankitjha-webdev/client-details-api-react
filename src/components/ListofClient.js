import React, { Component } from 'react'
import Footer from './Footer';

export default class ListofClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: []
        }
    }
    componentDidMount() {
        fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
            .then((resp) => {
                resp.json().then((data) => {
                    console.log(data.clients);
                    this.setState({ client: data.clients })
                })
            })
    }
    render() {
        return (
            <div>
                  {/* Page content  */}
            <div className="container-fluid mt--6" >
                <div className="row">
                    <div className="col" >
                        <div className="card align-items-center">
                            <div className="card align-items-center mx-auto w-25 text-center justify-content-center ">
                                <div className="card-header border-3 bg-warning">
                                </div>

                                {/* Card header */}
                                <div className="card-header border-0 bg-warning">
                                    <h3 className="mb-0 text-white"> Client Details </h3>
                                </div>
                                {/* clients table  */}
                                <div className="table-responsive" >
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr className=" ">
                                                <th scope="col" className="sort bg-warning text-white pt-3" data-sort="name">Name</th>
                                                <th scope="col" className="sort bg-warning text-white" data-sort="budget">Company</th>
                                            </tr>
                                        </thead>
                                       
                                            <tbody className="list" id="list"> 
                                               {
                                                   this.state.client ?
                                                   this.state.client.map((client, index) => 
                                                   <tr key={index}>
                                                   <th scope="row">
                                                       <div className="media align-items-center">
                                                           <div className="media-body">
                                                               <span className="name mb-0 text-sm" id="name">{client.name}</span>
                                                           </div>
                                                       </div>
                                                   </th>
                                                   <td className="budget" id="company">
                                                       {client.company}
                                                   </td>
                                               </tr>
                                                   )
                                                   :
                                                   null
                                               }

                                            </tbody>
                                
                                    </table>
                                </div>
                                {/* Card footer  */}
                                <div className="card-footer py-4">
                                    <nav aria-label="...">

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
            </div>
        )
    }
}
