import http from "./http/http-common";

const URL = "/GetAccountDetails"
export type Account = {
    company_name: string,
    starting_balance: string,
    customer_id: string,
    last_login: string,
    account_id: string,
    type: string
}

function AccountDetails(account:string, callback: Function){
    http.get(URL)
        .then(resp => {
            let accs:Account[] = []
            resp.data.forEach((acc: { get?: any; company_name?: string; starting_balance?: string; customer_id?: string; last_login?: string; account_id?: string; type?: string; }) => {
                if(acc.customer_id === account)
                    accs.push(acc as Account)
            })
            if(accs.length > 0)
                callback(accs)
        })
        .catch(e => {
            console.log(e);
        })
}

export default AccountDetails;
