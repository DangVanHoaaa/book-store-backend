const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tên tác giả không được để trống'],
      trim: true
    },


    slug: {
      type: String,
      lowercase: true,
      unique: true
    },

   
    bio: {
      type: String,
      default: ''
    },

   
    avatar: {
      url: { type: String, default: '' },
      publicId: { type: String, default: '' }
    },

  
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },

    deleted: {
      type: Boolean,
      default: false
    },

    deletedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Author', authorSchema)
