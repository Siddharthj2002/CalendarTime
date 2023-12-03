// CalendarTable.js
import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { cellStyles } from "./styles" // Import cell styles

const CalendarTable = () => {
  const timeSlots = Array.from({ length: 25 }, (_, i) => (i + 8) % 24); // Adjust to 24-hour format

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Monday</TableCell>
              <TableCell>Tuesday</TableCell>
              <TableCell>Wednesday</TableCell>
              <TableCell>Thursday</TableCell>
              <TableCell>Friday</TableCell>
              <TableCell>Saturday</TableCell>
              <TableCell>Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((hour, index) => (
              <TableRow key={hour}>
                <TableCell>{`${
                  hour % 24 === 0 ? 12 : hour % 24
                }:00`}</TableCell>
                {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                  <TableCell
                    key={day}
                    sx={
                      (index % 2 === 0 && day % 2 === 0) ||
                      (index % 2 !== 0 && day % 2 !== 0)
                        ? cellStyles.lightGray
                        : cellStyles.white
                    }
                  >
                    {/* Your cell content goes here */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CalendarTable;
