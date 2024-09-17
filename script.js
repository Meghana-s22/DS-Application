
let stack = [];
let maxStackSize = 0;

function setStackSize() {
    const size = document.getElementById("stackSize").value;
    if (size && size > 0) {
        maxStackSize = parseInt(size);
        document.getElementById("stackInput").disabled = false;
        document.querySelector("button[onclick='pushToStack()']").disabled = false;
        document.querySelector("button[onclick='popFromStack()']").disabled = false;
        alert(`Stack size set to ${maxStackSize}`);
    } else {
        alert("Please enter a valid stack size");
    }
}

function pushToStack() {
    const input = document.getElementById("stackInput");
    if (input.files.length > 0) {
        if (stack.length + input.files.length > maxStackSize) {
            alert("Cannot add more images. Stack size exceeded!");
            return;
        }

        for (let file of input.files) {
            let reader = new FileReader();
            reader.onload = function(e) {
                stack.push(e.target.result);
                renderStackImages();
            };
            reader.readAsDataURL(file);
        }
    }
}

function popFromStack() {
    if (stack.length > 0) {
        stack.pop();  
        renderStackImages();
    } else {
        alert("Stack is empty!");
    }
}

function renderStackImages() {
    const stackDiv = document.getElementById("stackImages");
    stackDiv.innerHTML = "";
    stack.forEach((imageSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        stackDiv.appendChild(imgElement);
    });
}


let queue = [];
let maxQueueSize = 0;

function setQueueSize() {
    const size = document.getElementById("queueSize").value;
    if (size && size > 0) {
        maxQueueSize = parseInt(size);
        document.getElementById("queueInput").disabled = false;
        document.querySelector("button[onclick='enqueue()']").disabled = false;
        document.querySelector("button[onclick='dequeue()']").disabled = false;
        alert(`Queue size set to ${maxQueueSize}`);
    } else {
        alert("Please enter a valid queue size");
    }
}

function enqueue() {
    const input = document.getElementById("queueInput");
    if (input.files.length > 0) {
        if (queue.length + input.files.length > maxQueueSize) {
            alert("Cannot add more images. Queue size exceeded!");
            return;
        }

        for (let file of input.files) {
            let reader = new FileReader();
            reader.onload = function(e) {
                queue.push(e.target.result);
                renderQueueImages();
            };
            reader.readAsDataURL(file);
        }
    }
}

function dequeue() {
    if (queue.length > 0) {
        queue.shift();  
        renderQueueImages();
    } else {
        alert("Queue is empty!");
    }
}

function renderQueueImages() {
    const queueDiv = document.getElementById("queueImages");
    queueDiv.innerHTML = "";
    queue.forEach((imageSrc) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageSrc;
        queueDiv.appendChild(imgElement);
    });
}
