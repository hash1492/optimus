import React, { useState } from 'react'
import s from './AddActionModal.module.scss'

interface AddActionModalProps {
    addAction: (action: { name: string; img: string | null }) => void;
    closeModal: () => void;
}

function AddActionModal({ addAction, closeModal }: AddActionModalProps) {
    const [name, setName] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile: File | null = event.target.files ? event.target.files[0] : null;
        if (selectedFile) {
            const imageUrl: string = URL.createObjectURL(selectedFile);
            setImage(imageUrl); // Set the URL for the image
        }
    };
    const onAddAction = () => {
        const obj = {
            name: name,
            img: image
        }
        addAction(obj);
    }
  return (
    <div className={s.modal}>
        <div className={s.modalContent}>
            <h2>Add Action</h2>
            <input type="text" placeholder="Enter name" id="name" value={name} 
        onChange={handleInputChange} />
            <input type="file" id="imageUpload" onChange={handleFileChange} />
            <div className={s.modalButtons}>
                <button onClick={onAddAction} disabled={!name || !image}>Add Action</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddActionModal