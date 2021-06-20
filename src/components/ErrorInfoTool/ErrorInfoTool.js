import "./ErrorInfoTool.css";

function ErrorInfoTool({ isShown }) {
    return(
        <>
        {isShown && (
            <p className="error-info-tool__text">
            Что-то пошло не так...
        </p>
        )}
        
        </>
    );
}

export default ErrorInfoTool;