import { Input } from 'react-bootstrap'

import Delivery from '../../../models/delivery'

export default class DeliveryInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.buildDeliveries();
    this.setInitialState()
  }

  setInitialState() {
    this.resetStore = this.context.flux.getStore('ResetStore');
  }

  componentDidMount() {
    this.resetStore.addListener('change', this.resetForm.bind(this));
  }

  componentWillUnmount() {
    this.resetStore.removeListener('change', this.resetForm.bind(this));
  }

  resetForm() {
    document.getElementById('option').selectedIndex = 0
  }

  buildDeliveries() {
    this.deliveries = this.context.deliveries.map(deliveryJson => {
      const delivery = Delivery.buildFromJson(deliveryJson);
      return <option value={ delivery.id } key={ delivery.name } >{ `${delivery.name}: ${delivery.description}` }</option>
    })
  }

  getDeliveryDetails() {
    return {
      delivery_id: this.refs['option'].getValue()
    }
  }

  render() {
    return (
      <Input type='select' ref='option' label='Delivery option' id='option'>
        { this.deliveries }
      </Input>
    )
  }
}

DeliveryInput.contextTypes = {
  deliveries: React.PropTypes.array,
  flux:       React.PropTypes.object
};
