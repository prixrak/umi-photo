import * as React from 'react';
import Popover, { PopoverProps } from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';

interface Props {
  popover: {
    element: React.ReactNode;
    props?: Omit<PopoverProps, 'open'>;
  };
  button: {
    element: React.ReactNode;
    props?: React.ComponentProps<typeof Button>;
  };
}

export const CustomPopover: React.FC<Props> = ({ popover, button }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton variant="contained" onClick={handleClick} {...button.props}>
        {button.element}
      </IconButton>
      <Popover
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        {...popover.props}
        open={open}
      >
        {popover.element}
      </Popover>
    </div>
  );
};
