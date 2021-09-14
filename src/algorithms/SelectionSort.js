import '../components/Home'

async function SelectionSort(arr, delay) {

    var buttons = document.getElementsByClassName("bt");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    document.getElementById('sizeSlider').disabled = true;

    const slide = document.getElementById('slider');

    await slide.addEventListener("change", (event) => {

        const slider = document.getElementById('slider');

        slider.value = event.target.value;

        delay = event.target.value;
    })

    for (let i = 0; i < arr.length; i++) {

        let min = i;

        const a = document.getElementById(i);
        a.style.backgroundColor = "red";

        for (let j = i + 1; j < arr.length; j++) {

            const b = document.getElementById(j);
            b.style.backgroundColor = "orange";

            if (arr[min] > arr[j]) {

                let a = document.getElementById(min);
                a.style.backgroundColor = "orange";

                min = j;

                b.style.backgroundColor = "red";
            }
        }

        if (min !== i) {

            a.style.backgroundColor = "red";

            const b = document.getElementById(min);
            b.style.backgroundColor = "red";

            var temp = a.style.height;
            a.style.height = b.style.height;
            b.style.height = temp;

            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

        }

        const c = document.getElementById(i);

        c.style.backgroundColor = "#13CE66";
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

    document.getElementById('sizeSlider').disabled = false;

}

export default SelectionSort;