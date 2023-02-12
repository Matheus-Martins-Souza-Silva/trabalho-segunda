import mongoose, { Schema } from 'mongoose'

const clienteSchema = new Schema({
  name: {
    type: String,
    index: true,
    trim: true,
    required: true
  },
  age: {
    type: Number,
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

clienteSchema.path('email').set(function (email) {
  if (!this.picture || this.picture.indexOf('https://gravatar.com') === 0) {
    const hash = crypto.createHash('md5').update(email).digest('hex')
    this.picture = `https://gravatar.com/avatar/${hash}?d=identicon`
  }

  if (!this.name) {
    this.name = email.replace(/^(.+)@.+$/, '$1')
  }

  return email
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
