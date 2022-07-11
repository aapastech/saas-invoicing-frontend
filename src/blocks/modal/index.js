import React from "react";
import { Header, Modal, Button } from "semantic-ui-react";

export default class ModalComponent extends React.Component {
  render() {
    const {
      open,
      modalSize = "small",
      trigger = null,
      header,
      isBasic = false,
      content: Content,
      actions,
      onClose,
      className
    } = this.props;

    const modalProps = { size: modalSize, open, className };
    if (isBasic) modalProps.basic = true;
    if (onClose) modalProps.onClose = onClose;
    
    if (trigger) {
        const { label, ...buttonProps } = trigger;
        if (label) modalProps.trigger = <Button {...buttonProps}>{label}</Button>;
        else modalProps.trigger = <Button {...buttonProps} />;
    }

    return (
      <Modal {...modalProps}>
        {header && <Header {...header} />}
        {Content && (
          <Modal.Content scrolling>
            <Content />
          </Modal.Content>
        )}
        {actions && <Modal.Actions>{actions}</Modal.Actions>}
      </Modal>
    );
  }
}
