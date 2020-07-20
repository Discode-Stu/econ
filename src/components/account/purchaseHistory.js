import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className="purchase-history">
                <PageTitle className='purchase-histort__page-title' title='Purchase History'></PageTitle>
            </div>
        )
    }
}

export default PurchaseHistory;