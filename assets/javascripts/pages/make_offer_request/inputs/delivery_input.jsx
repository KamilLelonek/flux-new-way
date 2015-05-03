import { Input } from 'react-bootstrap'

import Delivery from '../../../models/delivery'

import reactMixin from 'react-mixin'

export default class DeliveryInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.buildDeliveries();
    this.setInitialState()
  }

  setInitialState() {
    this.state      = { delivery_id: this.context.deliveries.last().id };
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
    return { delivery_id: this.state.delivery_id }
  }

  render() {
    return (
      <Input type='select' ref='option' label='Delivery option' id='option' valueLink={ this.linkState('delivery_id') } >
        { this.deliveries }
      </Input>
    )
  }
}

DeliveryInput.contextTypes = {
  deliveries: React.PropTypes.array,
  flux:       React.PropTypes.object
};

reactMixin(DeliveryInput.prototype, React.addons.LinkedStateMixin);
