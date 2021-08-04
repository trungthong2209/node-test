import BaseEntity from "../Base/BaseEntity"

export default class Events extends BaseEntity<Events> {
  eventName: string;
  startDate: Date;
  dueDate: Date;
  description: string;
}
