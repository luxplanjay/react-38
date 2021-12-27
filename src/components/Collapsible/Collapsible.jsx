import { Component } from 'react';
import { Wrapper, TriggerButton } from './Collapsible.styled';

export class Collapsible extends Component {
  static defaultProps = {
    isOpen: false,
    isDisabled: false,
    triggerPosition: 'top',
    mt: 0,
    mb: 0,
    mr: 0,
    ml: 0,
  };

  state = {
    isOpen: this.props.isOpen,
  };

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      children,
      isDisabled,
      triggerText,
      triggerPosition,
      ...spacingProps
    } = this.props;
    return (
      <Wrapper {...spacingProps}>
        <TriggerButton
          type="button"
          disabled={isDisabled}
          onClick={this.toggle}
          position={triggerPosition}
        >
          {triggerText}
        </TriggerButton>
        {isOpen && children}
      </Wrapper>
    );
  }
}
