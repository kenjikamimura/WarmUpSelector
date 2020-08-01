import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar as MaterialUIAppBar,
  IconButton,
  Toolbar,
  Tooltip,
} from "@material-ui/core";

export const AppBar = ({ children }: { children: React.ReactNode }) => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  return (
    <MaterialUIAppBar>
      <Toolbar>
        <Tooltip
          title="Comming soon"
          arrow
          open={tooltipIsOpen}
          onOpen={() => setTooltipIsOpen(true)}
          onClose={() => setTooltipIsOpen(false)}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setTooltipIsOpen(!tooltipIsOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      {children}
    </MaterialUIAppBar>
  );
};
