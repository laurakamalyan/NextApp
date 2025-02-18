import Form from "@/components/Form"
import {Button, Modal} from "antd";
import {useState} from "react";

const Contacts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <h1>Contacts page</h1>
            <Button type="primary" onClick={showModal}>Open</Button>
            <Modal
                title="Login Form"
                open={isModalOpen}
                onOk={closeModal}
                onCancel={closeModal}
            >
                <Form/>
            </Modal>
        </div>
    )
}

export default Contacts