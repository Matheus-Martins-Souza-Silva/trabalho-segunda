import mongoose, { Schema } from 'mongoose'

const gymNetworkSchema = new Schema({
  name: {
    type: String,
    index: true,
    trim: true,
    required: true
  },
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  telephone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

gymNetworkSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this._id,
      name: this.name,
      email: this.email,
      telephone: this.telephone,
      address: this.address
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('GymNetwork', gymNetworkSchema)

export const schema = model.schema
export default model
