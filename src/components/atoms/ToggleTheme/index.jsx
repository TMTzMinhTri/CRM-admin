import React, { memo } from 'react';
import { IconButton, SvgIcon } from '@material-ui/core';
import { SquareSvg } from '@/svg';

const ToggleTheme = ({ onClick }) => (
  <IconButton onClick={onClick} className="toggle-theme">
    <SvgIcon color="inherit" component="div">
      <SquareSvg />
    </SvgIcon>
  </IconButton>
);

export default memo(ToggleTheme);
