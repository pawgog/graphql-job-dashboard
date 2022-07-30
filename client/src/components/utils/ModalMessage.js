function ModalMessage(message, state) {
    const stateTitle = state === "danger" ? "Error" : state;

    return (
        <article className={`message is-${state}`}>
            <div className="message-header">
                <p>{stateTitle}</p>
            </div>
            <div className="message-body">
                {message}
            </div>
        </article>
    )
}

export default ModalMessage;