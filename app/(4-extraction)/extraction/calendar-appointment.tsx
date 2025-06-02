import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {  ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"

export interface AppointmentDetails {
  title: string
  date: string
  startTime: string | null
  endTime: string | null
  location: string | null
  attendees: string[] | null
}

interface CalendarAppointmentProps {
  appointment: AppointmentDetails | null
}

export function CalendarAppointment({ appointment }: CalendarAppointmentProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 px-6 py-4">
        <CardTitle className="text-lg font-semibold">Appointment Details</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Appointment Name</p>
          <h2 className="text-2xl font-bold">
            {appointment?.title || "No appointment set"}
          </h2>
        </div>
        <DetailItem
          icon={<ClockIcon className="h-5 w-5 text-muted-foreground" />}
          label="Date & Time"
          value={
            appointment?.date
              ? `${appointment.date}${
                  appointment.startTime && appointment.endTime
                    ? `, ${appointment.startTime} - ${appointment.endTime}`
                    : ""
                }`
              : null
          }
          placeholder="No date or time set"
          emphasized
        />
        <DetailItem
          icon={<MapPinIcon className="h-5 w-5 text-muted-foreground" />}
          label="Location"
          value={appointment?.location}
          placeholder="No location set"
          emphasized
        />
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <UsersIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm font-semibold text-muted-foreground">Attendees</p>
          </div>
          {appointment?.attendees && appointment.attendees.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appointment.attendees.map((attendee, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs font-medium">
                      {attendee
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{attendee}</p>
                    <p className="text-xs text-muted-foreground">
                      {attendee.toLowerCase().split(" ").join("_")}@company.com
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No attendees set</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function DetailItem({ icon, label, value, placeholder, emphasized = false }: {
  icon: React.ReactNode
  label: string
  value: string | null | undefined
  placeholder: string
  emphasized?: boolean
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-muted-foreground">{label}</p>
        <p className={`${emphasized ? 'text-base font-medium' : 'text-sm'}`}>
          {value || <span className="font-normal text-muted-foreground">{placeholder}</span>}
        </p>
      </div>
    </div>
  )
}