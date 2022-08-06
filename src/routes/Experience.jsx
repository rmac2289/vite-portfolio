import React from "react";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { data } from "../data";
import ChowNowLogo from "../assets/chownowLogo.svg";
import AxosLogo from "../assets/axos-logo.png";
export const Experience = () => {
  const { experience } = data;
  return (
    <Card>
      <header>
        <h1>where I've worked</h1>
      </header>
      <Stack spacing={2}>
        <Card display="flex">
          <img src={ChowNowLogo} alt="ChowNow Logo" />
          <Divider />
          <Typography>
            <strong>2022 - Present, QA Engineer</strong>
          </Typography>
          <List>
            <ListItem>
              <ListItemText>cool thing 1</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>more cool stuff</ListItemText>
            </ListItem>
          </List>
        </Card>
        <Card>
          <img src={AxosLogo} alt="Axos Logo" />
          <Divider />

          <Typography>
            <strong>2021 - 2022, SDET</strong>
          </Typography>
          <List>
            <ListItem>
              <ListItemText>cool thing 1</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>more cool stuff</ListItemText>
            </ListItem>
          </List>
        </Card>
      </Stack>
    </Card>
  );
};
