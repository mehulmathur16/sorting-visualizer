import React, { Component } from 'react'
import Bar from './Bar'
import './home.css'
import BubbleSort from '../algorithms/BubbleSort';
import SelectionSort from '../algorithms/SelectionSort';


class Home extends Component {

    constructor() {
        super();
        this.mergeUtil = this.mergeUtil.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.merge = this.merge.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.partition = this.partition.bind(this);
        this.quickSortUtil = this.quickSortUtil.bind(this);
        this.insertionSort = this.insertionSort.bind(this);
    }


    state = {
        count: ((JSON.parse(sessionStorage.getItem('mySize'))))
            ? (JSON.parse(sessionStorage.getItem('mySize'))).value
            : 100,
        low: 50,
        high: 410,
        array: [],
        delay: ((JSON.parse(sessionStorage.getItem('myDelay'))))
            ? (JSON.parse(sessionStorage.getItem('myDelay'))).value
            : 300,
    };

    componentDidMount() {
        this.generateTempArray();
    }

    generateRandomNumber = (low, high) => {
        return Math.floor(Math.random() * (high - low) + low);
    }

    generateTempArray = () => {

        const count = this.state.count;

        // console.log(this.state.count);
        // console.log(this.state.delay);

        const temp = [];

        for (let i = 0; i < count; i++) {
            temp.push(this.generateRandomNumber(this.state.low, this.state.high));
        }

        this.setState({
            array: temp,
        })

    }

    async merge(arr, low, mid, high) {

        let n1 = mid - low + 1;
        let n2 = high - mid;

        let arr1 = [];
        let arr2 = [];

        for (let i = 0; i < n1; i++)
            arr1.push(arr[low + i]);

        for (let i = 0; i < n2; i++)
            arr2.push(arr[mid + 1 + i]);

        let i = 0, j = 0, k = low;

        while (i < n1 && j < n2) {

            if (arr1[i] <= arr2[j]) {

                const a = document.getElementById(k);
                a.style.backgroundColor = "red";

                arr[k] = arr1[i];
                i++;
                k++;
            }
            else {

                const a = document.getElementById(k);
                a.style.backgroundColor = "red";

                arr[k] = arr2[j];
                j++;
                k++;
            }
        }

        while (i < n1) {

            const a = document.getElementById(k);
            a.style.backgroundColor = "red";

            arr[k] = arr1[i];
            i++;
            k++;
        }

        while (j < n2) {

            const a = document.getElementById(k);
            a.style.backgroundColor = "red";

            arr[k] = arr2[j];
            j++;
            k++;
        }

        this.setState({
            array: arr,
        })

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, this.state.delay)
        );

        let l = low;

        while (l < k) {
            const a = document.getElementById(l);
            a.style.backgroundColor = "#13CE66";
            l++;
        }

    }

    async mergeSort(arr, low, high) {

        if (low < high) {

            let mid = Math.floor((low + high) / 2);

            await this.mergeSort(arr, low, mid);
            await this.mergeSort(arr, mid + 1, high);
            await this.merge(arr, low, mid, high);
        }

    }

    async mergeUtil() {

        var buttons = document.getElementsByClassName("bt");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        document.getElementById('sizeSlider').disabled = true;

        var temp = this.state.array;

        await this.mergeSort(temp, 0, temp.length - 1);

        console.log(this.state.array);

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }

        document.getElementById('sizeSlider').disabled = false;
    }

    async partition(arr, low, high) {

        let start = low;
        let pivot = arr[high];

        const d = document.getElementById(high);
        d.style.backgroundColor = "orange"

        for (let i = low; i < high; i++) {

            const b = document.getElementById(i);
            b.style.backgroundColor = "red";

            if (arr[i] <= pivot) {

                const a = document.getElementById(start);
                a.style.backgroundColor = "red";

                let temp = arr[i];
                arr[i] = arr[start];
                arr[start] = temp;

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, this.state.delay)
                );

                a.style.backgroundColor = "#13CE66";

                temp = a.style.height;
                a.style.height = b.style.height;
                b.style.height = temp;

                start++;
            }

            b.style.backgroundColor = "#13CE66";
        }

        let temp = arr[start];
        arr[start] = arr[high];
        arr[high] = temp;

        const c = document.getElementById(start);

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, this.state.delay)
        );

        temp = c.style.height;
        c.style.height = d.style.height;
        d.style.height = temp;

        d.style.backgroundColor = "#13CE66"

        return start;
    }

    async quickSort(arr, low, high) {

        if (low >= high)
            return;

        let part = await this.partition(arr, low, high);

        await this.quickSort(arr, low, part - 1);
        await this.quickSort(arr, part + 1, high);

        return arr;
    }

    async quickSortUtil() {

        var buttons = document.getElementsByClassName("bt");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        document.getElementById('sizeSlider').disabled = true;

        var temp = this.state.array;

        temp = await this.quickSort(temp, 0, temp.length - 1);

        this.setState({
            array: temp,
        })

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }

        document.getElementById('sizeSlider').disabled = false;
    }

    async insertionSort() {

        var buttons = document.getElementsByClassName("bt");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        document.getElementById('sizeSlider').disabled = true;

        var arr = this.state.array;

        let i, key, j;

        for (i = 1; i < arr.length; i++) {

            key = arr[i];
            j = i - 1;

            while (j >= 0 && arr[j] > key) {

                var a = document.getElementById(j);
                var b = document.getElementById(j + 1);

                a.style.backgroundColor = "red";
                b.style.backgroundColor = "red";

                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, this.state.delay)
                );

                arr[j + 1] = arr[j];
                j = j - 1;

                a.style.backgroundColor = "#13CE66";
                b.style.backgroundColor = "#13CE66";

                this.setState({
                    array: arr,
                })
            }
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, this.state.delay)
            );

            arr[j + 1] = key;

            this.setState({
                array: arr,
            })


        }

        this.setState({
            array: arr,
        })

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }

        document.getElementById('sizeSlider').disabled = false;
    }

    generateBars = () => {
        let bars = this.state.array.map((value, index) => {
            return <Bar key={index} index={index} length={value} />
        })
        return bars;
    }

    changeDelay = (event) => {
        const slider = document.getElementById('slider');

        slider.value = event.target.value;

        this.setState({
            delay: slider.value,
        })

        const obj = {
            "value": slider.value,
        }

        sessionStorage.setItem('myDelay', JSON.stringify(obj));
    }

    changeSize = (event) => {
        const slider = document.getElementById('sizeSlider');

        slider.value = event.target.value;

        console.log(slider.value);
        this.setState({
            count: slider.value,
        })

        const obj = {
            "value": slider.value,
        }

        sessionStorage.setItem("mySize", JSON.stringify(obj));

        this.generateTempArray();
    }

    render() {

        const a = this.generateBars();

        return (
            <div className="homeMain">

                <div className="heading">
                    <h1 >Sorting Visualizer</h1>
                </div>

                <div className="allButtons">

                    <button onClick={() => {
                        window.location.reload()

                    }} className="bt">Generate New Array</button>

                    <div className="sizeTracker">
                        <div>
                            <h3>Size</h3>
                        </div>

                        <div className="size" >
                            <h4>Small</h4>
                            <input type="range" min="100" max="1000" value={this.state.count} id="sizeSlider" onChange={this.changeSize}></input>
                            <h4>Large</h4>
                        </div>
                    </div>

                    <button onClick={() => {
                        BubbleSort(this.state.array, this.state.delay)
                    }} className="bt">Bubble Sort</button>

                    <button onClick={() => {
                        SelectionSort(this.state.array, this.state.delay)
                    }} className="bt">Selection Sort</button>

                    <button onClick={this.mergeUtil} className="bt">Merge Sort</button>

                    <button onClick={this.quickSortUtil} className="bt">Quick Sort</button>

                    <button onClick={this.insertionSort} className="bt">Insertion Sort</button>

                    <div className="speedTracker">
                        <div>
                            <h3>Speed</h3>
                        </div>

                        <div className="speed">
                            <h4>Fast</h4>
                            <input type="range" min="0.00001" max="500" value={this.state.delay} id="slider" onChange={this.changeDelay}></input>
                            <h4>Slow</h4>
                        </div>
                    </div>


                </div>

                <div className="barDisplay" id="b">
                    {a}
                </div>

            </div>
        )
    }
}

export default Home;