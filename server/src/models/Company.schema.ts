import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().trim().required(),
    owner: yup.string().trim().required(),
    website: yup.string().trim().url(),
    logo: yup.string().url().required().trim()
})