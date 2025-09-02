document.addEventListener('DOMContentLoaded', function() {
    // Обработка модального окна
    if (!localStorage.getItem('notificationShown')) {
        const modal = document.getElementById('welcome-modal');
        modal.style.display = 'block';

        document.getElementById('close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
            localStorage.setItem('notificationShown', 'true');
        });
    }

    // Обработка блока контактов
    const close_contacts_btn = document.getElementById("close_contacts");
    const open_contacts_btn = document.getElementById('open_contacts');
    const footer = document.getElementById("footer");

    if (close_contacts_btn && open_contacts_btn && footer) {
        // Проверяем сохраненное состояние
        const isFooterHidden = localStorage.getItem('footerHidden') === 'true';

        // Устанавливаем начальное состояние
        if (isFooterHidden) {
            footer.style.display = 'none';
            close_contacts_btn.style.display = 'none';
            open_contacts_btn.style.display = 'block';
        } else {
            footer.style.display = 'block';
            close_contacts_btn.style.display = 'block';
            open_contacts_btn.style.display = 'none';
        }

        // Обработчики событий
        close_contacts_btn.addEventListener('click', function() {
            footer.style.display = 'none';
            close_contacts_btn.style.display = 'none';
            open_contacts_btn.style.display = 'block';
            localStorage.setItem('footerHidden', 'true');
        });

        open_contacts_btn.addEventListener('click', function() {
            footer.style.display = 'block';
            close_contacts_btn.style.display = 'block';
            open_contacts_btn.style.display = 'none';
            localStorage.setItem('footerHidden', 'false');
        });
    }
});