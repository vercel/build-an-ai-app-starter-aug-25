"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarAppointment } from "./calendar-appointment";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // extract appointment
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Extract Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="appointment"
                placeholder="Enter appointment details..."
                className="w-full"
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Extracting..." : "Extract Appointment"}
              </Button>
            </form>
          </CardContent>
        </Card>
        <CalendarAppointment appointment={null} />
      </div>
    </div>
  );
}
