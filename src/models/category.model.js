const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema(
{
    // Tên danh mục 
    title: {
      type: String,
      required: [true, 'Tên danh mục không được để trống'], 
      trim: true 
    },

    // Đường dẫn chuẩn SEO 
    slug: {
      type: String,
      lowercase: true, 
      unique: true 
    },

    // Danh mục cha 
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', 
      default: null
    },

    // Trạng thái hiển thị 
    status: {
      type: Boolean,
      default: true
    },

    // Soft Delete
    deleted: {
      type: Boolean,
      default: false
    },

    // Thời gian xóa
    deletedAt: {
      type: Date,
      default: null
    }
  },
  {

    timestamps: true
  }
)


module.exports = mongoose.model('Category', categorySchema) 