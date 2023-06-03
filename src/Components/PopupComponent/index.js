import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const PopupComponent = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button className="rules-button" type="button">
          RULES
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            onClick={() => close()}
          >
            <RiCloseLine size={20} color="#231f20" />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            className="rules-image"
            alt="rules"
          />
        </div>
      )}
    </Popup>
  </div>
)

export default PopupComponent
