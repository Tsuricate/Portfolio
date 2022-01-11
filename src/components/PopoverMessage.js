import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const PopoverMessage = ({ children, isOpen, message }) =>
  isOpen ? (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent width="auto" maxW={{ base: '2xs' }} mr={{ base: 5 }}>
          <PopoverArrow />
          <PopoverBody>{message}</PopoverBody>
        </PopoverContent>
      </Portal>
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
