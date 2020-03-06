const toggleInputsPanel = function toggleInputsPanel() {
    const panel = this.panel.current;
    if(panel) {
        panel.classList.toggle('active-panel');
    }
}

const closeInputsPanel = function closeInputsPanel() {
    const panel = this.panel.current;
    if(panel) {
        panel.classList.remove('active-panel');
    }
    
}

export {toggleInputsPanel, closeInputsPanel};