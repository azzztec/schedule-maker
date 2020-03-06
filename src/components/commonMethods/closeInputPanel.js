export function closeInputPanels(event) {
    const activePanels = document.querySelectorAll('.active-panel');
    let currentParent = event.target;

    while(!currentParent.classList.contains('active-panel')) {
        currentParent = currentParent.parentElement;
        if(currentParent.classList.contains('active-panel')) {
            return false;

        } else if(currentParent.classList.contains('root')) {
            for(let activeElement of activePanels) {
                activeElement.classList.remove('active-panel');
            }
        }
    }
}