import React from 'react'
import Modal from './modal'
import ModalCreateForm from './movieCreateForm'
import { createQuote } from '../actions'


class SideMenu extends React.Component {

  constructor(props) {
    super(props)
    this.modal = React.createRef();
  }

  handleCreateQuotee = (quote, cleanCallback) => {
    createQuote(quote)
      .then(() => {
        this.props.addQuoteToList()
        this.modal.closeModal()
        cleanCallback()
      })
  }

  render() {
    return (
      <div>
        <Modal ref={ele => { this.modal = ele }}>
          <ModalCreateForm
            {...this.props}
            handleFormSubmit={this.handleCreateQuote}
          />
        </Modal>
        <h1 className="my-4">Cotizaciones</h1>
        <div className="list-group">
          <a
            key='all'
            onClick={() => this.props.changeCategory('all')}
            href="#"
            className={`list-group-item ${this.props.activeCategory === 'all' ? 'active' : ''}`}>Todas
          </a>
          {this.props.categories.map(c => (
            <a
              key={c.id}
              onClick={() => this.props.changeCategory(c.name)}
              href="#"
              className={`list-group-item ${this.props.activeCategory === c.name ? 'active' : ''}`}>{c.name}
            </a>
          ))
          }
        </div>
      </div>
    )
  }
}

export default SideMenu
