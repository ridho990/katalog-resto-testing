const DialogueError = {
    init({ btnClose, btnYes, overlay, wrapperDialogue }) {
        btnClose.addEventListener('click', () => {
            console.log('test');
            this.closeDialogueError(overlay, wrapperDialogue);
        });
        btnYes.addEventListener('click', () => {
            console.log('test');
            this.closeDialogueError(overlay, wrapperDialogue);
        });
        overlay.addEventListener('click', () => {
            console.log('test');
            this.closeDialogueError(overlay, wrapperDialogue);
        });
        console.log('test');
    },

    closeDialogueError(overlay, wrapperDialogue) {
        overlay.classList.add('hidden');
        wrapperDialogue.classList.add('hidden');
    },

    showDialogueError({ overlay, wrapperDialogue }) {
        overlay.classList.remove('hidden');
        wrapperDialogue.classList.remove('hidden');
    },
};

export default DialogueError;
