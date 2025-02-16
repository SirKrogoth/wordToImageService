import joi from 'joi';

const imageSchema = joi.object({
    source: 
            joi.string()
               .required(),
    date:
            joi.date()
               .required(),
    status: 
            joi.boolean()
               .required()
               .default(true),
    alt:
            joi.string()
               .required()
               .default('Image')
});

export { imageSchema }