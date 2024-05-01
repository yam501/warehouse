import {Form} from "react-bootstrap";
import {useContext, useState} from "react";
import {Context} from "../../../index";

const AddProducts = () => {
    const {product} = useContext(Context)

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [count, setCount] = useState('')
    const [validated, setValidated] = useState(false)


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            product.create(name,category,count)
            setDefaultValue()
            return 0
        }


        setValidated(true);
    };

    const setDefaultValue = () => {
        setName('')
        setCategory('')
        setCount('')
        setValidated(false)
    }


    return (
        <Form className="d-flex justify-content-center align-content-center align-items-center flex-column"
              validated={validated} onSubmit={handleSubmit}>
            <div className="d-flex flex-row">
                <div className="mt-5 me-5 d-flex flex-column align-items-center">
                    <p className="ms-1 me-2 mb-1">Категория</p>
                    <Form.Control
                        required
                        value={category}
                        placeholder="Введите категорию..."
                        onChange={event => setCategory(event.target.value)}
                    >
                    </Form.Control>
                </div>
                <div className="me-5 mt-5 d-flex flex-column align-items-center">
                    <p className="ms-1 me-2 mb-1">Название</p>
                    <Form.Control
                        required
                        value={name}
                        placeholder="Введите название..."
                        onChange={event => setName(event.target.value)}
                    >
                    </Form.Control>
                </div>
                <div className="mt-5  d-flex flex-column align-items-center">
                    <p className="ms-1 me-2 mb-1">Количество</p>
                    <Form.Control
                        required
                        value={count}
                        placeholder="Введите количество..."
                        onChange={event => setCount(event.target.value)}
                    >
                    </Form.Control>
                </div>
            </div>
            <div className="d-flex  justify-content-center mt-3">
                <button className="w-52 bg-blue-500 active:bg-blue-500 h-10 rounded-md text-white hover:bg-blue-700 duration-500">Добавить на склад</button>
            </div>
        </Form>
    );
};

export default AddProducts;