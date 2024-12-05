document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    const themeSelect = document.getElementById('theme');
    const listStyleSelect = document.getElementById('list-style');
    const containerFluid = document.querySelector('.container-fluid');

    const items = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    function applyPreferences() {
        document.body.className = themeSelect.value;
        list.className = listStyleSelect.value;

        const themeColors = {
            'theme1': '#ffffff',
            'theme2': '#333333',
            'theme3': '#000000'
        };
        containerFluid.style.backgroundColor = themeColors[themeSelect.value] || '#ffffff';

        setTextColor();
    }

    function setTextColor() {
        const textColor = (themeSelect.value === 'theme2' || themeSelect.value === 'theme3') ? '#ffffff' : '#000000';
        containerFluid.querySelectorAll('h2').forEach(h2 => {
            if (!h2.closest('.preferences-panel')) {
                h2.style.color = textColor;
            }
        });
    }

    function loadPreferences() {
        const savedTheme = localStorage.getItem('theme');
        const savedListStyle = localStorage.getItem('list-style');
        if (savedTheme) {
            themeSelect.value = savedTheme;
        }
        if (savedListStyle) {
            listStyleSelect.value = savedListStyle;
        }
        applyPreferences();
    }

    function savePreferences() {
        localStorage.setItem('theme', themeSelect.value);
        localStorage.setItem('list-style', listStyleSelect.value);
    }

    function preferenceChange() {
        savePreferences();
        applyPreferences();
    }

    themeSelect.addEventListener('change', preferenceChange);
    listStyleSelect.addEventListener('change', preferenceChange);

    loadPreferences();
});
