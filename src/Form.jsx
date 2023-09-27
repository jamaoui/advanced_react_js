import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const schema = yup.object({
    fullName: yup.string().required(),
    age: yup.number().required(),
    password: yup.string().test('value', 'Invalid password', value => {
        return value === '123456'
    }),
    email: yup.string().required().email()
})
const Form = () => {
    const {
         register, handleSubmit,
        formState
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const user = await response.json()
            return {
                fullName: user.name,
                email: user.email,
                age: 30,
                password: '123456'
            }

        }
    })
    const {errors, isSubmitted, isValid, dirtyFields, submitCount, isLoading, isSubmitSuccessful} = formState
    const submitForm = (data) => {
        console.log(data)
    }
    return (
        <div>
            {submitCount > 3 ?
                <div className="alert alert-danger" role="alert">
                    <strong>You are blocked , please contact the administrator !!! </strong>
                </div>
                :
                <>
                    {isLoading && <div>Loading...</div>}
                    {isSubmitSuccessful && <div className="alert alert-primary" role="alert">
                        <strong>Success: </strong>
                        Form submitted !
                    </div>
                    }
                    <h2 className='display-6 text-primary'>Update user</h2>
                    <hr className='text-primary'/>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="form-group">
                            <label>Full name</label>
                            <input className='form-control' type="text" {...register('fullName', {
                                /*required: true,
                                minLength: {
                                    value: 5,
                                    message: 'Too many characters'
                                },*/
                            })}/>
                            {errors.fullName && <span className='text-danger'>{errors.fullName.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input className='form-control' type="text" {...register('age', {
                                /*min: 18,
                                max: 120*/
                            })} />
                            {errors.age && <span className='text-danger'>{errors.age.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input className='form-control' type="password" {...register('password', {
                                /*validate: (value) => {
                                    return value === '123456' || 'Invalid password'
                                }*/
                            })} />
                            {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input className='form-control' type="email" {...register('email', {
                                /*pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Invalid Email'
                                }*/
                            })} />
                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                            <label>Country</label>
                            <select className='form-select' {...register('country')} >
                                <option value="">Select your country</option>
                                <option value="MA">Morocco</option>
                                <option value="DZ">Algeria</option>
                                <option value="TN">Tunisia</option>
                            </select>
                        </div>

                        <div className="my-3">
                            <input disabled={!isValid || Object.keys(dirtyFields).length === 0} className='btn btn-primary'
                                   type="submit" value='Submit'/>
                        </div>
                    </form>
                </>
            }

        </div>
    );
};
export default Form;