import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail (_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [

            {
                _id: 0,
                total: 8.34,
                orderNumber: 'A00469246',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State St'
                }
            },
            {
                _id: 1,
                total: 9.35,
                orderNumber: 'A0435gffthh',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Dan Stuart',
                    shippingAddress: '445 East State St'
                }
            },
            {
                _id: 2,
                total: 11.44,
                orderNumber: 'A048rhfkeih',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Krista Swanson',
                    shippingAddress: '456 Canal St'
                }
            },
            {
                _id: 3,
                total: 8.38,
                orderNumber: 'G4567lkj2',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Chad Brookes',
                    shippingAddress: '64 Buzzle St'
                }
            },
            {
                _id: 4,
                total: 3.94,
                orderNumber: 'Belihl1246',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Thomas Stewart',
                    shippingAddress: '42 Health La'
                }
            },
            {
                _id: 5,
                total: 6.45,
                orderNumber: 'Dlk4958700f',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Dana Stack',
                    shippingAddress: '831 Thompson Rd'
                }
            },
            {
                _id: 6,
                total: 18.34,
                orderNumber: 'A006542l',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'James Hemperton',
                    shippingAddress: '625 Main St'
                }
            },
            {
                _id: 7,
                total: 8.34,
                orderNumber: 'Ay04726',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Ian Grassfed',
                    shippingAddress: '11 Beeferton St'
                }
            },
        ]
    })
}