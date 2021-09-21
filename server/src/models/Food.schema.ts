import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().trim().required(),
    brand: yup.string().trim().required(),
    logo: yup.string().url().trim().required()
})