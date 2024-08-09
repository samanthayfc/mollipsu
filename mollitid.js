function simulateKeyboardEvent(eventType, key, code, keyCode) {
    // Create a new keyboard event
    const event = new KeyboardEvent(eventType, {
        key: key,
        code: code,
        keyCode: keyCode,
        which: keyCode,
        bubbles: true, // Events bubble by default
        cancelable: true // Events can be canceled
    });

    // Dispatch the event on the document or any specific element
    document.dispatchEvent(event);
}
