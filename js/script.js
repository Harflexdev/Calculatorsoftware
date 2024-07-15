  const display = document.getElementById('result');
  const clickSound = document.getElementById('click-sound');

        function playClickSound() {
            
            clickSound.play();
        }

        function clearDisplay() {
            display.value = '';
            playClickSound();
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
            playClickSound();
        }

        function appendToDisplay(value) {
            if (value === '√') {
                display.value = Math.sqrt(display.value);
            } else {
                display.value += value;
            }
            playClickSound();
        }

        function squareNumber() {
            display.value = Math.pow(display.value, 2);
            playClickSound();
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
            playClickSound();
        }