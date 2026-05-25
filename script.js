document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('tourForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем перезагрузку страницы

            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const tourSelect = document.getElementById('tour-select');
            const tour = tourSelect.options[tourSelect.selectedIndex].text;
            
            
            alert(`Спасибо, ${name}!\n\nВаша заявка на экскурсию:\n"${tour}"\nна дату: ${date} успешно зарегистрирована.\n\nМы свяжемся с вами по указанному номеру телефона в ближайшее время!`);
            
            form.reset(); // Сбрасываем форму
        });
    }
});