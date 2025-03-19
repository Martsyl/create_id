document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            const uploadIcon = document.getElementById('uploadIcon');
            preview.src = e.target.result;
            preview.style.display = 'block';
            uploadIcon.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
});