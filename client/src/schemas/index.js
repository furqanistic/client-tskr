import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
const nameRules = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/

// A list of some popular temporary email providers.
const bannedDomains = [
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'mailinator.com',
  'trashmail.com',
  'yopmail.com',
  'getnada.com',
  'mohmal.com',
  'throwawaymail.com',
  // ... you can extend this list as you discover more domains
]

export const basicSchema = yup.object().shape({
  fname: yup.string().required('Please enter your first name'),
  lname: yup.string().required('Please enter your last name'),
  email: yup
    .string()
    .required('Please enter an email address')
    .email('Please enter a valid email')
    .test(
      'banned-domain-check',
      'Temporary emails are not allowed',
      (value) => {
        if (!value) return true // If no email, the previous required rule will catch it.
        const domain = value.split('@')[1]
        return !bannedDomains.includes(domain)
      }
    ),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        'Please create a stronger password - a password must contain 1 upper case letter, 1 lower case letter, 1 numeric digit',
    })
    .required('Password is required'),
})
