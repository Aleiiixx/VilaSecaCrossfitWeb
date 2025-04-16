import React from 'react';
import { Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@components/ui/card";
import { cn } from "@lib/utils";

// Primero definimos todas las horas posibles
const ALL_HOURS = [
  "7:00",
  "8:00",
  "9:15",
  "10:15",
  "11:15",
  "12:15",
  "13:15",
  "14:15",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00"
];

const DAYS = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"];

const SCHEDULE_DATA = {
  LUNES: [
    { time: "7:00", class: "CROSSFIT / OPEN BOX" },
    { time: "8:00", class: "CROSSFIT / OPEN BOX" },
    { time: "9:15", class: "CROSSFIT / OPEN BOX" },
    { time: "10:15", class: "CROSSFIT / OPEN BOX" },
    { time: "11:15", class: "OPEN BOX" },
    { time: "12:15", class: "OPEN BOX" },
    { time: "13:15", class: "CROSSFIT / OPEN BOX" },
    { time: "14:15", class: "OPEN BOX" },
    { time: "15:00", class: "CROSSFIT / OPEN BOX" },
    { time: "16:00", class: "CROSSFIT / OPEN BOX" },
    { time: "17:00", class: "CROSSFIT / OPEN BOX" },
    { time: "18:00", class: "CROSSFIT" },
    { time: "19:00", class: "CROSSFIT" },
    { time: "20:00", class: "CROSSFIT / OPEN BOX" },
  ],
  MARTES: [
    { time: "7:00", class: "CROSSFIT / OPEN BOX" },
    { time: "8:00", class: "CROSSFIT / OPEN BOX" },
    { time: "9:15", class: "CROSSFIT / OPEN BOX" },
    { time: "10:15", class: "CROSSFIT / OPEN BOX" },
    { time: "11:15", class: "OPEN BOX" },
    { time: "12:15", class: "OPEN BOX" },
    { time: "13:15", class: "CROSSFIT / OPEN BOX" },
    { time: "16:00", class: "CROSSFIT / OPEN BOX" },
    { time: "17:00", class: "CROSSFIT / OPEN BOX" },
    { time: "18:00", class: "CROSSFIT" },
    { time: "19:00", class: "CROSSFIT" },
    { time: "20:00", class: "CROSSFIT / OPEN BOX" },
  ],
  MIÉRCOLES: [
    { time: "7:00", class: "CROSSFIT / OPEN BOX" },
    { time: "8:00", class: "CROSSFIT / OPEN BOX" },
    { time: "9:15", class: "CROSSFIT / OPEN BOX" },
    { time: "10:15", class: "CROSSFIT / OPEN BOX" },
    { time: "11:15", class: "OPEN BOX" },
    { time: "12:15", class: "OPEN BOX" },
    { time: "13:15", class: "CROSSFIT / OPEN BOX" },
    { time: "14:15", class: "OPEN BOX" },
    { time: "15:00", class: "CROSSFIT / OPEN BOX" },
    { time: "16:00", class: "CROSSFIT / OPEN BOX" },
    { time: "17:00", class: "CROSSFIT / OPEN BOX" },
    { time: "18:00", class: "CROSSFIT" },
    { time: "19:00", class: "CROSSFIT" },
    { time: "20:00", class: "CROSSFIT / OPEN BOX" },
  ],
  JUEVES: [
    { time: "7:00", class: "CROSSFIT / OPEN BOX" },
    { time: "8:00", class: "CROSSFIT / OPEN BOX" },
    { time: "9:15", class: "CROSSFIT / OPEN BOX" },
    { time: "10:15", class: "CROSSFIT / OPEN BOX" },
    { time: "11:15", class: "OPEN BOX" },
    { time: "12:15", class: "OPEN BOX" },
    { time: "13:15", class: "CROSSFIT / OPEN BOX" },
    { time: "16:00", class: "CROSSFIT / OPEN BOX" },
    { time: "17:00", class: "CROSSFIT / OPEN BOX" },
    { time: "18:00", class: "CROSSFIT" },
    { time: "19:00", class: "CROSSFIT" },
    { time: "20:00", class: "CROSSFIT / OPEN BOX" },
  ],
  VIERNES: [
    { time: "7:00", class: "CROSSFIT / OPEN BOX" },
    { time: "8:00", class: "CROSSFIT / OPEN BOX" },
    { time: "9:15", class: "CROSSFIT / OPEN BOX" },
    { time: "10:15", class: "CROSSFIT / OPEN BOX" },
    { time: "11:15", class: "OPEN BOX" },
    { time: "12:15", class: "OPEN BOX" },
    { time: "13:15", class: "CROSSFIT / OPEN BOX" },
    { time: "14:15", class: "OPEN BOX" },
    { time: "15:00", class: "CROSSFIT / OPEN BOX" },
    { time: "16:00", class: "CROSSFIT / OPEN BOX" },
    { time: "17:00", class: "CROSSFIT / OPEN BOX" },
    { time: "18:00", class: "CROSSFIT" },
    { time: "19:00", class: "CROSSFIT" },
    { time: "20:00", class: "CROSSFIT / OPEN BOX" },
  ],
  SÁBADO: [
    { time: "9:15", class: "MEGA WOD" },
    { time: "10:15", class: "MEGA WOD" },
    { time: "11:15", class: "OPEN BOX" },
  ],
  DOMINGO: [
    { time: "9:15", class: "CROSSFIT / OPEN BOX" },
    { time: "10:15", class: "CROSSFIT / OPEN BOX" },
  ],
};

const CrossfitSchedule = () => {
  const getClassForTimeAndDay = (time: string, day: string) => {
    const daySchedule = SCHEDULE_DATA[day as keyof typeof SCHEDULE_DATA];
    const scheduleItem = daySchedule?.find(item => item.time === time);
    return scheduleItem?.class || "-";
  };

  const getClassStyles = (className: string) => {
    if (className === "CROSSFIT") {
      return "bg-primary-violet text-theme-dark-gray";
    }
    if (className === "CROSSFIT / OPEN BOX") {
      return "bg-primary-blue text-theme-dark-gray";
    }
    if (className === "OPEN BOX") {
      return "bg-theme-light-gray text-theme-form-black";
    }
    if (className === "MEGA WOD") {
      return "bg-theme-violet-text text-theme-dark-gray";
    }
    if (className === "CROSSFIT / OPEN") {
      return "bg-theme-form-gray text-theme-white";
    }
    return "bg-theme-dark-gray text-theme-white";
  };
  

  return (
    <div className="w-full px-4 py-8 md:py-12 md:px-32 mx-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-zinc-700">
            <TableHead className="text-white bg-zinc-800">Hora</TableHead>
            {DAYS.map((day) => (
              <TableHead 
                key={day} 
                className="text-white text-center bg-zinc-800 font-bold"
              >
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ALL_HOURS.map((hour) => (
            <TableRow key={hour} className="border-zinc-700">
              <TableCell className="font-medium text-white bg-zinc-800">
                {hour}h
              </TableCell>
              {DAYS.map((day) => {
                const classType = getClassForTimeAndDay(hour, day);
                return (
                  <TableCell 
                    key={`${day}-${hour}`} 
                    className={cn(
                      "text-center font-medium transition-colors",
                      getClassStyles(classType)
                    )}
                  >
                    {classType}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CrossfitSchedule;