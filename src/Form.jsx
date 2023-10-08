import {useForm} from "use-custom-hooks";

function Form() {
    const [values, onChange] = useForm({
        username: 'Jamaoui',
        age: 30
    })
    return (
        <form>
            <h6 className={'text-primary display-6'}>useForm</h6>
            <div className="input-group mb-3">
                <span className="input-group-text">Username</span>
                <input type="text" defaultValue={values.username} name='username' className="form-control" placeholder="Username" onChange={onChange}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Age</span>
                <input type="text" defaultValue={values.age}  name='age' className="form-control" placeholder="Age" onChange={onChange}/>
            </div>
            <div className="mb-3">
                <button onClick={(e) => {
                    e.preventDefault()
                    console.log(values)
                }} className="btn w-100 btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default Form;