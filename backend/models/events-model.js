const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eventSchema = new schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    categories: {
        type: [String],
        required: true,
        unique: false
    },
    capacity: {
        type: Number,
        required: false,
        unique: false
    },
    organizedBy: {
        type: String,
        required: true,
        unique: false
    },
    createdBy: {
        type: schema.Types.ObjectId,
        required: true,
        unique: false
    },
    posterPath: {
        type: String,
        required: false,
        unique: true
    },
    venue: {
        type: String,
        required: false,
        unique: false
    },
    creationDate: {
        type: Date,
        default: Date.now,
        required: true,
        unique: false
    },
    eventDate: {
        type: Date,
        required: true,
        unique: false
    },
    signupsAllowed: {
        type: Boolean,
        required: true,
        unique: false
    },
    attendees: {
        type: [schema.Types.ObjectId],
        required: false,
        unique: false
    }
});

const Event = mongoose.model('event', eventSchema);
module.exports = Event;