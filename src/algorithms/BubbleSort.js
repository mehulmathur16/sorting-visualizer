
import '../components/Home'

async function BubbleSort(arr, delay) {

    var buttons = document.getElementsByClassName("bt");

    document.getElementById('sizeSlider').disabled = true;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    const slide = document.getElementById('slider');

    slide.addEventListener("change", (event) => {

        const slider = document.getElementById('slider');

        slider.value = event.target.value;

        delay = event.target.value;
    })

    for (var i = 0; i < arr.length; i++) {

        for (var j = 0; j < (arr.length - i - 1); j++) {

            const a = document.getElementById(j);
            const b = document.getElementById(j + 1);

            a.style.backgroundColor = "#FF4949";
            b.style.backgroundColor = "#FF4949";

            if (arr[j] > arr[j + 1]) {

                var temp = a.style.height;
                a.style.height = b.style.height;
                b.style.height = temp;

                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, delay)
                );
            }

            a.style.backgroundColor = "orange";
            b.style.backgroundColor = "orange";
        }

        const c = document.getElementById(arr.length - i - 1);

        c.style.backgroundColor = "#13CE66";

    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

    document.getElementById('sizeSlider').disabled = false;

}

export default BubbleSort;