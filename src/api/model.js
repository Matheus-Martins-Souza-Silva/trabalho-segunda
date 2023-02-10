import mongoose, { Schema } from 'mongoose'

const hFitSchema = new Schema({
  cliente: {
    type: String
  },
  employee: {
    type: String
  },
  gym: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

hFitSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      cliente: this.cliente,
      employee: this.employee,
      gym: this.gym,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('HFit', hFitSchema)

export const schema = model.schema
export default model
