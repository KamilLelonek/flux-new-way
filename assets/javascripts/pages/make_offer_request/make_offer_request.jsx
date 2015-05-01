import getData from '../../helpers/get_data'

import CompanyInput  from './inputs/company_input'
import CustomerInput from './inputs/customer_input'
import DeliveryInput from './inputs/delivery_input'
import ProductsInput from './inputs/products_input'

import FormButtons  from './buttons/form_buttons'

import FluxComponent from 'flummox/component'

export default class MakeOfferRequest extends React.Component {
  static fetchData() {
    return Promise.all([
      getData('/categories'),
      getData('/deliveries')
    ])
  }

  constructor(props, context) {
    super(props, context);
    this.setInitialState()
  }

  setInitialState() {
    [this.categories, this.deliveries] = this.props.data['make-offer-request'];
    this.submitStore = this.context.flux.getStore('SubmitStore')
  }

  componentDidMount() {
    this.submitStore.addListener('change', this.submitForm.bind(this));
  }

  componentWillUnmount() {
    this.submitStore.removeListener('change', this.submitForm.bind(this));
  }

  submitForm() {
    console.log('submit')
  }

  getChildContext() {
    return {
      categories: this.categories,
      deliveries: this.deliveries
    }
  }

  render() {
    return (
      <from>
        <CustomerInput ref='customer' />
        <CompanyInput ref='company' />
        <ProductsInput ref='products' />
        <DeliveryInput ref='delivery' />
        <FormButtons />
      </from>
    )
  }
}

MakeOfferRequest.childContextTypes = {
  categories: React.PropTypes.array,
  deliveries: React.PropTypes.array
};

MakeOfferRequest.contextTypes = { flux: React.PropTypes.object };
