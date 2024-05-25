import React, { useState } from "react";
import Modal from "react-modal";
import FeedbackForm from "./FeedbackForm";

Modal.setAppElement("#root");

const ModalButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Открыть 
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Форма обратной связи"
                className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
            >
                <div className="bg-white rounded-lg p-8 max-w-lg mx-auto">
                    <h2 className="text-2xl mb-4">Форма обратной связи</h2>
                    <FeedbackForm onClose={closeModal} />
                </div>
            </Modal>
        </div>
    );
};

export default ModalButton;
