"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockWorkouts = [
  { id: 1, name: "Squat", sets: 4, reps: 5, weight: 100 },
  { id: 2, name: "Bench Press", sets: 3, reps: 8, weight: 80 },
  { id: 3, name: "Deadlift", sets: 1, reps: 5, weight: 140 },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-8 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Workout Log
        </h1>

        <div className="mb-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-56 justify-start gap-2">
                <CalendarIcon className="h-4 w-4 text-zinc-500" />
                {format(date, "do MMM yyyy")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => d && setDate(d)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Workouts for {format(date, "do MMM yyyy")}
          </h2>

          {mockWorkouts.length === 0 ? (
            <p className="text-sm text-zinc-400">No workouts logged for this date.</p>
          ) : (
            mockWorkouts.map((workout) => (
              <Card key={workout.id}>
                <CardHeader className="pb-1 pt-4">
                  <CardTitle className="text-base font-semibold">{workout.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {workout.sets} sets × {workout.reps} reps @ {workout.weight} kg
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
