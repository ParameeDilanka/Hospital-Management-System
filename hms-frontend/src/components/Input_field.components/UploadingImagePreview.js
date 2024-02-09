import React from "react";
import './uiComponentsStyles.css';

const PreviewImage = ({ file }) => {
    const [preview, setPreview] = React.useState(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    };

    return (
        <div>
            {preview ? <img className="UploadingImagePreview" src={preview} alt="preview"/> : "lpading.."}
        </div>
    );
};

export default  PreviewImage;