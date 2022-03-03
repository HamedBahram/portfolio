import { string } from 'yup'

export const emailSchema = string()
  .email('Please provide a valid email.')
  .required('Email is required.')
