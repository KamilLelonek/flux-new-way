import { Input } from 'react-bootstrap'

import Delivery from '../../../models/delivery'

export default class DeliveryInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.buildDeliveries()
  }

  buildDeliveries() {
    this.deliveries = this.context.deliveries.map(deliveryJson => {
      const delivery = Delivery.buildFromJson(deliveryJson);
      return <option value={ delivery.id } key={ delivery.name } >{ `${delivery.name}: ${delivery.description}` }</option>
    })
  }

  render() {
    return (
      <Input type='select' label='Delivery option'>
        { this.deliveries }
      </Input>
    )
  }
}

DeliveryInput.contextTypes = { deliveries: React.PropTypes.array };
