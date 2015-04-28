import getData from '../../helpers/get_data'

import CompanyInput  from './inputs/company_input'
import CustomerInput from './inputs/customer_input'
import DeliveryInput from './inputs/delivery_input'
import ProductsInput from './inputs/products_input'

import SubmitButton from './buttons/submit_button'
import ResetButton  from './buttons/reset_button'

export default class MakeOfferRequest extends React.Component {
  static fetchData() {
    return Promise.all([
      getData('/categories'),
      getData('/deliveries')
    ])
  }

  constructor(props) {
    super(props);
    [this.categories, this.deliveries] = props.data['make-offer-request']
  }

  render() {
    return (
      <from>
        <CustomerInput ref='customer' />
        <CompanyInput  ref='company'  />
        <ProductsInput ref='products' categories={ this.categories }  />
        <DeliveryInput ref='delivery' deliveries={ this.deliveries }  />
        <ResetButton  />
        <SubmitButton />
      </from>
    )
  }
}

