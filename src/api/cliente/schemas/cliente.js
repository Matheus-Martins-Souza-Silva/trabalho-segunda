import mongoose, { Schema } from 'mongoose'

const clienteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
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

clienteSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this._id,
      name: this.name,
      age: this.age,
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

const model = mongoose.model('Cliente', clienteSchema)

export const schema = model.schema
export default model
