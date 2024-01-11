document.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal('#exemplo-modal');

    setTimeout(() => modal.show(), 3000);
});