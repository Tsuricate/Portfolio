import React from 'react';
import PropTypes from 'prop-types';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';

const PopoverMessage = ({ children, isOpen, message }) =>
  isOpen ? (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>{message}</PopoverBody>
      </PopoverContent>
    </Popover>
  ) : (
    <>{children}</>
  );

PopoverMessage.defaultProps = {
  isOpen: false,
  message: undefined,
};

PopoverMessage.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  message: PropTypes.string,
};

export default PopoverMessage;
