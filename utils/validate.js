import { string } from 'yup'

export const emailSchema = string()
  .trim()
  .email('Please provide a valid email.')
  .required('Email is required.')
