function ModalMessage(message, state) {
    const stateTitle = state === "danger" ? "Error" : state;

    return (
        <article class={`message is-${state}`}>
            <div class="message-header">
                <p>{stateTitle}</p>
            </div>
            <div class="message-body">
                {message}
            </div>
        </article>
    )
}

export default ModalMessage;