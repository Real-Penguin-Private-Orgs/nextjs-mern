import * as yup from 'yup'

export const schema = yup.object().shape({
    flavour: yup.string().trim().required(),
    brand: yup.string().trim().required(),
    logo: yup.string().url().trim().required()
})