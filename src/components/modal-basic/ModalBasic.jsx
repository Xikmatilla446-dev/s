import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



const ModalBasicExample = ({modalOpen, openModal}) => (
    <Modal open={modalOpen} basic size='small'>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
            <p>
                Your inbox is getting full, would you like us to enable automatic
                archiving of old messages?
            </p>
        </Modal.Content>
        <Modal.Actions>
            <Button basic color='red'

                    onClick={() => openModal()}
                    inverted>
                <Icon name='remove' /> No
            </Button>
            <Button color='green'
                    onClick={() => openModal()}
                    inverted>
                <Icon name='checkmark' /> Yes
            </Button>
        </Modal.Actions>
    </Modal>
);

export default ModalBasicExample
