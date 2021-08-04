import mongoose from 'mongoose';
import Events from '../Events';
import BaseEntity from '../../Base/BaseEntity'
let EventsSchema = new mongoose.Schema<Events>({
    eventName: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      default: Date.now()
    },
    dueDate: {
      type: Date,
      default:  Date.now()
    },
    description: {
      type: String,
      required: true
    },
  })
  EventsSchema.index({startDate : 1 })
  const EventsManager = mongoose.model<Events>('Events', EventsSchema);
  export default EventsManager ;