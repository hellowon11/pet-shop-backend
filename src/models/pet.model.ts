import mongoose from 'mongoose';

export interface IPet extends mongoose.Document {
  name: string;
  type: string;
  breed: string;
  age: number;
  description: string;
  price: number;
  imageUrl: string;
  status: 'available' | 'sold' | 'pending';
}

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  breed: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'sold', 'pending'],
    default: 'available'
  }
}, {
  timestamps: true
});

const Pet = mongoose.model<IPet>('Pet', petSchema);

export default Pet; 