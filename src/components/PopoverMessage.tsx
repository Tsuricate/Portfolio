import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';

interface PopoverMessageProps {
  children: React.ReactNode;
  isOpen?: boolean;
  message?: string;
}

const PopoverMessage = ({ children, isOpen, message }: PopoverMessageProps) =>
  isOpen ? (
    <Popover.Root>
      <PopoverTrigger>{children}</PopoverTrigger>
      <Portal>
        <PopoverContent width="auto" maxW={{ base: '2xs' }} mr={{ base: 5 }}>
          <PopoverArrow />
          <PopoverBody>{message}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover.Root>
  ) : (
    <>{children}</>
  );

export default PopoverMessage;
