function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close modal function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};




// Function to open modal
function openModal1(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("imageModal").style.display = "flex";
    
    // Disable scrolling
    document.body.style.overflow = "hidden";
}

// Function to close modal
function closeModal1() {
    document.getElementById("imageModal").style.display = "none";
    
    // Enable scrolling
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside image
window.onclick = function(event) {
    let modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal1();
    }
};
