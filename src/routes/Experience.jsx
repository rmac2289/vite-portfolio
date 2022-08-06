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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { data } from "../data";
import ChowNowLogo from "../assets/chownowLogo.svg";
import AxosLogo from "../assets/axos-logo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Experience = () => {
  const { experience } = data;
  return (
    <Card>
      <header>
        <h1>where I've worked</h1>
      </header>
      <Stack spacing={2}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "95%",
              }}
            >
              <img src={ChowNowLogo} alt="ChowNow Logo" />
              <Typography sx={{ fontSize: "22px", fontWeight: "500" }}>
                QA Engineer
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText>cool thing 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>more cool stuff</ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "95%",
              }}
            >
              <img src={AxosLogo} alt="Axos Logo" />
              <Typography sx={{ fontSize: "22px", fontWeight: "500" }}>
                SDET
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemText>cool thing 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>more cool stuff</ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Card>
  );
};
