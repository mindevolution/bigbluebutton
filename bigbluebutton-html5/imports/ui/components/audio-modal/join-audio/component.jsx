import React from 'react';
import Button from '/imports/ui/components/button/component';
import { clearModal } from '/imports/ui/components/app/service';
import styles from '../styles.scss';

export default class JoinAudio extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.openAudio = this.openAudio.bind(this);
    this.openListen = this.openListen.bind(this);
  }

  handleClose() {
    this.setState({ isOpen: false });
    clearModal();
  }

  openAudio() {
    this.props.changeMenu(this.props.AUDIO_SETTINGS);
  }

  openListen() {
    this.handleClose();
    this.props.handleJoinListenOnly();
  }

  render() {
    return (
      <div>
        <div className={styles.center}>
          <Button className={styles.closeBtn}
            label={'Close'}
            icon={'close'}
            size={'lg'}
            circle={true}
            hideLabel={true}
            onClick={this.handleClose}
          />
          <div>
            How would you like to join the audio?
          </div>
        </div>
        <div className={styles.center}>
          <Button className={styles.audioBtn}
            label={'Microphone'}
            icon={'audio'}
            circle={true}
            size={'jumbo'}
            onClick={this.openAudio}
          />
          <Button className={styles.audioBtn}
            label={'Listen Only'}
            icon={'listen'}
            circle={true}
            size={'jumbo'}
            onClick={this.openListen}
          />
        </div>
      </div>
    );
  }
};
