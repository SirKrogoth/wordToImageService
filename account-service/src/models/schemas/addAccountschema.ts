import joi from 'joi';

const addAccount = joi.object({
    user: 
        joi.string()
           .min(6)
           .max(50)
           .required(),
    password:
        joi.string()
           .min(6)
           .max(255)
           .required(),
    status:
        joi.boolean()
           .required()
           .default(true)
});

export { addAccount }