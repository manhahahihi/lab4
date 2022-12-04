import "typeface-roboto";
import React, { useState }  from "react";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App({links}) {
  const [open, setOpen] = useState(false);

  function toglleDrawer({type,key}) {
    if(type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
      return;
    }
    setOpen(!open);
  }

  return (
    <BrowserRouter>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <section>
        <Routes path="/first" component={First} />
        <Routes path="/second" component={Second} />
        <Routes path="/third" component={Third} />
      </section>
      <Drawer open={open} onClose={toogleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toogleDrawer}
          onKeyDown={toggleDrawer}
        > 
        <List>
          {links.map((link) => (
            <ListItem button key={link.url} component={Link} to={link.url} >
              <Routes>
                <Route
                  exact
                  path={link.url}
                  render={() => (
                    <ListItemText
                      primary={link.name}
                      primaryTypographyProps={{ color: "primary"}}
                    />
                  )}
                />
                <Route
                  path="/"
                  render={() => <ListItemText primary={link.name} />}
                />
              </Routes>
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>
    </BrowserRouter>
  );
}

App.defaultProps = {
  link: [
    {url: "/first", name: "First Page"},
    {url: "/second", name: "Second Page"},
    {url: "/third", name: "Third Page"},
  ],
};
