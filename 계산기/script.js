const input = document.getElementById('input');
        let equation = '';

        function append(value) {
            equation += value;
            input.value = equation;
        }

        function clearAll() {
            equation = '';
            input.value = '0';
        }

        function backspace() {
            equation = equation.slice(0, -1);
            input.value = equation || '0';
        }

        function calculate() {
            try {
                const result = eval(equation);
                input.value = result || '0';
                equation = '';
            } catch (error) {
                alert('Invalid equation');
            }
        }